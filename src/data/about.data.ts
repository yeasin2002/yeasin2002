export interface AboutMiniStat {
  value: string;
  label: string;
}

export const ABOUT_DATA = {
  kicker: '05 — About me',
  headline: 'Curious builder, careful shipper.',
  lead: 'Front-end-focused full-stack developer with almost 2 years of industry experience building web and mobile apps with TypeScript, React, Next.js, React Native, and Expo.',
  bigStat: {
    value: '622+',
    label: 'GitHub stars across open-source work',
  },
  statement:
    'I contribute actively to open source, leverage AI-driven development workflows, and partner closely with founders and engineering teams to deliver software that feels considered — not templated.',
  specialization:
    'Full-Stack Web & Mobile App Development with end-to-end type safety, modern CI/CD, and fast DX.',
  focusAreas:
    'TypeScript, Next.js App Router, React Native Expo, Node backend APIs, and structured LLM tool integration.',
  miniStats: [
    {
      value: '2+',
      label: 'Years Exp',
    },
    {
      value: '10+',
      label: 'Shipped',
    },
    {
      value: '48',
      label: 'Repositories',
    },
  ] as AboutMiniStat[],
};
