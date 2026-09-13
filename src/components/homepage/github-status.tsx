'use client';

import {
  ArrowUpRight,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Star,
} from 'lucide-react';

const repos = [
  {
    name: 'shadcn-ui / ui',
    badge: 'Contribution',
    url: 'https://github.com/shadcn-ui/ui',
    description:
      'A set of beautifully-designed, accessible components and code distribution platform for modern web frameworks.',
    language: 'TypeScript',
    stars: '116k',
    forks: '9k',
  },
  {
    name: 'skaldlabs / skald',
    badge: 'Contribution',
    url: 'https://github.com/skaldlabs/skald',
    description:
      'Context layer platform designed to run directly within engineering cloud infrastructure.',
    language: 'TypeScript',
    stars: '556',
    forks: '40',
  },
  {
    name: 'TailAdmin / free-nextjs-admin-dashboard',
    badge: 'Contribution',
    url: 'https://github.com/TailAdmin/free-nextjs-admin-dashboard',
    description:
      'Next.js + Tailwind CSS open-source admin dashboard template with rich layout components.',
    language: 'TypeScript',
    stars: '2.5k',
    forks: '832',
  },
  {
    name: 'yeasin2002 / bulletproof-nextjs-starter',
    badge: 'Author / Pinned',
    url: 'https://github.com/yeasin2002/bulletproof-nextjs-starter',
    description:
      'Production-ready Next.js boilerplate with modern tooling, comprehensive testing, and enterprise architecture.',
    language: 'TypeScript',
    stars: '228',
    forks: '51',
  },
  {
    name: 'yeasin2002 / react-ts-starter',
    badge: 'Author / Pinned',
    url: 'https://github.com/yeasin2002/react-ts-starter',
    description:
      'Full-stack starter combining React 19 + TypeScript with a Nitro API. Vite-powered, blazing-fast DX.',
    language: 'TypeScript',
    stars: '102',
    forks: '22',
  },
  {
    name: 'yeasin2002 / Grow',
    badge: 'Author / Pinned',
    url: 'https://github.com/yeasin2002/Grow',
    description:
      'Routine-based productivity & task management application emphasizing daily discipline and habit formation.',
    language: 'TypeScript',
    stars: 'Active',
    forks: 'App',
  },
];

export function GithubStatus() {
  return (
    <section
      id="oss"
      className="process-band section-pad py-24 md:py-32 scroll-mt-12"
    >
      <div className="mx-auto max-w-[1490px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <span className="section-kicker text-[#888888]">
              06 — Open Source &amp; Engineering
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-white">
              What I&apos;m <em>shipping in public.</em>
            </h2>
          </div>
          <div className="lg:text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-[#999] block mb-2">
              1,842 contributions in the last year
            </span>
            <a
              href="https://github.com/yeasin2002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline text-sm font-mono"
            >
              github.com/yeasin2002 <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* GitHub Contribution Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-12">
          <div className="flex items-center gap-3">
            <GitCommit className="text-primary flex-shrink-0" size={20} />
            <div>
              <span className="block text-xl md:text-2xl font-bold text-white">
                1,840+
              </span>
              <span className="text-[11px] font-mono text-[#888] uppercase">
                Yearly Commits
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GitPullRequest className="text-primary flex-shrink-0" size={20} />
            <div>
              <span className="block text-xl md:text-2xl font-bold text-white">
                120+
              </span>
              <span className="text-[11px] font-mono text-[#888] uppercase">
                Pull Requests
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Star className="text-primary flex-shrink-0" size={20} />
            <div>
              <span className="block text-xl md:text-2xl font-bold text-white">
                622+
              </span>
              <span className="text-[11px] font-mono text-[#888] uppercase">
                Stars Earned
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GitBranch className="text-primary flex-shrink-0" size={20} />
            <div>
              <span className="block text-xl md:text-2xl font-bold text-white">
                48
              </span>
              <span className="text-[11px] font-mono text-[#888] uppercase">
                Public Repos
              </span>
            </div>
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-8 rounded-2xl bg-white/[0.025] border border-white/10 hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-full border border-white/20 text-[#aaa] font-medium bg-white/[0.02]">
                    {repo.badge}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#888] group-hover:text-primary transition-colors"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                  {repo.name}
                </h3>
                <p className="mt-3 text-sm text-[#999] leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#888]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  {repo.language}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-primary" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch size={13} /> {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
