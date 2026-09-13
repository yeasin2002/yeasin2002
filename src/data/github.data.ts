export interface GithubRepo {
  name: string;
  badge: string;
  url: string;
  description: string;
  language: string;
  stars: string;
  forks: string;
}

export interface GithubStat {
  value: string;
  label: string;
  iconType: 'commit' | 'pr' | 'star' | 'repo';
}

export const GITHUB_STATS: GithubStat[] = [
  {
    value: '1,840+',
    label: 'Yearly Commits',
    iconType: 'commit',
  },
  {
    value: '120+',
    label: 'Pull Requests',
    iconType: 'pr',
  },
  {
    value: '622+',
    label: 'Stars Earned',
    iconType: 'star',
  },
  {
    value: '48',
    label: 'Public Repos',
    iconType: 'repo',
  },
];

export const GITHUB_REPOS: GithubRepo[] = [
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
