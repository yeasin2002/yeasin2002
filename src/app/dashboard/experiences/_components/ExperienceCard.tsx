'use client';

import { Button } from '@/components/ui/button';
import type { ExperienceRow } from '@/lib/experience';
import { Calendar, Edit2, ExternalLink, MapPin } from 'lucide-react';

import { ExperienceDeleteDialog } from './ExperienceDeleteDialog';

interface ExperienceCardProps {
  experience: ExperienceRow;
  onEdit: (experience: ExperienceRow) => void;
  onDelete: (experience: ExperienceRow) => Promise<void>;
}

export function ExperienceCard({
  experience,
  onEdit,
  onDelete,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          {experience.image && (
            <img
              src={experience.image}
              alt={experience.company}
              className="h-12 w-12 rounded-xl border border-neutral-100 object-cover dark:border-neutral-800"
            />
          )}
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
              {experience.company}
            </h3>
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              {experience.position}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {experience.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {experience.start_date} -{' '}
            {experience.is_current ? 'Present' : experience.end_date}
          </span>
          {experience.website && (
            <a
              href={experience.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Website
            </a>
          )}
        </div>

        <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
          {experience.description.map((line, index) => (
            <p key={index} className="line-clamp-2">
              • {line}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2 border-t border-neutral-100 pt-4 dark:border-neutral-800">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(experience)}
          className="flex h-9 items-center gap-1.5 rounded-xl"
        >
          <Edit2 className="h-3.5 w-3.5" />
          Edit
        </Button>
        <ExperienceDeleteDialog experience={experience} onConfirm={onDelete} />
      </div>
    </div>
  );
}
