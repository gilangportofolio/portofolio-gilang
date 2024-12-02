import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    cookies: {
      name: 'sb-cookie',
      lifetime: 7 * 24 * 60 * 60, // 7 hari
      domain: window.location.hostname,
      path: '/',
      sameSite: 'Strict',
      secure: true
    }
  }
)

export default supabase 