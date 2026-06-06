'use client';

import type { ProjectRow } from '../project-actions';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: ProjectRow[];
  onEdit: (project: ProjectRow) => void;
  onDelete: (project: ProjectRow) => Promise<void>;
}

export function ProjectList({ projects, onEdit, onDelete }: ProjectListProps) {
  if (projects.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProjectList;
