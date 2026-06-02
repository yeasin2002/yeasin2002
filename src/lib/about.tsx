import type { SupabaseClient } from '@supabase/supabase-js';

export const ABOUT_PROFILE_ID = 1;

export const aboutFallback = {
  name: 'Md Kawsar Islam Yeasin',
  description:
    "I'm a front-end-focused full-stack software developer with almost 2 years of industry experience. I build web and mobile apps with TypeScript, React, Next.js, React Native, and Expo; contribute to open source with 622+ GitHub stars overall; and enjoy AI-driven workflows, agent-based development, client collaboration, and maintainable freelance and contract work.",
  image: '/assets/yeasin-normal.png',
  skills: [],
};

export interface AboutProfileRecord {
  id: number;
  name: string;
  description: string;
  image: string;
  skills: string[];
  created_at: string;
  updated_at: string;
}

export interface AboutProfile {
  id: number;
  name: string;
  description: string;
  image: string;
  skills: string[];
  created_at: string;
  updated_at: string;
}

export const aboutProfileSelect =
  'id,name,description,image,skills,created_at,updated_at';

export const normalizeAboutProfile = (
  profile: AboutProfileRecord | null | undefined,
): AboutProfile => {
  if (!profile) {
    const now = new Date().toISOString();

    return {
      id: ABOUT_PROFILE_ID,
      name: aboutFallback.name,
      description: aboutFallback.description,
      image: aboutFallback.image,
      skills: aboutFallback.skills,
      created_at: now,
      updated_at: now,
    };
  }

  return {
    id: profile.id,
    name: profile.name || aboutFallback.name,
    description: profile.description || aboutFallback.description,
    image: profile.image || aboutFallback.image,
    skills: profile.skills,
    created_at: profile.created_at,
    updated_at: profile.updated_at,
  };
};

export const fetchAboutProfile = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from('about_profile')
    .select(aboutProfileSelect)
    .eq('id', ABOUT_PROFILE_ID)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return normalizeAboutProfile(data as AboutProfileRecord | null);
};

export const upsertAboutProfile = async (
  supabase: SupabaseClient,
  profile: Pick<AboutProfile, 'description' | 'image' | 'name' | 'skills'>,
) => {
  const { data, error } = await supabase
    .from('about_profile')
    .upsert(
      {
        id: ABOUT_PROFILE_ID,
        description: profile.description,
        image: profile.image,
        name: profile.name,
        skills: profile.skills,
      },
      {
        onConflict: 'id',
      },
    )
    .select(aboutProfileSelect)
    .single();

  if (error) {
    throw error;
  }

  return normalizeAboutProfile(data as AboutProfileRecord);
};
