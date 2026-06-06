import { SectionHeading } from "./SectionHeading";

const jobs = [
  {
    role: "Software Developer",
    company: "Techfosys",
    period: "Jul 2025 — Present",
    current: true,
    bullets: [
      "Integrated AI API endpoints, collaborating closely with backend devs for seamless delivery.",
      "Met with foreign clients, gathered requirements, and translated them into delivery plans.",
      "Delivered 5+ client projects with strong W3C and cross-browser standards.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Sentry"],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance & Contract",
    period: "2024 — Present",
    current: true,
    bullets: [
      "Worked with agencies and indie devs across freelance and contract projects.",
      "Built TypeScript-first web and mobile apps; collaborated with backend devs and clients.",
      "Kept codebases modular, performant, and a joy to maintain.",
    ],
    tech: ["Next.js", "React Native", "Expo", "Redux", "PostgreSQL", "Figma"],
  },
  {
    role: "Frontend Developer",
    company: "Neonency",
    period: "Dec 2023 — Sep 2024",
    current: false,
    bullets: [
      "Optimized frontend performance and improved overall UX across products.",
      "Built responsive layouts and fixed unnecessary re-rendering across the app.",
      "Improved Lighthouse scores by 10–20 points, targeting 90+ wherever feasible.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Redux", "Vercel"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-ink text-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sunshine mb-3">
            ✦ Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1] text-cream max-w-3xl">
            Where I&apos;ve <em className="italic font-light text-sunshine">shipped</em> things
          </h2>
        </div>

        <div className="space-y-6">
          {jobs.map((j) => (
            <article
              key={j.company}
              className="group rounded-2xl border-2 border-cream/15 bg-cream/[0.03] hover:bg-cream/[0.06] transition-colors p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-cream">
                    {j.role}{" "}
                    <span className="text-sunshine">@ {j.company}</span>
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cream/60">
                    {j.period} • Remote
                  </p>
                </div>
                {j.current && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-sunshine text-ink px-3 py-1 text-xs font-semibold">
                    <span className="h-2 w-2 rounded-full bg-ink animate-pulse" /> Currently here
                  </span>
                )}
              </div>
              <ul className="space-y-2 text-cream/80 mb-5">
                {j.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-indigo-pop mt-1">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {j.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cream/20 px-3 py-1 text-xs font-medium text-cream/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}