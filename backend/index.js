import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import posts from './routes/posts.js'
import caseStudies from './routes/caseStudies.js'
import media from './routes/media.js'
import users from './routes/users.js'
import analytics from './routes/analytics.js'

dotenv.config()

const app = express()
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '10mb' }))

app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.use('/api/posts', posts)
app.use('/api/case-studies', caseStudies)
app.use('/api/media', media)
app.use('/api/users', users)
app.use('/api/analytics', analytics)

app.use((error, _req, res, _next) => {
  res.status(400).json({ error: error.message || 'Request failed' })
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`CMS API listening on ${process.env.PORT || 4000}`)
})
