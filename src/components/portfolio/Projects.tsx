import { projects } from '@/data/projects.data';
import Image from 'next/image';

import { SectionHeading } from './SectionHeading';
import { Star8 } from './Shapes';

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
      <Star8 className="absolute top-16 right-6 w-14 h-14 text-indigo-pop" />
      <SectionHeading
        eyebrow="Selected work"
        title="Things I've"
        emphasis="built lately"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group block h-full"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-[28px] border-2 border-ink bg-cream shadow-[10px_10px_0_0_rgba(10,10,10,0.95)] transition-transform duration-300 group-hover:translate-y-[0.08]">
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-semibold tracking-[0.2em] text-ink shadow-[3px_3px_0_0_rgba(10,10,10,0.95)]">
                  {String(i + 1).padStart(2, '0')} /{' '}
                  {String(projects.length).padStart(2, '0')}
                </div>

                <span
                  className={`absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border-2 border-ink ${p.accent} text-lg font-bold text-ink shadow-[3px_3px_0_0_rgba(10,10,10,0.95)] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}
                >
                  ↗
                </span>
              </div>

              <div
                className={`flex flex-1 flex-col gap-5 px-6 py-7 ${p.color}`}
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] opacity-75">
                  <span>{p.year}</span>
                  <span>•</span>
                  <span>{p.role}</span>
                </div>

                <div>
                  <h3 className="font-display text-3xl font-medium leading-tight">
                    {p.name}
                  </h3>
                </div>

                <p className="text-base leading-relaxed opacity-90">
                  {p.blurb}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-current/30 px-3 py-1 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
