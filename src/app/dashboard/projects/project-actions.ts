import { projects as fallbackProjects } from '@/config/Projects';
import { createClient } from '@/lib/supabase/client';

export interface ProjectRow {
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

export const fetchProjects = async (): Promise<ProjectRow[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []) as ProjectRow[];
};

export const seedProjects = async () => {
  const supabase = createClient();

  const payload = fallbackProjects.map((project, index) => ({
    title: project.title,
    description: project.description,
    image: project.image,
    link: project.link,
    github: project.github ?? null,
    live: project.live ?? null,
    details: project.details ?? false,
    project_details_page_slug: project.projectDetailsPageSlug ?? null,
    technologies: project.technologies.map((t) => t.name),
    is_working: project.isWorking ?? false,
    sort_order: index,
  }));

  const { error } = await supabase
    .from('projects')
    .upsert(payload, { onConflict: 'title,link' });

  if (error) {
    throw error;
  }
};

export const saveProject = async (
  values: Partial<ProjectRow>,
  sortOrder: number,
  projectId?: string | null,
) => {
  const supabase = createClient();

  const record = {
    title: (values.title ?? '').trim(),
    description: (values.description ?? '').trim(),
    image: (values.image ?? '').trim(),
    video: values.video ?? null,
    link: (values.link ?? '').trim(),
    github: values.github ?? null,
    live: values.live ?? null,
    details: !!values.details,
    project_details_page_slug: values.project_details_page_slug ?? null,
    technologies: values.technologies ?? [],
    is_working: !!values.is_working,
    sort_order: sortOrder,
  };

  if (projectId) {
    const { error } = await supabase
      .from('projects')
      .update(record)
      .eq('id', projectId);
    if (error) throw error;
    return;
  }

  const { error } = await supabase.from('projects').insert([record]);
  if (error) throw error;
};

export const deleteProject = async (projectId: string) => {
  const supabase = createClient();
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', projectId);
  if (error) throw error;
};
