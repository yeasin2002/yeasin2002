'use client';

import type { ExperienceRow } from '@/lib/experience';

import { ExperienceCard } from './ExperienceCard';

interface ExperienceListProps {
  experiences: ExperienceRow[];
  onEdit: (experience: ExperienceRow) => void;
  onDelete: (experience: ExperienceRow) => Promise<void>;
}

export function ExperienceList({
  experiences,
  onEdit,
  onDelete,
}: ExperienceListProps) {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
