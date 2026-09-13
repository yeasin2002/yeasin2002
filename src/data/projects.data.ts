import giftGuru from '@/assets/project-gift-guru.png';
import glowmi from '@/assets/project-glowmi.jpg';
import portavacation from '@/assets/project-portavacation.jpg';
import wiiz from '@/assets/project-wiiz.png';
import type { StaticImageData } from 'next/image';

export interface Project {
  title: string;
  tag: string;
  role: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  link: string;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Port a Vacation',
    tag: '01. PRODUCTION',
    role: '2024 • Full-stack developer',
    subtitle: 'Vacation rental & property management for USA client',
    description:
      'Dynamic property search, real-time filtering, responsive booking layout, and performant server architecture built for an international travel platform.',
    image: portavacation,
    link: 'https://www.portavacation.co/',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Wiiz AI',
    tag: '02. PRODUCTION',
    role: '2025 • Front-end developer',
    subtitle: 'AI-based job marketplace for German client',
    description:
      'AI job bidding ecosystem featuring strict Biome.js quality gates, 50+ bugs resolved, performant dashboard flows, and continuous production support.',
    image: wiiz,
    link: 'https://wiiz.ai/',
    stack: ['Next.js', 'TypeScript', 'Redux', 'Express', 'shadcn/ui'],
  },
  {
    title: 'Glowmi.net',
    tag: '03. PRODUCTION',
    role: '2025 • Full-stack developer',
    subtitle: 'AI-powered skincare e-commerce (LTR & Arabic RTL)',
    description:
      'Multi-regional e-commerce storefront with dual English LTR and Arabic RTL support, AI-driven skincare recommendations, and scalable inventory admin.',
    image: glowmi,
    link: 'https://glowmi-net.vercel.app/en',
    stack: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    title: 'Gift Guru & Mobile App',
    tag: '04. MOBILE & WEB',
    role: '2025 • Mobile developer',
    subtitle: 'Cross-platform gifting & recommendation application',
    description:
      'Mobile first application built with React Native and Expo, featuring AI gift matching, social wishlists, and seamless cross-platform deployment.',
    image: giftGuru,
    link: 'https://github.com/yeasin2002',
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
  },
];
