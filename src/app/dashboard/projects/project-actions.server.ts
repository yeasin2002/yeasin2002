import { createClient } from '@supabase/supabase-js';

export interface ProjectRowServer {
  id?: string;
  title: string;
  description: string;
  image: string;
  video?: string | null;
  link: string;
  github?: string | null;
  live?: string | null;
  details: boolean;
  project_details_page_slug?: string | null;
  technologies: string[];
  is_working: boolean;
  sort_order: number;
}

/**
 * Server-side fetch for projects. This uses a server-side Supabase client.
 * Ensure you set `SUPABASE_SERVICE_ROLE_KEY` (recommended) or another secure
 * server-only key in your environment. Do NOT expose service role keys to the
 * browser.
 */
export const fetchProjectsServer = async (): Promise<ProjectRowServer[]> => {
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or key is not configured in environment');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []) as ProjectRowServer[];
};
