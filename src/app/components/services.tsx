import bunIcon from '@/assets/skills/bun.png';
import jsIcon from '@/assets/skills/javascript.png';
import mongoIcon from '@/assets/skills/mongodb.png';
import nextIcon from '@/assets/skills/nextjs.png';
import nodeIcon from '@/assets/skills/node.png';
import pgIcon from '@/assets/skills/postgresql.png';
import prismaIcon from '@/assets/skills/prisma.png';
import reactIcon from '@/assets/skills/react.png';
import tsIcon from '@/assets/skills/typescript.png';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const capabilities = [
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

const skillBadges = [
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

export function Services() {
  return (
    <section id="skills" className="section-pad py-24 md:py-32 scroll-mt-12">
      <div className="mx-auto max-w-[1490px]">
        {/* Section Heading */}
        <div className="section-heading mb-16 md:mb-20">
          <div>
            <span className="section-kicker">
              04 — Toolbox &amp; Capabilities
            </span>
            <h2>
              The stack I <em>reach for daily.</em>
            </h2>
          </div>
          <p className="self-end text-sm md:text-base leading-relaxed text-muted-foreground">
            From architectural planning to production deployment, high-velocity
            tools crafted for speed, type safety, and exceptional user
            experience.
          </p>
        </div>

        {/* 8-Row Capabilities List */}
        <div className="border-t border-foreground/20">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="service-item-row group cursor-pointer"
            >
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ArrowUpRight
                size={18}
                className="text-foreground group-hover:text-primary transition-colors"
              />
            </div>
          ))}
        </div>

        {/* Visual Brand Badges Strip */}
        <div className="mt-16 pt-10 border-t border-foreground/15">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-6">
            Core Technologies
          </span>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
            {skillBadges.map((badge) => (
              <div
                key={badge.name}
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-foreground/10 bg-background/60 hover:border-foreground/30 hover:bg-foreground/[0.03] transition-all duration-300"
              >
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <Image
                    src={badge.icon}
                    alt={badge.name}
                    width={32}
                    height={32}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-[11px] font-mono font-medium text-foreground/80">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const Skills = Services;
