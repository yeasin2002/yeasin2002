import type { SupabaseClient } from '@supabase/supabase-js';

export const skillsTableSelect =
  'id,name,slug,image_url,sort_order,created_at,updated_at';

export interface SkillRecord {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export const buildSkillSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const normalizeSkill = (record: SkillRecord): Skill => ({
  id: record.id,
  name: record.name,
  slug: record.slug,
  imageUrl: record.image_url,
  sortOrder: record.sort_order,
  createdAt: record.created_at,
  updatedAt: record.updated_at,
});

export const fetchSkills = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from('skills')
    .select(skillsTableSelect)
    .order('sort_order', { ascending: true })
    .order('name', { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map((record) => normalizeSkill(record as SkillRecord));
};

export const fetchSkillsBySlugs = async (
  supabase: SupabaseClient,
  slugs: string[],
) => {
  if (slugs.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from('skills')
    .select(skillsTableSelect)
    .in('slug', slugs);

  if (error) {
    throw error;
  }

  const skills = (data ?? []).map((record) => normalizeSkill(record as SkillRecord));
  const skillMap = new Map(skills.map((skill) => [skill.slug, skill]));

  return slugs.map((slug) => skillMap.get(slug)).filter(Boolean) as Skill[];
};

export const upsertSkill = async (
  supabase: SupabaseClient,
  skill: Pick<Skill, 'imageUrl' | 'name' | 'slug' | 'sortOrder'>,
) => {
  const { data, error } = await supabase
    .from('skills')
    .upsert(
      {
        image_url: skill.imageUrl,
        name: skill.name,
        slug: skill.slug,
        sort_order: skill.sortOrder,
      },
      {
        onConflict: 'slug',
      },
    )
    .select(skillsTableSelect)
    .single();

  if (error) {
    throw error;
  }

  return normalizeSkill(data as SkillRecord);
};

export const deleteSkill = async (supabase: SupabaseClient, skillId: string) => {
  const { error } = await supabase.from('skills').delete().eq('id', skillId);

  if (error) {
    throw error;
  }
};
