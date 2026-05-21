# Product

This is a personal developer portfolio website for Md Kawsar Islam Yeasin, a junior full-stack software developer. It serves as a professional presence for attracting recruiters, clients, and collaborators.

## Pages & Sections

- **Home (landing):** Hero, experience, projects, about, GitHub activity, blog preview, CTA, setup, journey
- **Blog:** MDX-based technical articles with syntax highlighting
- **Projects:** Showcase of client work, freelance projects, and experiments
- **Work Experience:** Professional history with company logos and role details
- **Contact:** Form with Telegram bot integration for lead capture
- **Resume:** Downloadable CV
- **Gears / Setup:** Development tools and VS Code configuration guide

## Key Features

- Dark/light theme with system preference detection
- Smooth scrolling (Lenis) and page transitions (next-view-transitions)
- Privacy-focused analytics (Umami)
- Contact form with server-side rate limiting (3 req/min) and Telegram notifications
- SEO: OG images, sitemap, robots.txt, per-page metadata
- Configuration-driven content — most copy lives in `src/config/`

## Customization

The portfolio is designed to be forkable. All personal content (name, skills, experience, projects) is centralized in `src/config/` with inline documentation for easy replacement.


<!--  structure -->
# Project Structure

## Top-Level

```
src/          # All application source code
public/       # Static assets served at root
.kiro/        # Kiro steering and spec files
```

## `src/` Directory

```
src/
├── app/                  # Next.js App Router
│   ├── api/              # API route handlers
│   │   └── contact/      # Contact form endpoint (rate-limited, Zod-validated)
│   ├── blog/             # Blog listing + [slug] dynamic pages
│   ├── projects/         # Project listing + [slug] dynamic pages
│   ├── contact/
│   ├── resume/
│   ├── work-experience/
│   ├── gears/
│   ├── setup/
│   ├── journey/
│   ├── layout.tsx        # Root layout — providers, fonts, Navbar, Footer
│   ├── page.tsx          # Homepage (assembles landing section components)
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── ui/               # Shadcn UI components — do not edit directly
│   ├── common/           # Shared layout components (Navbar, Footer, Container, etc.)
│   ├── landing/          # Homepage section components (Hero, Experience, Blog, etc.)
│   ├── blog/             # Blog-specific components
│   ├── projects/         # Project-specific components
│   ├── contact/          # ContactForm component
│   ├── experience/       # Work experience components
│   ├── gears/            # Gears/setup components
│   ├── technologies/     # Tech stack SVG icon components (40+)
│   ├── svgs/             # Custom SVG icon components
│   └── analytics/        # Umami analytics component
│
├── config/               # Content & configuration — primary place to edit copy/data
│   ├── Hero.tsx          # Name, title, skills, description template, social links
│   ├── Meta.tsx          # SEO metadata for every page + helper functions
│   ├── About.tsx
│   ├── Experience.tsx    # Work history data
│   ├── Projects.tsx      # Project data
│   ├── Navbar.tsx        # Nav links
│   ├── Footer.tsx        # Footer links
│   ├── Gears.tsx         # Tools & equipment list
│   ├── Setup.tsx         # Dev setup info
│   ├── Journey.tsx       # Timeline/certificates
│   ├── CTA.tsx
│   ├── Quote.ts
│   ├── ChatPrompt.ts     # AI chat system prompt
│   └── Cat.ts            # Oneko cat toggle
│
├── data/                 # MDX content files
│   ├── blog/             # Blog post .mdx files
│   └── journey/          # Journey/timeline .mdx files
│
├── lib/                  # Utilities and helpers
│   ├── utils.ts          # cn() Tailwind class merging utility
│   ├── blog.ts           # Blog MDX parsing and data fetching
│   ├── project.ts        # Project MDX parsing
│   ├── hero.ts           # Hero description template parser
│   ├── fonts/            # Font configuration
│   └── lenis.ts          # Smooth scroll setup
│
├── hooks/                # Custom React hooks
│   ├── use-mobile.ts
│   ├── use-umami.ts
│   └── use-haptic-feedback.ts
│
├── types/                # Shared TypeScript type definitions
│
└── validate/             # One-off scripts (e.g., testTelegram.ts)
```

