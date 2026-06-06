import { fetchAboutProfile } from '@/lib/about';
import { createClient } from '@/lib/supabase/server';

import { AboutMeManager } from './_components/AboutMeManager';

export default async function AboutMeManagementPage() {
  const supabase = await createClient();
  const initialProfile = await fetchAboutProfile(supabase);

  return <AboutMeManager initialProfile={initialProfile} />;
}
