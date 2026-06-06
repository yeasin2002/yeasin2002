import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redux from '@/components/technologies/Redux';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Port a Vacation',
    description:
      'Vacation rental and property management website for a USA client with dynamic search, filters, and detailed property pages.',
    image: '/project/portavacation-property.jpg',
    link: 'https://www.portavacation.co/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
    ],
    live: 'https://www.portavacation.co/',
    details: false,
    projectDetailsPageSlug: '/projects/port-a-vacation',
    isWorking: true,
  },
  {
    title: 'Wiiz AI',
    description:
      'AI-based job marketplace for a German client. Maintained strict linting with Biome.js, fixed 50+ issues, and handled ongoing production support.',
    image: '/project/swish-job-bidding.png',
    link: 'https://wiiz.ai/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Redux', icon: <Redux key="redux" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    live: 'https://wiiz.ai/',
    details: false,
    projectDetailsPageSlug: '/projects/wiiz-ai',
    isWorking: true,
  },
  {
    title: 'Glowmi.net',
    description:
      'AI-powered skincare e-commerce platform with English LTR and Arabic RTL support, built as a clean and scalable customer/admin experience.',
    image: '/project/glowmi-coming-soon.jpg',
    link: 'https://glowmi.net/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Redux', icon: <Redux key="redux" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    live: 'https://glowmi.net/',
    details: false,
    projectDetailsPageSlug: '/projects/glowmi',
    isWorking: true,
  },
];
