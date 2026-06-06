'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { type AboutProfile, upsertAboutProfile } from '@/lib/about';
import { type Skill, fetchSkills } from '@/lib/skills';
import { createClient } from '@/lib/supabase/client';
import { cn } from '@/lib/utils';
import { Loader2, Save } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState, useTransition } from 'react';
import { toast } from 'sonner';

interface AboutMeManagerProps {
  initialProfile: AboutProfile;
}

export function AboutMeManager({ initialProfile }: AboutMeManagerProps) {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [isPending, startTransition] = useTransition();
  const [availableSkills, setAvailableSkills] = useState<Skill[]>([]);
  const [name, setName] = useState(initialProfile.name);
  const [description, setDescription] = useState(initialProfile.description);
  const [image, setImage] = useState(initialProfile.image);
  const [skills, setSkills] = useState(initialProfile.skills);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const records = await fetchSkills(supabase);
        setAvailableSkills(records);
      } catch {
        setAvailableSkills([]);
      }
    };

    void loadSkills();
  }, [supabase]);

  const toggleSkill = (skillSlug: string) => {
    setSkills((currentSkills) =>
      currentSkills.includes(skillSlug)
        ? currentSkills.filter((name) => name !== skillSlug)
        : [...currentSkills, skillSlug],
    );
  };

  const handleSave = () => {
    startTransition(async () => {
      try {
        await upsertAboutProfile(supabase, {
          description,
          image,
          name,
          skills,
        });
        toast.success('About section updated successfully.');
        router.refresh();
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : 'Unable to update about section.',
        );
      }
    });
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
      <Card className="gap-0 overflow-hidden">
        <CardHeader className="border-b border-neutral-100 dark:border-neutral-800">
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            How the About section will look on the landing page.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <Image
              src={image}
              alt={name}
              width={800}
              height={800}
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
              {name}
            </h2>
            <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
              {description}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {availableSkills
                .filter((skill) => skills.includes(skill.slug))
                .map((skill) => (
                  <span
                    key={skill.slug}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
                  >
                    <Image
                      src={skill.imageUrl}
                      alt={skill.name}
                      width={18}
                      height={18}
                      className="size-4 rounded-full object-cover"
                    />
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="gap-0 overflow-hidden">
        <CardHeader className="border-b border-neutral-100 dark:border-neutral-800">
          <CardTitle>Edit About</CardTitle>
          <CardDescription>
            Update the name, image, description, and displayed skills.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 pt-6">
          <div className="space-y-2">
            <Label htmlFor="about-name">Name</Label>
            <Input
              id="about-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about-image">Image URL</Label>
            <Input
              id="about-image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="/assets/yeasin-normal.png or a Supabase public URL"
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about-description">Description</Label>
            <Textarea
              id="about-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="min-h-40 rounded-xl"
            />
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Skills
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Click to include or remove skills from the landing section.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {availableSkills.map((skill) => {
                const isSelected = skills.includes(skill.slug);

                return (
                  <button
                    key={skill.slug}
                    type="button"
                    onClick={() => toggleSkill(skill.slug)}
                    className={cn(
                      'flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-all',
                      isSelected
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800',
                    )}
                  >
                    <Image
                      src={skill.imageUrl}
                      alt={skill.name}
                      width={18}
                      height={18}
                      className="size-4 rounded-full object-cover"
                    />
                    <span>{skill.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <Button
            type="button"
            onClick={handleSave}
            disabled={isPending}
            className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save About
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
