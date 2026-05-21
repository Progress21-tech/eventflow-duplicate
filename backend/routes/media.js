import express from 'express'
import multer from 'multer'
import path from 'path'
import { authenticate, requireAdmin, requireEditor, supabase } from '../middleware/auth.js'

const router = express.Router()
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    cb(file.mimetype.startsWith('image/') ? null : new Error('Only image uploads are allowed'), file.mimetype.startsWith('image/'))
  },
})

router.get('/', authenticate, async (req, res) => {
  const page = Math.max(Number(req.query.page || 1), 1)
  const limit = Math.min(Math.max(Number(req.query.limit || 40), 1), 100)
  const from = (page - 1) * limit
  const to = from + limit - 1
  const { data, error, count } = await supabase
    .from('media')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) return res.status(400).json({ error: error.message })
  res.json({ data, page, limit, total: count || 0 })
})

router.post('/', authenticate, requireEditor, upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })

  const ext = path.extname(req.file.originalname)
  const storagePath = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`
  const { error: uploadError } = await supabase.storage
    .from('media')
    .upload(storagePath, req.file.buffer, { contentType: req.file.mimetype, upsert: false })

  if (uploadError) return res.status(400).json({ error: uploadError.message })

  const { data: publicUrlData } = supabase.storage.from('media').getPublicUrl(storagePath)
  const payload = {
    file_name: req.file.originalname,
    file_url: publicUrlData.publicUrl,
    file_type: req.file.mimetype,
    file_size: req.file.size,
    alt_text: req.body.alt_text || '',
    uploaded_by: req.user.id,
  }
  const { data, error } = await supabase.from('media').insert(payload).select('*').single()
  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json(data)
})

router.patch('/:id', authenticate, requireEditor, async (req, res) => {
  const { data, error } = await supabase
    .from('media')
    .update({ alt_text: req.body.alt_text || '' })
    .eq('id', req.params.id)
    .select('*')
    .single()

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

router.delete('/:id', authenticate, requireAdmin, async (req, res) => {
  const { data: media, error: findError } = await supabase.from('media').select('*').eq('id', req.params.id).single()
  if (findError) return res.status(404).json({ error: 'Media item not found' })

  const marker = '/storage/v1/object/public/media/'
  const storagePath = media.file_url.includes(marker) ? media.file_url.split(marker)[1] : null
  if (storagePath) await supabase.storage.from('media').remove([storagePath])

  const { error } = await supabase.from('media').delete().eq('id', req.params.id)
  if (error) return res.status(400).json({ error: error.message })
  res.json({ ok: true })
})

export default router
