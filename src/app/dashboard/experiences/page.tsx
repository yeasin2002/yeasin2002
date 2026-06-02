'use client';

import { Button } from '@/components/ui/button';
import { experiences as fallbackExperiences } from '@/config/Experience';
import type { ExperienceRow } from '@/lib/experience';
import { FileDown, Info, Loader2, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  deleteExperience,
  fetchExperiences,
  saveExperience,
  seedExperiences,
} from './experience-actions';
import { ExperienceFormDialog } from './_components/ExperienceFormDialog';
import { ExperienceList } from './_components/ExperienceList';
import type { ExperienceFormValues } from './experience-schema';

export default function ExperiencesPage() {
  const [items, setItems] = useState<ExperienceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingExperience, setEditingExperience] = useState<ExperienceRow | null>(null);

  const loadExperiences = async () => {
    setLoading(true);
    try {
      const nextItems = await fetchExperiences();
      setItems(nextItems);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load experiences from database.');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadExperiences();
  }, []);

  const handleCreateClick = () => {
    setEditingExperience(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (experience: ExperienceRow) => {
    setEditingExperience(experience);
    setIsFormOpen(true);
  };

  const handleDelete = async (experience: ExperienceRow) => {
    try {
      await deleteExperience(experience.id!);
      toast.success('Experience deleted successfully!');
      setItems((current) => current.filter((item) => item.id !== experience.id));
    } catch (error: any) {
      console.error(error);
      toast.error('Delete failed: ' + error.message);
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      await seedExperiences();
      toast.success('Successfully imported all static experiences!');
      await loadExperiences();
    } catch (error: any) {
      console.error(error);
      toast.error('Import failed: ' + error.message);
    } finally {
      setSeeding(false);
    }
  };

  const handleSubmitExperience = async (
    values: ExperienceFormValues,
    sortOrder: number,
    experienceId?: string | null,
  ) => {
    await saveExperience(values, sortOrder, experienceId);
    toast.success(experienceId ? 'Experience updated successfully!' : 'Experience added successfully!');
  };

  const hasExperiences = items.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Work Experiences
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Manage your employment history, role details, links, and technologies.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {!hasExperiences && !loading && (
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
            Add Experience
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : hasExperiences ? (
        <ExperienceList
          experiences={items}
          onEdit={handleEditClick}
          onDelete={handleDelete}
        />
      ) : (
        <div className="rounded-3xl border border-dashed border-neutral-300 p-12 text-center dark:border-neutral-800">
          <Info className="mx-auto h-12 w-12 text-neutral-400 dark:text-neutral-500" />
          <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            No experiences found
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
            Your database experiences table is empty. You can add one manually
            or seed it from your static config.
          </p>
        </div>
      )}

      <ExperienceFormDialog
        open={isFormOpen}
        mode={editingExperience ? 'edit' : 'create'}
        experience={editingExperience}
        sortOrder={editingExperience ? editingExperience.sort_order : items.length}
        onOpenChange={(open) => {
          setIsFormOpen(open);
          if (!open) {
            setEditingExperience(null);
          }
        }}
        onSaved={loadExperiences}
        onSubmitExperience={handleSubmitExperience}
      />
    </div>
  );
}
