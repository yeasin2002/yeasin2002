import { FlatCompat } from '@eslint/eslintrc';
import { plugin as shadcn } from '@shadcn/lint';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      shadcn,
    },
    rules: {
      // Choose and configure your design system rules here:
      'shadcn/no-arbitrary-values': ['error', { allow: ['layout'] }],
      'shadcn/no-raw-colors': 'error',
      // 'shadcn/no-restyle': ['error', { allow: ['layout'] }],
      // 'shadcn/no-inline-styles': 'error',
      // 'shadcn/no-unknown-classes': 'error',
      // 'shadcn/require-static-classes': 'error',
    },
  },
  {
    files: ['src/components/ui/**'],
    rules: {
      'shadcn/no-arbitrary-values': 'off',
    },
  },
  // Ignore the .agents folder (tooling and agent skills)
  { ignores: ['.agents/**', 'node_modules/**', `.next/**`] },
];

export default eslintConfig;