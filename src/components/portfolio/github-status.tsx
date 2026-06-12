import { GITHUB_STATUS_CONFIG } from '@/data/github-status';
import { useMemo } from 'react';

import { SectionHeading } from './SectionHeading';
import { Asterisk, Star8 } from './Shapes';

/**
 * GITHUB SECTION — single-file component.
 * Edit the CONFIG block below to change username, stats, repos, etc.
 * The contribution heatmap is generated from a deterministic seed so it
 * looks real without needing the GitHub API. Swap `generateContributions`
 * with a fetch from https://github-contributions-api.jogruber.de/v4/<user>
 * if you want live data later.
 */

const LANG_COLORS: Record<string, string> = {
  TypeScript: 'bg-indigo-pop',
  JavaScript: 'bg-sunshine',
  Python: 'bg-blush',
  Rust: 'bg-ink',
};

// ──────────────────────────────────────────────────────────────────
// Heatmap generator (deterministic mulberry32)
// ──────────────────────────────────────────────────────────────────
function generateContributions(weeks = 53) {
  let seed = 1337;
  const rand = () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const grid: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const col: number[] = [];
    for (let d = 0; d < 7; d++) {
      const r = rand();
      let lvl = 0;
      if (r > 0.35) lvl = 1;
      if (r > 0.6) lvl = 2;
      if (r > 0.8) lvl = 3;
      if (r > 0.93) lvl = 4;
      col.push(lvl);
    }
    grid.push(col);
  }
  return grid;
}

const LEVEL_BG = [
  'bg-cream',
  'bg-indigo-pop/25',
  'bg-indigo-pop/55',
  'bg-indigo-pop/80',
  'bg-sunshine',
];

const MONTHS = [
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
];
const DAYS = ['Mon', 'Wed', 'Fri'];

export function GithubStatus() {
  const grid = useMemo(() => generateContributions(53), []);

  return (
    <section id="github" className="mx-auto max-w-7xl px-6 py-24 relative">
      <Asterisk className="absolute top-10 right-10 w-12 h-12 text-blush" />
      <Star8 className="absolute bottom-10 left-4 w-10 h-10 text-sunshine" />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="On GitHub"
          title="What I'm"
          emphasis="building right now"
        />
        <a
          href={GITHUB_STATUS_CONFIG.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-ink text-cream px-5 py-2.5 brutal-border font-mono text-xs uppercase tracking-wider hover:-translate-y-0.5 transition-transform"
        >
          @{GITHUB_STATUS_CONFIG.username} <span aria-hidden>↗</span>
        </a>
      </div>

      {/* Contribution card */}
      <div className="relative">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-ink" />
        <div className="relative rounded-2xl brutal-border bg-cream p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="font-display text-3xl md:text-4xl text-ink leading-none">
                {GITHUB_STATUS_CONFIG.totalContributions.toLocaleString()}{' '}
                <span className="font-sans font-normal text-base text-ink/70">
                  contributions
                </span>
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60 mt-1">
                in the last year
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink/70">
              Less
              {[0, 1, 2, 3, 4].map((l) => (
                <span
                  key={l}
                  className={`h-3 w-3 rounded-sm border border-ink/30 ${LEVEL_BG[l]}`}
                />
              ))}
              More
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-flex flex-col gap-1 min-w-full">
              {/* months */}
              <div className="grid grid-flow-col auto-cols-[14px] gap-1 pl-8">
                {Array.from({ length: 53 }).map((_, i) => {
                  const m =
                    i % 4 === 0
                      ? MONTHS[Math.floor(i / 4.5) % MONTHS.length]
                      : '';
                  return (
                    <span
                      key={i}
                      className="font-mono text-[10px] text-ink/50 h-3"
                    >
                      {m}
                    </span>
                  );
                })}
              </div>
              {/* grid */}
              <div className="flex gap-1">
                <div className="flex flex-col gap-1 justify-between py-0.5 pr-1 w-7 font-mono text-[10px] text-ink/50">
                  {DAYS.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <div className="grid grid-flow-col auto-cols-[14px] gap-1">
                  {grid.map((col, ci) => (
                    <div key={ci} className="grid grid-rows-7 gap-1">
                      {col.map((lvl, ri) => (
                        <span
                          key={ri}
                          title={`Level ${lvl}`}
                          className={`h-[14px] w-[14px] rounded-[3px] border border-ink/20 ${LEVEL_BG[lvl]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {GITHUB_STATUS_CONFIG.stats.map((s, i) => (
          <div key={s.label} className="relative">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-ink" />
            <div
              className={`relative rounded-xl brutal-border p-5 ${
                i % 2 === 0 ? 'bg-sunshine' : 'bg-cream'
              }`}
            >
              <p className="font-display text-3xl md:text-4xl text-ink leading-none">
                {s.value}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/70 mt-2">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pinned section heading */}
      <div className="mt-16 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-pop mb-2">
            ✦ Open Source &amp; Pinned
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-ink leading-[1] max-w-2xl">
            Top contributions &{' '}
            <em className="italic font-light text-indigo-pop">pinned repos</em>
          </h3>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
          shipping code in public ↘
        </p>
      </div>

      {/* Pinned repos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GITHUB_STATUS_CONFIG.repos.map((r) => (
          <a
            key={`${r.owner}/${r.name}`}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="group relative block"
          >
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-ink group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            <article className="relative rounded-xl brutal-border bg-cream p-5 h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-indigo-pop">
                  {r.contribution ? '✦ contribution' : '⌘ pinned'}
                </span>
                <span className="text-ink group-hover:-rotate-12 transition-transform">
                  ↗
                </span>
              </div>
              <p className="font-mono text-[11px] text-ink/55 mb-1">
                {r.owner}/
              </p>
              <h3 className="font-display text-xl text-ink leading-tight mb-2 break-words">
                {r.name}
              </h3>
              <p className="text-sm text-ink/75 leading-relaxed flex-grow">
                {r.description}
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-ink/15 font-mono text-[11px] text-ink/70 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${LANG_COLORS[r.language] ?? 'bg-ink'}`}
                  />
                  {r.language}
                </span>
                <span>★ {r.stars}</span>
                <span>⑂ {r.forks}</span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
