import Expo from '@/components/technologies/Expo';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Github from '@/components/technologies/Github';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import Redux from '@/components/technologies/Redux';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { ReactNode } from 'react';

export const ABOUT_PROFILE_ID = 1;

export const aboutFallback = {
  name: 'Md Kawsar Islam Yeasin',
  description:
    "I'm a front-end-focused full-stack software developer with almost 2 years of industry experience. I build web and mobile apps with TypeScript, React, Next.js, React Native, and Expo; contribute to open source with 622+ GitHub stars overall; and enjoy AI-driven workflows, agent-based development, client collaboration, and maintainable freelance and contract work.",
  image: '/assets/yeasin-normal.png',
  skills: [
    'react',
    'typescript',
    'nextjs',
    'tailwindcss',
    'nodejs',
    'redux',
    'react-native',
    'expo',
    'expressjs',
    'mongodb',
    'postgresql',
    'figma',
    'github',
    'motion',
    'socketio',
  ] as AboutSkillName[],
};

export const aboutSkillIcons = {
  react: <ReactIcon />,
  typescript: <TypeScript />,
  nextjs: <NextJs />,
  tailwindcss: <TailwindCss />,
  nodejs: <NodeJs />,
  redux: <Redux />,
  'react-native': <ReactNative />,
  expo: <Expo />,
  expressjs: <ExpressJs />,
  mongodb: <MongoDB />,
  postgresql: <PostgreSQL />,
  figma: <Figma />,
  github: <Github />,
  motion: <Motion />,
  socketio: <SocketIo />,
} as const;

export type AboutSkillName = keyof typeof aboutSkillIcons;

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
  skills: AboutSkillName[];
  created_at: string;
  updated_at: string;
}

export const aboutSkillOptions = Object.entries(aboutSkillIcons).map(
  ([name, icon]) => ({
    icon,
    name: name as AboutSkillName,
  }),
);

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

  const normalizedSkills = profile.skills.filter(
    (skill): skill is AboutSkillName => skill in aboutSkillIcons,
  );

  return {
    id: profile.id,
    name: profile.name || aboutFallback.name,
    description: profile.description || aboutFallback.description,
    image: profile.image || aboutFallback.image,
    skills:
      normalizedSkills.length > 0
        ? normalizedSkills
        : aboutFallback.skills,
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

export const renderAboutSkillIcon = (skill: AboutSkillName): ReactNode =>
  aboutSkillIcons[skill];
