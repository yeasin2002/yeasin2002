<!-- Product -->

# Product Overview

## What This Is

A personal portfolio website for Yeasin (yeasin2002), a front-end focused full-stack web developer specializing in TypeScript and Next.js. The site showcases projects, blog posts, work experience, tech stack, and provides contact capabilities.

## Key Features

- **Developer Portfolio**: Showcases open-source contributions, development tools, starter templates, and browser extensions
- **Blog Platform**: MDX-based blog system with syntax highlighting and rich content
- **Project Gallery**: Displays personal and professional projects with detailed information
- **Interactive Experience**: Smooth animations, theme switching (light/dark), and haptic feedback
- **Contact Integration**: Cal.com scheduling embed and Telegram bot integration for inquiries
- **Analytics**: Umami analytics integration for privacy-focused tracking
- **Authentication**: Supabase-based auth system with dashboard functionality

## Target Audience

- Potential employers and clients
- Developers interested in collaboration
- Readers of technical blog content
- Open-source community members

<!-- Structure -->

# Project Structure

## Directory Organization

```
yeasin2002/
├── src/                    # Source code
│   ├── app/               # Next.js App Router
│   ├── components/        # React components
│   ├── config/           # Configuration files
│   ├── data/             # Static data and content
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and helpers
│   ├── types/            # TypeScript type definitions
│   └── validate/         # Testing/validation scripts
├── public/               # Static assets
├── supabase/            # Supabase configuration
├── AGENTS.md/               # AI configuration
└── .agents/             # Agent skills and steering
```

## App Router Structure

The `src/app/` directory follows Next.js 13+ App Router conventions:

