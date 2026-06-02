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
import type { ExperienceRow } from '@/lib/experience';
import {
  type MediaAssetOption,
  fetchMediaAssets,
  toMediaAssetOption,
} from '@/lib/media';
import { createClient } from '@/lib/supabase/client';
import { allTechnologyNames } from '@/lib/technologies';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Plus, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import {
  type ExperienceFormValues,
  experienceFormSchema,
  getDefaultExperienceFormValues,
} from '../experience-schema';

interface ExperienceFormDialogProps {
  open: boolean;
  mode: 'create' | 'edit';
  experience?: ExperienceRow | null;
  sortOrder: number;
  onOpenChange: (open: boolean) => void;
  onSaved: () => Promise<void> | void;
  onSubmitExperience: (
    values: ExperienceFormValues,
    sortOrder: number,
    experienceId?: string | null,
  ) => Promise<void>;
}

export function ExperienceFormDialog({
  open,
  mode,
  experience,
  sortOrder,
  onOpenChange,
  onSaved,
  onSubmitExperience,
}: ExperienceFormDialogProps) {
  const supabase = useMemo(() => createClient(), []);
  const form = useForm<ExperienceFormValues>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: getDefaultExperienceFormValues(),
  });

  const [mediaAssets, setMediaAssets] = useState<MediaAssetOption[]>([]);
  const descriptionLines = form.watch('descriptionLines');
  const isCurrent = form.watch('isCurrent');
  const imageValue = form.watch('image');
  const selectedTechnologies = form.watch('technologies');

  const getErrorMessage = (error: unknown) =>
    error instanceof Error ? error.message : 'Unable to save experience.';

  useEffect(() => {
    if (!open) {
      return;
    }

    form.reset(getDefaultExperienceFormValues(experience ?? null));
  }, [experience, form, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const loadMediaAssets = async () => {
      try {
        const records = await fetchMediaAssets(supabase, 200);
        setMediaAssets(
          records.map((record) => toMediaAssetOption(supabase, record)),
        );
      } catch {
        setMediaAssets([]);
      }
    };

    void loadMediaAssets();
  }, [open, supabase]);

  const handleSubmit = async (values: ExperienceFormValues) => {
    try {
      await onSubmitExperience(values, sortOrder, experience?.id ?? null);
      onOpenChange(false);
      await onSaved();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  const toggleTechnology = (technologyName: string) => {
    const nextTechnologies = selectedTechnologies.includes(technologyName)
      ? selectedTechnologies.filter((name) => name !== technologyName)
      : [...selectedTechnologies, technologyName];

    form.setValue('technologies', nextTechnologies, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const appendDescriptionLine = () => {
    form.setValue('descriptionLines', [...descriptionLines, ''], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const removeDescriptionLine = (index: number) => {
    form.setValue(
      'descriptionLines',
      descriptionLines.filter((_, currentIndex) => currentIndex !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[calc(100vh-2rem)] min-w-6xl flex-col overflow-y-scroll overflow-x-hidden p-0">
        <div className="border-b border-neutral-100 px-6 pt-6 dark:border-neutral-800">
          <DialogHeader>
            <DialogTitle>
              {mode === 'edit' ? 'Edit Experience' : 'Add Experience'}
            </DialogTitle>
            <DialogDescription>
              Update your role details, links, and technologies.
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
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g. Google"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g. Senior Frontend Developer"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g. Remote"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="image"
                    render={() => (
                      <div className="space-y-4">
                        <FormItem>
                          <FormLabel>Image/Logo Path</FormLabel>
                          <FormControl>
                            <Input
                              {...form.register('image')}
                              placeholder="e.g. /company/google.png or a Supabase public URL"
                              className="rounded-xl"
                            />
                          </FormControl>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            You can paste a direct path or pick an uploaded image below.
                          </p>
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
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g. Jul 2025"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isCurrent}
                            placeholder="e.g. Present"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website URL</FormLabel>
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

                  <FormField
                    control={form.control}
                    name="x"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>X URL</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="url"
                            placeholder="https://x.com/company"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn URL</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="url"
                            placeholder="https://linkedin.com/company/..."
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
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
                            placeholder="https://github.com/org"
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <FormField
                    control={form.control}
                    name="isCurrent"
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
                          Currently Working Here
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isBlur"
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
                          Hide/Blur Company Name
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Description Bullet Points
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Keep each bullet short and specific.
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={appendDescriptionLine}
                      className="flex h-8 items-center gap-1 rounded-xl"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add Bullet
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {descriptionLines.map((_, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FormField
                          control={form.control}
                          name={`descriptionLines.${index}`}
                          render={({ field: descriptionField }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input
                                  {...descriptionField}
                                  placeholder={`Bullet ${index + 1}`}
                                  className="rounded-xl"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          onClick={() => removeDescriptionLine(index)}
                          disabled={descriptionLines.length === 1}
                          className="size-9 shrink-0 rounded-xl"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="technologies"
                  render={() => (
                    <FormItem>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold">
                            Technologies Used
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            Select the stack used in this role.
                          </p>
                        </div>

                        <FormControl>
                          <div className="max-h-48 overflow-y-auto rounded-xl border border-neutral-200 bg-neutral-50/50 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
                            <div className="flex flex-wrap gap-2">
                              {allTechnologyNames.map((technologyName) => {
                                const isSelected =
                                  selectedTechnologies.includes(technologyName);

                                return (
                                  <button
                                    key={technologyName}
                                    type="button"
                                    onClick={() =>
                                      toggleTechnology(technologyName)
                                    }
                                    className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-all ${
                                      isSelected
                                        ? 'border-blue-600 bg-blue-600 text-white'
                                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                                    }`}
                                  >
                                    {technologyName}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

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
                        'Save Experience'
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