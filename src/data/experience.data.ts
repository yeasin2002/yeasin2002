export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  current: boolean;
  description: string;
  highlights: string[];
  stack: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Jul 2025 — Present',
    role: 'Software Developer',
    company: 'Teachfosys',
    location: 'Remote',
    current: true,
    description:
      'Integrating AI API endpoints, collaborating closely with backend developers, and leading end-to-end delivery of client software solutions.',
    highlights: [
      'Integrated AI endpoints & streaming responses with reliable error recovery.',
      'Engaged directly with international clients to translate product requirements into technical roadmaps.',
      'Delivered 5+ client web platforms strictly following W3C accessibility and cross-browser standards.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Sentry'],
  },
  {
    period: 'Dec 2023 — Sep 2024',
    role: 'Frontend Developer',
    company: 'Neonency',
    location: 'Remote',
    current: false,
    description:
      'Engineered responsive user interfaces and executed comprehensive performance optimizations across core web products.',
    highlights: [
      'Optimized client-side rendering workflows and eliminated recurring unnecessary component re-renders.',
      'Boosted Lighthouse performance and accessibility scores by 10–20 points, consistently reaching 90+.',
      'Developed modular UI component libraries with scalable styling using Tailwind CSS and Redux.',
    ],
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Redux', 'Vercel'],
  },
  {
    period: '2024 — Present',
    role: 'Open Source & Contract Engineer',
    company: 'Independent',
    location: 'Worldwide',
    current: false,
    description:
      'Building high-performance starter templates, contributing to ecosystem libraries, and delivering bespoke full-stack applications.',
    highlights: [
      'Authored bulletproof-nextjs-starter and react-ts-starter, accumulating 330+ GitHub stars.',
      'Active contributor to popular open-source repositories including shadcn/ui and Skald.',
      'Designed full-stack and mobile client MVPs with automated CI/CD and strict TypeScript type safety.',
    ],
    stack: [
      'TypeScript',
      'Next.js',
      'React Native',
      'Expo',
      'Docker',
      'Turborepo',
    ],
  },
];
