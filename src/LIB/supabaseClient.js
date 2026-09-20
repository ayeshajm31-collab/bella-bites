import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zhiwckrpylhwiqmshtkp.supabase.co'
const supabasePublishableKey = 'sb_publishable_9xwiPE0IwoYwolnYYN4Sdg_FvfAWRqi'

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
)