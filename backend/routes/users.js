import express from 'express'
import { authenticate, requireAdmin, supabase } from '../middleware/auth.js'

const router = express.Router()

router.get('/', authenticate, requireAdmin, async (_req, res) => {
  const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false })
  if (error) return res.status(400).json({ error: error.message })
  res.json({ data })
})

router.get('/me', authenticate, async (req, res) => {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', req.user.id).single()
  if (error) return res.status(404).json({ error: 'Profile not found' })
  res.json(data)
})

router.post('/invite', authenticate, requireAdmin, async (req, res) => {
  const { data, error } = await supabase.auth.admin.inviteUserByEmail(req.body.email, {
    data: { role: req.body.role || 'viewer' },
  })
  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json(data)
})

router.patch('/:id/role', authenticate, requireAdmin, async (req, res) => {
  if (req.params.id === req.user.id) {
    return res.status(400).json({ error: 'You cannot change your own role' })
  }
  const { data, error } = await supabase
    .from('profiles')
    .update({ role: req.body.role })
    .eq('id', req.params.id)
    .select('*')
    .single()

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

router.delete('/:id', authenticate, requireAdmin, async (req, res) => {
  const { error } = await supabase.auth.admin.deleteUser(req.params.id)
  if (error) return res.status(400).json({ error: error.message })
  res.json({ ok: true })
})

export default router
