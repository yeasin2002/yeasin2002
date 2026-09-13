import bunIcon from '@/assets/skills/bun.png';
import jsIcon from '@/assets/skills/javascript.png';
import mongoIcon from '@/assets/skills/mongodb.png';
import nextIcon from '@/assets/skills/nextjs.png';
import nodeIcon from '@/assets/skills/node.png';
import pgIcon from '@/assets/skills/postgresql.png';
import prismaIcon from '@/assets/skills/prisma.png';
import reactIcon from '@/assets/skills/react.png';
import tsIcon from '@/assets/skills/typescript.png';
import type { StaticImageData } from 'next/image';

export interface SkillBadge {
  name: string;
  icon: StaticImageData;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export const SKILLS: SkillBadge[] = [
  { name: 'TypeScript', icon: tsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Next.js', icon: nextIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'PostgreSQL', icon: pgIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'Prisma', icon: prismaIcon },
  { name: 'Bun', icon: bunIcon },
];

export const CAPABILITIES: Capability[] = [
  {
    id: '01',
    title: 'TypeScript & JavaScript',
    description:
      'Type-safe full-stack codebases, clean design patterns, and strict compiler standards across web and mobile.',
  },
  {
    id: '02',
    title: 'React & Next.js',
    description:
      'High-performance App Router, Server Components, dynamic streaming, and Lighthouse 90+ optimization.',
  },
  {
    id: '03',
    title: 'React Native & Expo',
    description:
      'Cross-platform iOS and Android applications with native device capabilities and polished micro-interactions.',
  },
  {
    id: '04',
    title: 'Node.js & Backend APIs',
    description:
      'Scalable REST APIs, Express, Nest.js, Bun runtime, background tasks, and real-time socket connections.',
  },
  {
    id: '05',
    title: 'PostgreSQL, Mongo & Prisma',
    description:
      'Relational and document schema modeling, ACID transactions, Prisma ORM migrations, and performant querying.',
  },
  {
    id: '06',
    title: 'AI Endpoints & Agentic Workflows',
    description:
      'Structured outputs, tool calling, Gemini & OpenAI integration, streaming UI, and agent-driven workflows.',
  },
  {
    id: '07',
    title: 'Tailwind CSS & UI Systems',
    description:
      'Accessible design systems, custom theme tokens, Radix / Base UI primitives, and responsive fluid styling.',
  },
  {
    id: '08',
    title: 'DevOps & Monorepos',
    description:
      'Turborepo build orchestration, Docker containers, GitHub CI/CD automation, Vercel edge, and Sentry monitoring.',
  },
];
