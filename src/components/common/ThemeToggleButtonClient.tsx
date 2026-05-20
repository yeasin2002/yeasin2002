'use client';

import dynamic from 'next/dynamic';

const ThemeToggleButton = dynamic(
  () => import('./ThemeSwitch').then((mod) => mod.ThemeToggleButton),
  { ssr: false },
);

export default ThemeToggleButton;
