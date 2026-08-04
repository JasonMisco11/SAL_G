'use server'

import { createClient } from '@supabase/supabase-js';

/**
 * Creates a Supabase client with the service_role key.
 * This bypasses Row Level Security and should ONLY be used
 * in server actions behind admin authentication.
 */
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createClient(supabaseUrl, supabaseServiceKey);
}
