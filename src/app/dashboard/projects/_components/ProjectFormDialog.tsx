'use client';

import { MediaAssetPicker } from '@/components/common/MediaAssetPicker';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import {
  MediaAssetOption,
  MediaAssetRecord,
  fetchMediaAssets,
  toMediaAssetOption,
} from '@/lib/media';
import { createClient } from '@/lib/supabase/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Plus, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import type { ProjectRow } from '../project-actions';
import {
  ProjectFormValues,
  getDefaultProjectFormValues,
  projectFormSchema,
} from '../project-schema';

interface ProjectFormDialogProps {
  open: boolean;
  mode: 'create' | 'edit';
  project?: ProjectRow | null;
  sortOrder: number;
  onOpenChange: (open: boolean) => void;
  onSaved: () => Promise<void> | void;
  onSubmitProject: (
    values: ProjectFormValues,
    sortOrder: number,
    projectId?: string | null,
  ) => Promise<void>;
}

export function ProjectFormDialog({
  open,
  mode,
  project,
  sortOrder,
  onOpenChange,
  onSaved,
  onSubmitProject,
}: ProjectFormDialogProps) {
  const supabase = useMemo(() => createClient(), []);
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: getDefaultProjectFormValues(),
  });

  const [mediaAssets, setMediaAssets] = useState<MediaAssetOption[]>([]);
  const imageValue = form.watch('image');
  const technologies = form.watch('technologies');

  const appendTechnology = () => {
    form.setValue('technologies', [...(technologies ?? []), ''], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const removeTechnology = (index: number) => {
    form.setValue(
      'technologies',
      (technologies ?? []).filter((_, i) => i !== index),
      { shouldDirty: true, shouldValidate: true },
    );
  };

  useEffect(() => {
    if (!open) return;
    form.reset(
      getDefaultProjectFormValues(
        project
          ? {
              ...project,
              video: project.video ?? '',
              github: project.github ?? '',
              live: project.live ?? '',
              projectDetailsPageSlug: project.project_details_page_slug ?? '',
              isWorking: project.is_working,
            }
          : null,
      ),
    );
  }, [project, form, open]);

  useEffect(() => {
    if (!open) return;

    const loadMediaAssets = async () => {
      try {
        const records = await fetchMediaAssets(supabase, 200);
        setMediaAssets(records.map((r: MediaAssetRecord) => toMediaAssetOption(supabase, r)));
      } catch {
        setMediaAssets([]);
      }
    };

    void loadMediaAssets();
  }, [open, supabase]);

  const getErrorMessage = (error: unknown) =>
    error instanceof Error ? error.message : 'Unable to save project.';

  const handleSubmit = async (values: ProjectFormValues) => {
    try {
      await onSubmitProject(values, sortOrder, project?.id ?? null);
      onOpenChange(false);
      await onSaved();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[calc(100vh-2rem)] min-w-6xl flex-col overflow-y-scroll overflow-x-hidden p-0">
        <div className="border-b border-neutral-100 px-6 pt-6 dark:border-neutral-800">
          <DialogHeader>
            <DialogTitle>
              {mode === 'edit' ? 'Edit Project' : 'Add Project'}
            </DialogTitle>
            <DialogDescription>
              Manage project details, links and image.
            </DialogDescription>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex min-h-0 flex-1 flex-col"
          >
            <ScrollArea className="min-h-0 flex-1 px-6 py-6">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Project title"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="link"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="url"
                            placeholder="https://example.com"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Short description"
                          className="rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="image"
                    render={() => (
                      <div className="space-y-4">
                        <FormItem>
                          <FormLabel>Image/Thumbnail</FormLabel>
                          <FormControl>
                            <Input
                              {...form.register('image')}
                              placeholder="e.g. /project/thumbnail.png"
                              className="rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>

                        <MediaAssetPicker
                          assets={mediaAssets}
                          label="Choose from media library"
                          value={imageValue}
                          onChange={(nextValue) =>
                            form.setValue('image', nextValue, {
                              shouldDirty: true,
                              shouldValidate: true,
                            })
                          }
                        />
                      </div>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub URL</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="url"
                            placeholder="https://github.com/owner/repo"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="technologies"
                  render={() => (
                    <FormItem>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold">
                              Technologies
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                              Select an image for each technology from the media
                              library.
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={appendTechnology}
                            className="flex h-8 items-center gap-1 rounded-xl"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Add Technology
                          </Button>
                        </div>

                        <div className="space-y-2">
                          {(technologies ?? []).length === 0 && (
                            <div className="text-xs text-neutral-500 dark:text-neutral-400">
                              No technologies added yet.
                            </div>
                          )}

                          {(technologies ?? []).map(
                            (value: string, index: number) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <div className="flex-1">
                                  <Input
                                    {...form.register(
                                      `technologies.${index}` as const,
                                    )}
                                    placeholder={`Technology ${index + 1} image URL`}
                                    className="rounded-xl"
                                  />
                                </div>

                                <div className="w-56">
                                  <MediaAssetPicker
                                    assets={mediaAssets}
                                    label={`Technology ${index + 1} image`}
                                    value={value}
                                    onChange={(nextValue) =>
                                      form.setValue(
                                        `technologies.${index}` as const,
                                        nextValue,
                                        {
                                          shouldDirty: true,
                                          shouldValidate: true,
                                        },
                                      )
                                    }
                                  />
                                </div>

                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  onClick={() => removeTechnology(index)}
                                  disabled={(technologies ?? []).length === 1}
                                  className="size-9 shrink-0 rounded-xl"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-wrap items-center gap-6">
                  <FormField
                    control={form.control}
                    name="isWorking"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              field.onChange(!!checked)
                            }
                          />
                        </FormControl>
                        <FormLabel className="cursor-pointer text-sm font-semibold">
                          Currently Working
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              field.onChange(!!checked)
                            }
                          />
                        </FormControl>
                        <FormLabel className="cursor-pointer text-sm font-semibold">
                          Has Details Page
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border-t border-neutral-100 pt-4 dark:border-neutral-800 pb-6">
                  <div className="flex justify-end gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => onOpenChange(false)}
                      className="h-11 rounded-xl"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700"
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        'Save Project'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectFormDialog;
