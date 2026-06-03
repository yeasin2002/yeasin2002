'use client';

import { Button } from '@/components/ui/button';
import { FileDown, Info, Loader2, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { ProjectFormDialog } from './_components/ProjectFormDialog';
import { ProjectList } from './_components/ProjectList';
import type { ProjectRow } from './project-actions';
import {
  deleteProject,
  fetchProjects,
  saveProject,
  seedProjects,
} from './project-actions';
import type { ProjectFormValues } from './project-schema';

export default function ProjectsManagementPage() {
  const [items, setItems] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectRow | null>(null);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const nextItems = await fetchProjects();
      setItems(nextItems);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load projects from database.');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadProjects();
  }, []);

  const handleCreateClick = () => {
    setEditingProject(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (project: ProjectRow) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const handleDelete = async (project: ProjectRow) => {
    try {
      await deleteProject(project.id!);
      toast.success('Project deleted successfully!');
      setItems((current) => current.filter((item) => item.id !== project.id));
    } catch (error: any) {
      console.error(error);
      toast.error('Delete failed: ' + error.message);
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      await seedProjects();
      toast.success('Successfully imported static projects!');
      await loadProjects();
    } catch (error: any) {
      console.error(error);
      toast.error('Import failed: ' + error.message);
    } finally {
      setSeeding(false);
    }
  };

  const handleSubmitProject = async (
    values: ProjectFormValues,
    sortOrder: number,
    projectId?: string | null,
  ) => {
    // Normalize technologies string if user entered comma separated string
    const normalized = { ...values } as any;
    if (typeof normalized.technologies === 'string') {
      normalized.technologies = normalized.technologies
        .split(',')
        .map((s: string) => s.trim())
        .filter((s: string) => s.length > 0);
    }

    await saveProject(normalized, sortOrder, projectId);
    toast.success(
      projectId
        ? 'Project updated successfully!'
        : 'Project added successfully!',
    );
  };

  const hasProjects = items.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Projects
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Manage portfolio projects, images, and links.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {!hasProjects && !loading && (
            <Button
              variant="outline"
              disabled={seeding}
              onClick={handleSeed}
              className="flex h-10 items-center gap-2 rounded-xl border-neutral-200 dark:border-neutral-800"
            >
              {seeding ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FileDown className="h-4 w-4" />
              )}
              Import from Local Config
            </Button>
          )}

          <Button
            onClick={handleCreateClick}
            className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add Project
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : hasProjects ? (
        <ProjectList
          projects={items}
          onEdit={handleEditClick}
          onDelete={handleDelete}
        />
      ) : (
        <div className="rounded-3xl border border-dashed border-neutral-300 p-12 text-center dark:border-neutral-800">
          <Info className="mx-auto h-12 w-12 text-neutral-400 dark:text-neutral-500" />
          <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            No projects found
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
            Your database projects table is empty. You can add one manually or
            import from your static config.
          </p>
        </div>
      )}

      <ProjectFormDialog
        open={isFormOpen}
        mode={editingProject ? 'edit' : 'create'}
        project={editingProject}
        sortOrder={editingProject ? editingProject.sort_order : items.length}
        onOpenChange={(open) => {
          setIsFormOpen(open);
          if (!open) setEditingProject(null);
        }}
        onSaved={loadProjects}
        onSubmitProject={handleSubmitProject}
      />
    </div>
  );
}
