export type Project = {
  name: string;
  year: string;
  role: string;
  blurb: string;
  link: string;
  image: string;
  tech: string[];
  color: string;
  accent: string;
};

export const projects: Project[] = [
  {
    name: 'Port a Vacation',
    year: '2024',
    role: 'Full-stack developer',
    blurb:
      'Vacation rental & property management for a USA client. Dynamic search, filters, and rich property pages.',
    link: 'https://www.portavacation.co/',
    image: '/project/portavacation-property.jpg',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Node', 'MongoDB'],
    color: 'bg-indigo-pop text-cream',
    accent: 'bg-sunshine',
  },
  {
    name: 'Wiiz AI',
    year: '2025',
    role: 'Front-end developer',
    blurb:
      'AI-based job marketplace for a German client. Strict Biome.js linting, 50+ issues fixed, ongoing production support.',
    link: 'https://wiiz.ai/',
    image: '/project/swish-job-bidding.png',
    tech: ['Next.js', 'TypeScript', 'Redux', 'Express', 'shadcn/ui'],
    color: 'bg-sunshine text-ink',
    accent: 'bg-indigo-pop',
  },
  {
    name: 'Glowmi.net',
    year: '2025',
    role: 'Full-stack developer',
    blurb:
      'AI-powered skincare e-commerce with full English LTR and Arabic RTL support. Clean, scalable storefront and admin.',
    link: 'https://glowmi-net.vercel.app/en',
    image: '/project/glowmi-coming-soon.jpg',
    tech: ['Next.js', 'TypeScript', 'Redux', 'Tailwind', 'shadcn/ui'],
    color: 'bg-blush text-ink',
    accent: 'bg-ink',
  },
];
