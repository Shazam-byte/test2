import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(https://vliwsggerraktweofswd.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsaXdzZ2dlcnJha3R3ZW9mc3dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzOTY1MzUsImV4cCI6MjA1Nzk3MjUzNX0.9MG_xAqCFcbx0K6L5Xv6gxL7Wl4tJBwmqSCXOUacTRI);