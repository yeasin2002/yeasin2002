export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: '01',
    title: 'Discover & Scope',
    description:
      'Understand the core product objectives, target users, edge cases, and architectural constraints.',
  },
  {
    id: '02',
    title: 'Architecture',
    description:
      'Design data models, API contracts, state management, and component hierarchies for long-term scalability.',
  },
  {
    id: '03',
    title: 'Build & Polish',
    description:
      'Write clean, type-safe code with strict standards, fluid micro-interactions, and WCAG accessibility.',
  },
  {
    id: '04',
    title: 'Ship & Monitor',
    description:
      'Deploy via CI/CD, verify Lighthouse 90+ benchmarks, configure monitoring, and optimize in production.',
  },
];
