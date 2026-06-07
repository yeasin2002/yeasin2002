import { projects } from '@/data/projects.data';

import { SectionHeading } from './SectionHeading';
import { Star8 } from './Shapes';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 relative">
      <Star8 className="absolute top-16 right-6 w-14 h-14 text-indigo-pop" />
      <SectionHeading
        eyebrow="Selected work"
        title="Things I've"
        emphasis="built lately"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group relative block"
          >
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-ink group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
            <article
              className={`relative rounded-2xl brutal-border p-7 h-full flex flex-col ${p.color}`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs opacity-70">
                  0{i + 1} / 0{projects.length}
                </span>
                <span
                  className={`h-8 w-8 rounded-full ${p.accent} brutal-border flex items-center justify-center text-ink font-bold`}
                >
                  ↗
                </span>
              </div>
              <h3 className="font-display text-3xl font-medium leading-tight mb-3">
                {p.name}
              </h3>
              <p className="text-sm opacity-85 leading-relaxed mb-6 grow">
                {p.blurb}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-current/30 px-2.5 py-0.5 text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
