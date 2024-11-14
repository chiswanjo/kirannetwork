import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iblcwefxaogsmbmkiboo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlibGN3ZWZ4YW9nc21ibWtpYm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzNDgyMjgsImV4cCI6MjA0NjkyNDIyOH0.-4NmHJjSzQEyrZ3JEvvHQKsJf23FyUN45miKgy5hZY8';

export const supabase = createClient(supabaseUrl, supabaseKey);
