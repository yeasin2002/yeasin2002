import type { Experience } from '@/config/Experience';
import { getTechnology } from '@/lib/technologies';

export interface ExperienceRow {
  id?: string;
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  start_date: string;
  end_date: string;
  website: string;
  x: string | null;
  linkedin: string | null;
  github: string | null;
  technologies: string[];
  is_current: boolean;
  is_blur: boolean;
  sort_order: number;
}

export interface ExperiencePayload {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  start_date: string;
  end_date: string;
  website: string;
  x: string | null;
  linkedin: string | null;
  github: string | null;
  technologies: string[];
  is_current: boolean;
  is_blur: boolean;
  sort_order: number;
}

const normalizeOptionalUrl = (value?: string) => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
};

export const mapExperienceRowToExperience = (
  row: ExperienceRow,
): Experience => ({
  company: row.company,
  position: row.position,
  location: row.location,
  image: row.image,
  description: row.description ?? [],
  startDate: row.start_date,
  endDate: row.end_date,
  website: row.website ?? '',
  x: row.x ?? undefined,
  linkedin: row.linkedin ?? undefined,
  github: row.github ?? undefined,
  technologies: (row.technologies ?? []).map((name) => getTechnology(name)),
  isCurrent: row.is_current,
  isBlur: row.is_blur || false,
});

export const mapExperienceRowToRecord = (row: ExperienceRow) => ({
  id: row.id,
  company: row.company,
  position: row.position,
  location: row.location,
  image: row.image,
  description: row.description ?? [],
  start_date: row.start_date,
  end_date: row.end_date,
  website: row.website ?? '',
  x: row.x ?? null,
  linkedin: row.linkedin ?? null,
  github: row.github ?? null,
  technologies: row.technologies ?? [],
  is_current: row.is_current,
  is_blur: row.is_blur || false,
  sort_order: row.sort_order,
});

export const mapExperienceToPayload = (
  experience: Experience,
  sortOrder: number,
): ExperiencePayload => ({
  company: experience.company,
  position: experience.position,
  location: experience.location,
  image: experience.image,
  description: experience.description,
  start_date: experience.startDate,
  end_date: experience.endDate,
  website: experience.website,
  x: normalizeOptionalUrl(experience.x),
  linkedin: normalizeOptionalUrl(experience.linkedin),
  github: normalizeOptionalUrl(experience.github),
  technologies: experience.technologies.map((technology) => technology.name),
  is_current: experience.isCurrent,
  is_blur: experience.isBlur || false,
  sort_order: sortOrder,
});
