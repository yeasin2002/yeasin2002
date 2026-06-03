import { z } from 'zod';

const isValidOptionalUrl = (value: string) => {
  const trimmed = value.trim();

  if (trimmed.length === 0) return true;

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

export const projectFormSchema = z.object({
  title: z.string().trim().min(1, 'Title is required'),
  description: z.string().trim().min(1, 'Description is required'),
  image: z.string().trim().min(1, 'Image is required'),
  video: optionalUrl.optional(),
  link: optionalUrl,
  github: optionalUrl.optional(),
  live: optionalUrl.optional(),
  details: z.boolean().optional(),
  projectDetailsPageSlug: z.string().trim().optional(),
  technologies: z.array(z.string()),
  isWorking: z.boolean().optional(),
});

export type ProjectFormValues = z.infer<typeof projectFormSchema>;

export const getDefaultProjectFormValues = (
  project?: Partial<ProjectFormValues> | null,
): ProjectFormValues => ({
  title: project?.title ?? '',
  description: project?.description ?? '',
  image: project?.image ?? '',
  video: project?.video ?? '',
  link: project?.link ?? '',
  github: project?.github ?? '',
  live: project?.live ?? '',
  details: project?.details ?? false,
  projectDetailsPageSlug: project?.projectDetailsPageSlug ?? '',
  technologies: project?.technologies ?? [],
  isWorking: project?.isWorking ?? false,
});
