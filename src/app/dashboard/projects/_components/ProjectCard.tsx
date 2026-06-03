'use client';

import { Button } from '@/components/ui/button';
import { Edit2, ExternalLink } from 'lucide-react';

import type { ProjectRow } from '../project-actions';
import { ProjectDeleteDialog } from './ProjectDeleteDialog';

interface ProjectCardProps {
  project: ProjectRow;
  onEdit: (project: ProjectRow) => void;
  onDelete: (project: ProjectRow) => Promise<void>;
}

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-12 w-12 rounded-xl border border-neutral-100 object-cover dark:border-neutral-800"
            />
          )}
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
          <p className="line-clamp-2">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {(project.technologies ?? []).map((technology) => (
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
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 items-center gap-1.5 rounded-xl text-blue-600 hover:underline dark:text-blue-400"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Visit
          </a>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(project)}
          className="flex h-9 items-center gap-1.5 rounded-xl"
        >
          <Edit2 className="h-3.5 w-3.5" />
          Edit
        </Button>
        <ProjectDeleteDialog project={project} onConfirm={onDelete} />
      </div>
    </div>
  );
}

export default ProjectCard;
