import express from 'express'
import slugify from 'slugify'
import { authenticate, requireAdmin, requireEditor, supabase } from '../middleware/auth.js'

const router = express.Router()
const postFields = `
  *,
  author:profiles(full_name),
  category:categories(name)
`

function parsePagination(req) {
  const page = Math.max(Number(req.query.page || 1), 1)
  const limit = Math.min(Math.max(Number(req.query.limit || 20), 1), 100)
  const from = (page - 1) * limit
  const to = from + limit - 1
  return { page, limit, from, to }
}

async function attachOptionalUser(req) {
  const authHeader = req.headers.authorization || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null
  if (!token) return null
  const { data } = await supabase.auth.getUser(token)
  if (!data.user) return null
  const { data: profile } = await supabase.from('profiles').select('id, full_name, role').eq('id', data.user.id).single()
  return profile ? { id: data.user.id, email: data.user.email, role: profile.role, full_name: profile.full_name } : null
}

router.get('/', async (req, res) => {
  const { from, to, page, limit } = parsePagination(req)
  req.user = await attachOptionalUser(req)
  let query = supabase
    .from('posts')
    .select(postFields, { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (req.query.status) query = query.eq('status', req.query.status)
  if (req.query.slug) query = query.eq('slug', req.query.slug)
  if (!req.user) query = query.eq('status', 'published')
  if (req.user?.role === 'editor') query = query.eq('author_id', req.user.id)

  const { data, error, count } = await query
  if (error) return res.status(400).json({ error: error.message })
  res.json({ data, page, limit, total: count || 0 })
})

router.get('/:id', authenticate, async (req, res) => {
  const { data, error } = await supabase
    .from('posts')
    .select(postFields)
    .eq('id', req.params.id)
    .single()

  if (error) return res.status(404).json({ error: 'Post not found' })
  if (req.user.role === 'editor' && data.author_id !== req.user.id) {
    return res.status(403).json({ error: 'Insufficient permissions' })
  }
  res.json(data)
})

router.post('/', authenticate, requireEditor, async (req, res) => {
  const status = req.user.role === 'admin' ? req.body.status || 'draft' : 'draft'
  const payload = {
    ...req.body,
    status,
    slug: slugify(req.body.title || '', { lower: true, strict: true }),
    author_id: req.user.id,
    published_at: status === 'published' ? new Date().toISOString() : null,
  }

  const { data, error } = await supabase.from('posts').insert(payload).select(postFields).single()
  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json(data)
})

router.patch('/:id', authenticate, requireEditor, async (req, res) => {
  if (req.body.status === 'published' && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Only admins can publish posts' })
  }

  const { data: existing, error: existingError } = await supabase
    .from('posts')
    .select('id, author_id, status, published_at')
    .eq('id', req.params.id)
    .single()

  if (existingError) return res.status(404).json({ error: 'Post not found' })
  if (req.user.role === 'editor' && existing.author_id !== req.user.id) {
    return res.status(403).json({ error: 'Insufficient permissions' })
  }

  const payload = { ...req.body }
  delete payload.id
  delete payload.slug
  if (payload.title) payload.slug = slugify(payload.title, { lower: true, strict: true })
  if (payload.status === 'published' && !existing.published_at) payload.published_at = new Date().toISOString()

  const { data, error } = await supabase
    .from('posts')
    .update(payload)
    .eq('id', req.params.id)
    .select(postFields)
    .single()

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

router.delete('/:id', authenticate, requireAdmin, async (req, res) => {
  const { error } = await supabase.from('posts').delete().eq('id', req.params.id)
  if (error) return res.status(400).json({ error: error.message })
  res.json({ ok: true })
})

export default router
