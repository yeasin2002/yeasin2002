import type { ExperienceRow } from '@/lib/experience';
import { z } from 'zod';

const isValidOptionalUrl = (value: string) => {
  const trimmed = value.trim();

  if (trimmed.length === 0) {
    return true;
  }

  try {
    new URL(trimmed);
    return true;
  } catch {
    return false;
  }
};

const optionalUrl = z
  .string()
  .trim()
  .refine((value) => isValidOptionalUrl(value), 'Enter a valid URL');

export const experienceFormSchema = z
  .object({
    company: z.string().trim().min(1, 'Company is required'),
    position: z.string().trim().min(1, 'Position is required'),
    location: z.string().trim().min(1, 'Location is required'),
    image: z.string().trim().min(1, 'Image is required'),
    startDate: z.string().trim().min(1, 'Start date is required'),
    endDate: z.string().trim(),
    website: optionalUrl,
    x: optionalUrl,
    linkedin: optionalUrl,
    github: optionalUrl,
    isCurrent: z.boolean(),
    isBlur: z.boolean(),
    descriptionLines: z.array(z.string()),
    technologies: z.array(z.string()),
  })
  .superRefine((values, context) => {
    if (!values.isCurrent && values.endDate.trim().length === 0) {
      context.addIssue({
        code: 'custom',
        message: 'End date is required when the role is not current',
        path: ['endDate'],
      });
    }
  });

export type ExperienceFormValues = z.infer<typeof experienceFormSchema>;

export const getDefaultExperienceFormValues = (
  experience?: ExperienceRow | null,
): ExperienceFormValues => ({
  company: experience?.company ?? '',
  position: experience?.position ?? '',
  location: experience?.location ?? '',
  image: experience?.image ?? '',
  startDate: experience?.start_date ?? '',
  endDate: experience?.end_date ?? '',
  website: experience?.website ?? '',
  x: experience?.x ?? '',
  linkedin: experience?.linkedin ?? '',
  github: experience?.github ?? '',
  isCurrent: experience?.is_current ?? false,
  isBlur: experience?.is_blur ?? false,
  descriptionLines:
    experience?.description && experience.description.length > 0
      ? [...experience.description]
      : [''],
  technologies: experience?.technologies ?? [],
});
