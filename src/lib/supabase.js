import { createClient } from '@supabase/supabase-js';
import { env } from './env'

const supabaseUrl = env.apiUrl;
const supabaseKey = env.apiKey;

export const supabase = createClient(supabaseUrl, supabaseKey);
