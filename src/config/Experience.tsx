import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Join Venture AI',
    position: 'Software Developer (Frontend)',
    location: 'Dhaka, Bangladesh',
    image: '/company/joinventure.png',
    description: [
      'Integrated AI-related API endpoints and collaborated with Backend and AI Engineers.',
      'Met with clients to gather requirements and feedback.',
      'Built and maintained AI web applications like chatbots and AI-powered tools.',
    ],
    startDate: 'June 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Antopolis',
    position: 'Frontend Developer',
    location: 'Niketon, Dhaka, Bangladesh',
    image: '/company/antopolis.png',
    description: [
      'Analyzed performance metrics and refactored legacy code for speed and scalability.',
      'Improved query caching, revalidation, and implemented performance optimizations.',
      'Achieved Lighthouse scores of 90+ across client projects.',
      'Reduced unnecessary re-renders, improved client-side error handling, and replaced bloated packages with optimized alternatives.',
    ],
    startDate: 'January 2025',
    endDate: 'April 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
    ],
    website: 'https://antopolis.xyz',
  },
  {
    isCurrent: false,
    company: 'Neonency',
    position: 'Frontend Developer',
    location: 'Remote',
    image: '/company/neonency.png',
    description: [
      'Optimized frontend performance and reduced loading times for better UX.',
      'Ensured responsive design across multiple devices and screen sizes.',
      'Collaborated with design and backend teams to deliver high-quality features.',
    ],
    startDate: 'December 2023',
    endDate: 'January 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
    ],
    website: '#',
  },

];
