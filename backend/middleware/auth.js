import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-role-key'
)

export async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null

    if (!token) {
      return res.status(401).json({ error: 'Missing authorization token' })
    }

    const { data, error } = await supabase.auth.getUser(token)
    if (error || !data.user) {
      return res.status(401).json({ error: 'Invalid authorization token' })
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id, full_name, role')
      .eq('id', data.user.id)
      .single()

    if (profileError || !profile) {
      return res.status(401).json({ error: 'User profile not found' })
    }

    req.user = {
      id: data.user.id,
      email: data.user.email,
      role: profile.role,
      full_name: profile.full_name,
    }

    next()
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' })
  }
}

export function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' })
    }
    next()
  }
}

export const requireAdmin = requireRole('admin')
export const requireEditor = requireRole('admin', 'editor')
