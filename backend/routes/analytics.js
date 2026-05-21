import express from 'express'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()
const plausibleBase = 'https://plausible.io/api/v1'

async function plausible(path, params) {
  const search = new URLSearchParams({
    site_id: process.env.PLAUSIBLE_SITE_ID || '',
    period: params.period || '30d',
    ...params,
  })
  const response = await fetch(`${plausibleBase}${path}?${search.toString()}`, {
    headers: { Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY || ''}` },
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.error || 'Plausible request failed')
  return data
}

router.get('/summary', authenticate, async (req, res) => {
  try {
    const data = await plausible('/stats/aggregate', {
      period: req.query.period || '30d',
      metrics: 'visitors,pageviews,bounce_rate,visit_duration',
    })
    res.json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/timeseries', authenticate, async (req, res) => {
  try {
    res.json(await plausible('/stats/timeseries', { period: req.query.period || '30d', metrics: 'visitors,pageviews' }))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/pages', authenticate, async (req, res) => {
  try {
    res.json(await plausible('/stats/breakdown', { period: req.query.period || '30d', property: 'event:page', metrics: 'visitors' }))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/sources', authenticate, async (req, res) => {
  try {
    res.json(await plausible('/stats/breakdown', { period: req.query.period || '30d', property: 'visit:source', metrics: 'visitors' }))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
