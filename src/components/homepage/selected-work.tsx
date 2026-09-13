'use client';

import { PROJECTS, type Project } from '@/data';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="section-pad py-24 md:py-32 scroll-mt-12">
        <div className="mx-auto max-w-[1490px]">
          {/* Section Heading */}
          <div className="section-heading mb-16 md:mb-24">
            <div>
              <span className="section-kicker">01 — Selected work</span>
              <h2>
                Things I&apos;ve <em>built lately.</em>
              </h2>
            </div>
            <p className="self-end text-sm md:text-base leading-relaxed text-muted-foreground">
              Production web and mobile applications delivered for international
              clients and high-velocity startups. Every project opens into the
              technical story and live deployment.
            </p>
          </div>

          {/* Staggered Grid */}
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 max-w-[1360px] mx-auto items-start">
            {PROJECTS.map((project, index) => (
              <article
                key={project.title}
                className={`project-card ${index % 2 === 1 ? 'md:mt-16' : ''}`}
              >
                <button
                  className="project-media w-full block text-left"
                  onClick={() => setActiveProject(project)}
                  aria-label={`View ${project.title} case details`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} presentation`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="project-media-overlay">
                    <span className="text-xs font-bold text-white tracking-wider uppercase">
                      View Project ↗
                    </span>
                    <span className="project-arrow-pill">
                      <ArrowUpRight size={22} />
                    </span>
                  </div>
                </button>

                <div className="project-info-row">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>
                  <span>{project.tag}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Section End Footer Bar */}
          <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-foreground/15 pt-6 text-[11px] font-mono uppercase tracking-wider">
            <span className="text-muted-foreground">
              More production code and client builds in progress.
            </span>
            <a
              href="#contact"
              className="text-primary font-bold hover:underline flex items-center gap-1.5"
            >
              Discuss your project <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} project preview`}
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>
            <div className="relative w-full max-h-[60vh] overflow-hidden bg-black/5 flex items-center justify-center">
              <Image
                src={activeProject.image}
                alt={`${activeProject.title} preview`}
                width={1400}
                height={900}
                className="w-full h-auto object-contain max-h-[60vh]"
              />
            </div>
            <div className="p-6 md:p-8 bg-background">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-foreground/10 pb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {activeProject.role}
                  </span>
                  <h2 className="mt-1 text-2xl md:text-4xl font-extrabold tracking-tight">
                    {activeProject.title}
                  </h2>
                </div>
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-mono uppercase tracking-wider font-bold hover:bg-primary hover:text-foreground transition-colors self-start"
                  >
                    <span>Visit live site</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <div className="mt-6">
                <p className="text-base text-foreground/85 leading-relaxed max-w-3xl">
                  {activeProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-foreground/15 text-xs font-mono font-medium text-muted-foreground bg-foreground/[0.02]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
