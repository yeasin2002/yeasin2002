import Expo from '@/components/technologies/Expo';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import Redux from '@/components/technologies/Redux';
import Sentry from '@/components/technologies/Sentry';
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
    company: 'Freelance & Contract Work',
    position: 'Full Stack Developer',
    location: 'Remote',
    image: '/company/promote.png',
    description: [
      'Worked with agencies and indie devs on freelance and contract projects.',
      'Built and maintained web and mobile apps with a TypeScript-first workflow.',
      'Collaborated with backend developers and clients to gather requirements and ship updates.',
      'Kept codebases modular, performant, and maintainable.',
    ],
    startDate: '2024',
    endDate: 'Present',
    website: '',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      { name: 'Redux', href: 'https://redux.js.org/', icon: <Redux /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      { name: 'MongoDB', href: 'https://www.mongodb.com/', icon: <MongoDB /> },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'React Native',
        href: 'https://reactnative.dev/',
        icon: <ReactNative />,
      },
      { name: 'Expo', href: 'https://expo.dev/', icon: <Expo /> },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
    ],
  },
  {
    isCurrent: true,
    company: 'Techfosys',
    position: 'Software Developer',
    location: 'Remote',
    image: '/company/jvai.jpg',
    description: [
      'Integrated an AI-related API endpoint and collaborated with backend developers to ensure seamless API integration.',
      'Met with foreign clients, gathered information, and translated requirements into delivery plans.',
      'Built and maintained applications and API endpoints across multiple client projects.',
      'Completed 5+ client projects, optimized performance, fixed bugs, and maintained W3C standards and browser compatibility.',
    ],
    startDate: 'Jul 2025',
    endDate: 'Present',
    website: '',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      { name: 'MongoDB', href: 'https://www.mongodb.com/', icon: <MongoDB /> },
      { name: 'Redux', href: 'https://redux.js.org/', icon: <Redux /> },
      { name: 'Postman', href: 'https://www.postman.com/', icon: <Postman /> },
      { name: 'Figma', href: 'https://figma.com/', icon: <Figma /> },
      { name: 'Vercel', href: 'https://vercel.com/', icon: <Vercel /> },
      { name: 'Sentry', href: 'https://sentry.io/', icon: <Sentry /> },
    ],
  },
  {
    isCurrent: false,
    company: 'Neonency',
    position: 'Frontend Developer',
    location: 'Remote',
    image: '/company/loop.png',
    description: [
      'Optimized frontend performance, reduced loading times, and improved the overall user experience.',
      'Built responsive layouts across screen sizes and fixed unnecessary re-rendering and client-side issues.',
      'Improved Lighthouse scores by 10-20 points and consistently targeted 90+ whenever feasible.',
    ],
    startDate: 'Dec 2023',
    endDate: 'September 2024',
    website: '',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      {
        name: 'JavaScript',
        href: 'https://www.javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      { name: 'Redux', href: 'https://redux.js.org/', icon: <Redux /> },
      { name: 'Figma', href: 'https://figma.com/', icon: <Figma /> },
      { name: 'Netlify', href: 'https://www.netlify.com/', icon: <Netlify /> },
      { name: 'Vercel', href: 'https://vercel.com/', icon: <Vercel /> },
      { name: 'Postman', href: 'https://www.postman.com/', icon: <Postman /> },
      { name: 'Sentry', href: 'https://sentry.io/', icon: <Sentry /> },
    ],
  },
];
