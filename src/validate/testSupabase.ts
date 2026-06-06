import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('Connecting to:', supabaseUrl);
  const { data, error } = await supabase.from('experiences').select('*');
  if (error) {
    console.error('❌ Error fetching experiences:', error);
  } else {
    console.log('✅ Successfully connected!');
    console.log('Data found:', data);
  }
}

test();
