'use client';

import { fetchProjects } from '@/app/dashboard/projects/project-actions';
import { getTechnology } from '@/lib/technologies';
import type { Project } from '@/types/project';
import { Loader2 } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectList } from '../projects/ProjectList';
import { Button } from '../ui/button';

export default function Projects() {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const rows = await fetchProjects();
        const mapped: Project[] = (rows ?? []).map((r: any) => ({
          title: r.title,
          description: r.description,
          image: r.image,
          video: r.video ?? undefined,
          link: r.link,
          technologies: (r.technologies ?? []).map((name: string) =>
            getTechnology(name),
          ),
          github: r.github ?? undefined,
          live: r.live ?? '',
          details: !!r.details,
          projectDetailsPageSlug: r.project_details_page_slug ?? '',
          isWorking: !!r.is_working,
        }));

        setItems(mapped);
      } catch (err: any) {
        console.error(err);
        toast.error('Failed to load projects');
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, []);

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
        </div>
      ) : (
        <ProjectList className="mt-8" projects={items.slice(0, 4)} />
      )}

      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}