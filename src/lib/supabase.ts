import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jlhmxstpyaweisozixng.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_2sV-jzRJAWNLIVlHAF-xQg_ww837VH3';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
