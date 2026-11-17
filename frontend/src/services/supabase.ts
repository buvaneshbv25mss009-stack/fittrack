import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

let cachedClient: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  if (cachedClient) return cachedClient
  if (supabaseUrl && supabaseAnonKey) {
    cachedClient = createClient(supabaseUrl, supabaseAnonKey)
    return cachedClient
  }
  return null
}

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null
