import { AboutMeManager } from './_components/AboutMeManager';
import { createClient } from '@/lib/supabase/server';
import { fetchAboutProfile } from '@/lib/about';

export default async function AboutMeManagementPage() {
  const supabase = await createClient();
  const initialProfile = await fetchAboutProfile(supabase);

  return <AboutMeManager initialProfile={initialProfile} />;
}
