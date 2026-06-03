import { experiences as fallbackExperiences } from '@/config/Experience';
import {
  mapExperienceRowToRecord,
  mapExperienceToPayload,
} from '@/lib/experience';
import type { ExperienceRow } from '@/lib/experience';
import { createClient } from '@/lib/supabase/client';

import type { ExperienceFormValues } from './experience-schema';

export const fetchExperiences = async (): Promise<ExperienceRow[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(mapExperienceRowToRecord);
};

export const seedExperiences = async () => {
  const supabase = createClient();
  const payload = fallbackExperiences.map((experience, index) =>
    mapExperienceToPayload(experience, index),
  );

  const { error } = await supabase
    .from('experiences')
    .upsert(payload, { onConflict: 'company,position,start_date' });

  if (error) {
    throw error;
  }
};

const normalizeString = (value: string) => value.trim();

export const saveExperience = async (
  values: ExperienceFormValues,
  sortOrder: number,
  experienceId?: string | null,
) => {
  const supabase = createClient();
  const description = values.descriptionLines
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const record = {
    company: normalizeString(values.company),
    position: normalizeString(values.position),
    location: normalizeString(values.location),
    image: normalizeString(values.image),
    description:
      description.length > 0
        ? description
        : ['Completed daily operational tasks.'],
    start_date: normalizeString(values.startDate),
    end_date: values.isCurrent ? 'Present' : normalizeString(values.endDate),
    website: normalizeString(values.website ?? ''),
    x: normalizeString(values.x ?? '') || null,
    linkedin: normalizeString(values.linkedin ?? '') || null,
    github: normalizeString(values.github ?? '') || null,
    technologies: values.technologies,
    is_current: values.isCurrent,
    is_blur: values.isBlur,
    sort_order: sortOrder,
  };

  if (experienceId) {
    const { error } = await supabase
      .from('experiences')
      .update(record)
      .eq('id', experienceId);

    if (error) {
      throw error;
    }

    return;
  }

  const { error } = await supabase.from('experiences').insert([record]);

  if (error) {
    throw error;
  }
};

export const deleteExperience = async (experienceId: string) => {
  const supabase = createClient();
  const { error } = await supabase
    .from('experiences')
    .delete()
    .eq('id', experienceId);

  if (error) {
    throw error;
  }
};