- **(auth)/**: Authentication-related pages (route group, no URL segment)
- **(home)/**: Homepage sections and components (route group)
- **blog/**: Blog listing and individual post pages
- **dashboard/**: Protected dashboard area
- **api/**: API routes for backend functionality
- Root files: `layout.tsx`, `page.tsx`, `globals.css`, SEO files

## Component Architecture

### `src/components/`

Components are organized by feature/domain:

- **ui/**: shadcn/ui components (Button, Card, Dialog, etc.)
- **common/**: Shared layout components (LayoutWrapper, ThemeProvider)
- **analytics/**: Analytics integration components
- **blog/**: Blog-specific components
- **contact/**: Contact form and related components
- **experience/**: Work experience display
- **gears/**: Tech stack/gear showcase
- **landing/**: Homepage sections
- **projects/**: Project gallery components
- **technologies/**: Technology/skills display
- **svgs/**: Custom SVG components

### Component Naming

- Use PascalCase for component files: `LayoutWrapper.tsx`
- Co-locate related components in feature directories
- UI primitives in `components/ui/` (managed by shadcn CLI)

## Configuration Pattern

### `src/config/`

Site-wide configuration organized by section:

- Each file exports configuration for a specific site section
- Examples: `Hero.tsx`, `Projects.tsx`, `Experience.tsx`, `Navbar.tsx`
- Mix of `.ts` (data) and `.tsx` (JSX content)

## Data Layer

### `src/data/`

Static content and markdown files:

- **blog/**: Legacy blog posts (if applicable)
- **blogs/**: MDX blog posts with frontmatter
- **journey/**: Career journey/timeline content

## Library & Utilities

### `src/lib/`

Helper functions and utility modules:

- **fonts/**: Font configuration and loading
- **supabase/**: Supabase client initialization
- Feature-specific helpers: `blog.ts`, `project.ts`, `hero.ts`
- **utils.ts**: Common utilities (includes `cn()` for className merging)

## Custom Hooks

### `src/hooks/`

Reusable React hooks:

- `use-mobile.ts`: Responsive breakpoint detection
- `use-umami.ts`: Analytics tracking
- `use-haptic-feedback.ts`: Touch feedback

## Type Definitions

### `src/types/`

TypeScript interfaces and types:

- `blog.ts`: Blog post types
- `project.ts`: Project data types
- `analytics.ts`: Analytics event types

## Styling Conventions

- **Global styles**: `src/app/globals.css`
- **Tailwind utilities**: Use via `className` prop
- **Component variants**: Use `cva` from `class-variance-authority`
- **Class merging**: Use `cn()` helper from `@/lib/utils`
- **CSS variables**: Defined in `globals.css` for theming

## Import Conventions

Always use path aliases:

```typescript
import { Button } from '@/components/ui/button';
import { useUmami } from '@/hooks/use-umami';
import { cn } from '@/lib/utils';
import { ProjectType } from '@/types/project';
```

Never use relative imports like `../../../components`

## File Naming

- **Components**: PascalCase (e.g., `LayoutWrapper.tsx`)
- **Utilities/Hooks**: kebab-case (e.g., `use-mobile.ts`)
- **Config files**: PascalCase matching domain (e.g., `Projects.tsx`)
- **Types**: kebab-case (e.g., `project.ts`)

## Route Organization

- Use route groups `(folder)` for logical grouping without affecting URLs
- Co-locate page components with their routes in `app/`
- Server Components by default, add `'use client'` only when needed
- Use `loading.tsx`, `error.tsx`, and `not-found.tsx` for loading/error states

## Environment Variables

- Store in `.env` (gitignored)
- Example template in `.env.example`
- Prefix public variables with `NEXT_PUBLIC_`
- Required variables: Supabase keys, API keys, analytics IDs

<!-- Tech -->

# Technology Stack

## Core Framework

- **Next.js 16.2.6**: React framework with App Router architecture
- **React 19.2.6**: UI library with React Server Components (RSC)
- **TypeScript 6.0.3**: Strict mode enabled, ES2017 target

## Build System & Package Management

- **Bun**: Primary package manager and runtime
- **Turbopack**: Next.js development bundler (via `--turbopack` flag)
- **PostCSS**: CSS processing with Tailwind CSS plugin

## Styling

- **Tailwind CSS 4.3.0**: Utility-first CSS framework with CSS variables
- **shadcn/ui**: Component library (New York style variant)
- **Radix UI**: Headless UI primitives for accessible components
- **class-variance-authority (cva)**: Variant-based component styling
- **tailwind-merge + clsx**: Utility for merging Tailwind classes

## UI & Animation

- **Motion (Framer Motion)**: Animation library
- **Lenis**: Smooth scroll implementation
- **next-view-transitions**: Page transition effects
- **next-themes**: Dark/light theme management
- **Lucide React**: Icon library
- **Phosphor Icons**: Additional icon set

## Content & Documentation

- **MDX**: Markdown with JSX support via `@next/mdx` and `next-mdx-remote`
- **Shiki**: Syntax highlighting for code blocks
- **gray-matter**: Front matter parsing for blog posts
- **remark-gfm**: GitHub Flavored Markdown support

## Backend & Data

- **Supabase**: Authentication, database (PostgreSQL), and storage
- **@supabase/ssr**: Server-side rendering support for auth
- **Vercel Postgres**: Database connection
- **Vercel Blob**: File storage

## Forms & Validation

- **React Hook Form 7.76.0**: Form state management
- **Zod 3.25.76**: Schema validation
- **@hookform/resolvers**: Zod integration for form validation

## Integrations

- **Cal.com**: Scheduling embed (`@calcom/embed-react`)
- **Umami**: Privacy-focused analytics
- **Telegram Bot**: Contact form integration

## Code Quality

- **ESLint**: Linting with Next.js recommended config
- **Prettier 3.8.3**: Code formatting
  - **@trivago/prettier-plugin-sort-imports**: Auto-sort imports
  - **prettier-plugin-tailwindcss**: Auto-sort Tailwind classes
- **Lefthook**: Git hooks management and staged-file automation
- **Knip**: Unused file and dependency detection

## Common Commands

```bash
# Development
bun run dev              # Start dev server with Turbopack

# Build & Deploy
bun run build            # Production build
bun run start            # Start production server

# Code Quality
bun run lint             # Run ESLint
bun run format           # Format code with Prettier
bun run format:all       # Format with all Prettier configs
bun run knip             # Detect unused dependencies

# Testing
bun run test-telegram    # Test Telegram bot integration
```

## Path Aliases

All imports use `@/` prefix mapped to `src/`:

- `@/components` → Component library
- `@/lib` → Utilities and helper functions
- `@/hooks` → Custom React hooks
- `@/config` → Site configuration
- `@/types` → TypeScript type definitions

<!-- rules -->

### Behavioral guidelines

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

<!-- BEGIN:behavioral-guidelines -->

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
