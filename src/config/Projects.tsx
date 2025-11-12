import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Korma App',
    description:
      'Job search platform with company search, filters, AI-powered utilities, and transforming API for PDF/text/image content',
    image: '/project/korma.png',
    link: 'https://kormo-setu.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'shadcn/ui', icon: <Shadcn /> },
      { name: 'PostgreSQL', icon: <PostgreSQL /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
    ],
    github: 'https://github.com/yeasin2002/kormo-setu',
    live: 'https://kormo-setu.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/korma-app',
    isWorking: true,
  },
  {
    title: "Rima's Dental",
    description:
      'Dental clinic management system with patient and doctor authentication, bilingual support (Bengali/English), and 90+ Lighthouse scores',
    image: '/project/rimas-dental.png',
    link: 'https://rimas-dental.vercel.app/en',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'shadcn/ui', icon: <Shadcn /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
    ],
    github: 'https://github.com/yeasin2002/Rimas-Dental',
    live: 'https://rimas-dental.vercel.app/en',
    details: true,
    projectDetailsPageSlug: '/projects/rimas-dental',
    isWorking: true,
  },
  {
    title: 'Amader Bazar',
    description:
      'Full stack e-commerce website with product management, sales tracking, and order management dashboard',
    image: '/project/amader-bazar.png',
    link: 'https://github.com/yeasin2002/Amader-Bazar',
    technologies: [
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'Node.js', icon: <NodeJs /> },
      { name: 'Express.js', icon: <ExpressJs /> },
      { name: 'MongoDB', icon: <MongoDB /> },
    ],
    github: 'https://github.com/yeasin2002/Amader-Bazar',
    live: 'https://github.com/yeasin2002/Amader-Bazar',
    details: true,
    projectDetailsPageSlug: '/projects/amader-bazar',
    isWorking: true,
  },
  {
    title: 'Brightshift',
    description:
      'Hybrid application for job seekers showing job circulars with preference settings and notifications (under development)',
    image: '/project/brightshift.png',
    link: 'https://github.com/yeasin2002/brightshift',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'TypeScript', icon: <TypeScript /> },
    ],
    github: 'https://github.com/yeasin2002/brightshift',
    live: 'https://github.com/yeasin2002/brightshift',
    details: true,
    projectDetailsPageSlug: '/projects/brightshift',
    isWorking: false,
  },
];
