import { fetchProjectsServer, ProjectRowServer } from '@/app/dashboard/projects/project-actions.server';
import { getTechnology } from '@/lib/technologies';
import type { Project } from '@/types/project';
import { Link } from 'next-view-transitions';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectList } from '../projects/ProjectList';
import { Button } from '../ui/button';

export default async function Projects() {
  const rows = await fetchProjectsServer();

  const items: Project[] = (rows ?? []).map((r: ProjectRowServer) => ({
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

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <ProjectList className="mt-8" projects={items.slice(0, 4)} />

      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