## `public/` Directory

```
public/
├── assets/       # Profile images, CV/PDF
├── blog/         # Blog post thumbnail images
├── project/      # Project screenshot images
├── company/      # Company logo images
├── meta/         # OG images for SEO (one per page)
└── oneko/        # Oneko cat animation files
```

## Conventions

- **Components:** PascalCase filenames (`Hero.tsx`, `ContactForm.tsx`)
- **Hooks:** kebab-case filenames with `use-` prefix (`use-mobile.ts`)
- **Utilities:** camelCase filenames (`utils.ts`, `blog.ts`)
- **Config files:** PascalCase (`Hero.tsx`, `Meta.tsx`) — these are `.tsx` because they may contain JSX (e.g., SVG icon JSX in social links)
- **Imports:** Always use `@/` alias for `src/` paths; never use relative `../../` paths across feature boundaries
- **Client components:** Mark with `'use client'` at the top; default to Server Components
- **Content changes:** Edit `src/config/` for copy/data; edit `src/data/` for MDX blog/project content
- **UI components:** Add new Shadcn components to `src/components/ui/` via the Shadcn CLI; do not hand-edit generated files


<!-- tech -->

# Tech Stack

## Core

- **Next.js 16.2.6** — App Router, file-based routing, server/client components
- **React 19.2.6**
- **TypeScript 6.0.3** — strict mode enabled

## Styling & UI

- **Tailwind CSS 4.3.0** — primary styling, mobile-first, utility classes sorted by Prettier plugin
- **Shadcn UI** — pre-built component library (`src/components/ui/`)
- **Radix UI** — headless primitives underlying Shadcn
- **Lucide React** + **Phosphor Icons** — icon sets
- **Motion 12.39.0** — animations
- **Lenis 1.3.23** — smooth scrolling

## Content

- **MDX** (`@next/mdx`, `next-mdx-remote`) — blog posts and project pages
- **Gray Matter** — YAML frontmatter parsing
- **Shiki** — syntax highlighting in MDX
- **Remark plugins** — GFM and frontmatter support

## Forms & Validation

- **React Hook Form 7.76.0**
- **Zod 3.25.76** — schema validation on both client and server
- **@hookform/resolvers** — integration layer

## Other Libraries

- **next-themes** — theme management
- **next-view-transitions** — page transition animations
- **Sonner** — toast notifications
- **Recharts** — data visualization
- **Embla Carousel** — carousel component
- **React Activity Calendar** — GitHub-style contribution graph
- **Cal.com Embed** — scheduling integration

## Dev Tooling

- **pnpm** — package manager (workspace config in `pnpm-workspace.yaml`)
- **Bun** — used for running scripts (`bun run <script>`)
- **Prettier 3.8.3** — formatting with `@trivago/prettier-plugin-sort-imports` and `prettier-plugin-tailwindcss`
- **ESLint 9.39.4** — flat config, extends `next/core-web-vitals` + `next/typescript`
- **Husky + lint-staged** — pre-commit hooks that auto-format and lint staged files
- **Knip** — detects unused exports and dependencies

## Environment Variables

Defined in `.env.example`:

| Variable | Purpose |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Contact form notifications |
| `TELEGRAM_CHAT_ID` | Telegram recipient |
| `GEMINI_API_KEY` | AI/chat features |
| `NEXT_PUBLIC_URL` | Site base URL |
| `NEXT_PUBLIC_UMAMI_SRC` | Umami analytics script |
| `NEXT_PUBLIC_UMAMI_ID` | Umami website ID |

## Common Commands

```bash
bun run dev        # Start dev server with Turbopack
bun run build      # Production build
bun run start      # Start production server
bun run lint       # Run ESLint
bun run format     # Format all files with Prettier
bun run knip       # Check for unused code/exports
bun run test-telegram  # Test Telegram bot integration
```

## TypeScript Path Aliases

`@/*` maps to `./src/*` — always use this for imports within `src/`.


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
