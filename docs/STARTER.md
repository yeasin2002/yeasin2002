# Project Starter Guide

This repository is a personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

The goal of this guide is to help you get productive quickly without accidentally breaking the current UI or content structure.

## What This Project Is

- A personal developer portfolio
- A mostly configuration-driven Next.js app
- A site where the visual design should stay stable while the underlying content source evolves

## Quick Start

### 1. Install dependencies

```bash
bun install
```

If you prefer pnpm:

```bash
pnpm install
```

### 2. Set environment variables

Copy `.env.example` to `.env.local` and fill in the values you need.

```bash
cp .env.example .env.local
```

Important variables in this repo include:

- `NEXT_PUBLIC_URL`
- `NEXT_PUBLIC_UMAMI_SRC`
- `NEXT_PUBLIC_UMAMI_ID`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `GEMINI_API_KEY`

### 3. Start the dev server

```bash
bun run dev
```

### 4. Build for production

```bash
bun run build
```

### 5. Start the production server

```bash
bun run start
```

## Useful Commands

```bash
bun run dev
bun run build
bun run start
bun run format
bun run knip
bun run test-telegram
```

## Repo Map

### Content and configuration

- `src/config/` holds the current portfolio content and copy
- `src/data/` holds MDX content for blog and journey pages

### App structure

- `src/app/` contains the Next.js App Router pages
- `src/components/` contains reusable UI and landing sections
- `src/lib/` contains utilities, content helpers, and font setup
- `public/` contains static assets

## How To Work Safely

### Keep the UI stable

- Prefer refactors that change internals, not layout or styling
- If a change could affect visuals, verify the page output before and after
- Avoid introducing new abstractions unless they remove real duplication

### Prefer small changes

- Edit only the files that are directly related to the task
- Reuse the existing folder structure and naming conventions

### Follow the current conventions

- Use `@/` imports for paths inside `src/`
- Keep client components marked with `'use client'`
- Use PascalCase for component and config filenames
- Use kebab-case for hook filenames

## Suggested Workflow

1. Make a small change.
2. Run `bun run build`.
3. If relevant, run `bun run format` on the touched files.
4. Check the browser and confirm the UI still matches the current design.
5. Only then move on to the next refactor.

## Contribution Notes

- Do not remove working demo content unless the task explicitly asks for it
- Do not refactor unrelated files while working on a focused change
- If you see leftover dead code, mention it instead of deleting it right away
- If a feature already works, prefer a safe cleanup over a rewrite

## Good Places To Start

If you are continuing development, these are the most useful areas to understand first:

- `src/config/` for portfolio data
- `src/app/page.tsx` for homepage composition
- `src/components/landing/` for section rendering
- `src/lib/` for reusable logic
