'use client';

import { MediaAssetPicker } from '@/components/common/MediaAssetPicker';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/lib/supabase/client';
import { buildSkillSlug, deleteSkill, fetchSkills, type Skill, upsertSkill } from '@/lib/skills';
import { fetchMediaAssets, toMediaAssetOption, type MediaAssetOption } from '@/lib/media';
import { cn } from '@/lib/utils';
import { Loader2, Plus, RefreshCcw, Search, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Unable to save skill.';

export function SkillsManager() {
  const supabase = useMemo(() => createClient(), []);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [mediaAssets, setMediaAssets] = useState<MediaAssetOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const loadData = useCallback(async () => {
    setIsLoading(true);

    try {
      const [skillRecords, mediaRecords] = await Promise.all([
        fetchSkills(supabase),
        fetchMediaAssets(supabase, 200),
      ]);

      setSkills(skillRecords);
      setMediaAssets(mediaRecords.map((record) => toMediaAssetOption(supabase, record)));
    } catch (error) {
      toast.error(getErrorMessage(error));
      setSkills([]);
      setMediaAssets([]);
    } finally {
      setIsLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  const filteredSkills = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return skills;
    }

    return skills.filter((skill) =>
      [skill.name, skill.slug, skill.imageUrl].join(' ').toLowerCase().includes(normalizedQuery),
    );
  }, [searchQuery, skills]);

  const existingSkill = useMemo(
    () => skills.find((skill) => skill.slug === buildSkillSlug(name)),
    [name, skills],
  );

  const handleSave = async () => {
    const trimmedName = name.trim();
    const trimmedImageUrl = imageUrl.trim();

    if (!trimmedName) {
      toast.error('Please enter a skill name.');
      return;
    }

    if (!trimmedImageUrl) {
      toast.error('Please choose an image from the media library.');
      return;
    }

    setIsSaving(true);

    try {
      const slug = buildSkillSlug(trimmedName);
      const nextSortOrder = existingSkill?.sortOrder ?? skills.length;

      const nextSkill = await upsertSkill(supabase, {
        imageUrl: trimmedImageUrl,
        name: trimmedName,
        slug,
        sortOrder: nextSortOrder,
      });

      setSkills((currentSkills) => [
        nextSkill,
        ...currentSkills.filter((skill) => skill.id !== nextSkill.id),
      ]);
      setName('');
      setImageUrl('');
      toast.success(existingSkill ? 'Skill updated.' : 'Skill added.');
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (skillId: string) => {
    try {
      await deleteSkill(supabase, skillId);
      setSkills((currentSkills) => currentSkills.filter((skill) => skill.id !== skillId));
      toast.success('Skill deleted.');
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  const setSelectedMedia = (value: string) => {
    setImageUrl(value);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Skills Library
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Manage reusable skills
            </h1>
            <p className="max-w-2xl text-neutral-500 dark:text-neutral-400">
              Add skills once, attach them to an uploaded image from the media library, and reuse
              them across the About section or anywhere else in the dashboard.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => void loadData()}
            className="rounded-xl"
          >
            <RefreshCcw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <Card className="gap-0 overflow-hidden">
          <CardHeader className="border-b border-neutral-100 dark:border-neutral-800">
            <CardTitle>{existingSkill ? 'Edit skill' : 'Add skill'}</CardTitle>
            <CardDescription>
              Pick a name and choose an image from the media library.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="skill-name">Skill name</Label>
              <Input
                id="skill-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. React"
                className="rounded-xl"
              />
              {name.trim() && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Slug: {buildSkillSlug(name)}
                </p>
              )}
            </div>

            <MediaAssetPicker
              assets={mediaAssets}
              label="Skill image"
              value={imageUrl}
              onChange={setSelectedMedia}
              placeholder="Search uploaded images..."
            />

            {imageUrl && (
              <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <Image
                  src={imageUrl}
                  alt={name || 'Skill image'}
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover"
                />
              </div>
            )}

            <Button
              type="button"
              onClick={() => void handleSave()}
              disabled={isSaving}
              className="flex h-11 w-full items-center gap-2 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Save Skill
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card className="gap-0 overflow-hidden">
          <CardHeader className="border-b border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Existing skills</CardTitle>
                <CardDescription>
                  Click the delete button to remove a skill from the library.
                </CardDescription>
              </div>
              <div className="relative sm:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <Input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search skills..."
                  className="h-10 rounded-xl pl-9"
                />
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            {isLoading ? (
              <div className="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-neutral-200 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                Loading skills...
              </div>
            ) : filteredSkills.length === 0 ? (
              <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 px-6 text-center dark:border-neutral-800">
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  No skills found
                </p>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  Add your first reusable skill on the left.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredSkills.map((skill) => (
                  <Card
                    key={skill.id}
                    className="gap-0 overflow-hidden border-neutral-200 shadow-none dark:border-neutral-800"
                  >
                    <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800">
                      <Image
                        src={skill.imageUrl}
                        alt={skill.name}
                        fill
                        sizes="(max-width: 1280px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="space-y-3 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-neutral-900 dark:text-neutral-100">
                            {skill.name}
                          </p>
                          <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                            {skill.slug}
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          onClick={() => void handleDelete(skill.id)}
                          className="size-9 shrink-0 rounded-xl"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <Input readOnly value={skill.imageUrl} className="h-9 rounded-xl text-xs" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator className="bg-neutral-200 dark:bg-neutral-800" />
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        These skills are reusable across the About section and any other part of the dashboard.
      </p>
    </div>
  );
}
