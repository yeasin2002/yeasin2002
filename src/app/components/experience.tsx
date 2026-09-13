'use client';

import { Calendar, MapPin } from 'lucide-react';

const experiences = [
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

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad py-24 md:py-32 border-t border-foreground/15 scroll-mt-12"
    >
      <div className="mx-auto max-w-[1490px]">
        {/* Section Heading */}
        <div className="section-heading mb-16 md:mb-20">
          <div>
            <span className="section-kicker">03 — Experience</span>
            <h2>
              Where I&apos;ve <em>shipped things.</em>
            </h2>
          </div>
          <p className="self-end text-sm md:text-base leading-relaxed text-muted-foreground">
            A track record of engineering fast, accessible web and mobile
            platforms with remote international teams and agile delivery cycles.
          </p>
        </div>

        {/* Experience Cards / Timeline List */}
        <div className="border-t border-foreground/20 divide-y divide-foreground/15">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="group py-10 md:py-14 transition-all duration-300 hover:bg-foreground/[0.02] px-4 md:px-8 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Duration & Meta */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      0{idx + 1}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-primary text-primary-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    {exp.company}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-primary">
                    {exp.role}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Right: Description, Highlights & Tech Stack */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90 font-medium">
                    {exp.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm md:text-[15px] text-muted-foreground leading-normal"
                      >
                        <span className="text-primary font-bold mt-0.5 select-none">
                          —
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-6 border-t border-foreground/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2">
                      Stack:
                    </span>
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-foreground/15 text-xs font-mono font-medium text-foreground bg-background"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
