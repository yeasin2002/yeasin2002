# Technology Stack

## Core Framework

- **Next.js 15** with App Router and Turbopack
- **React 19** for UI components
- **TypeScript 5** for type safety

## Styling & UI

- **Tailwind CSS 4** with PostCSS
- **Shadcn UI** component library (New York style)
- **Radix UI** primitives for accessible components
- **Lucide React** for icons
- **Motion** (Framer Motion) for animations
- **Lenis** for smooth scrolling

## Content & Data

- **MDX** for blog posts and project pages via `@next/mdx`
- **next-mdx-remote** for remote MDX content
- **gray-matter** for frontmatter parsing
- **Shiki** for syntax highlighting in code blocks

## Development Tools

- **Bun** as the preferred package manager (npm also supported)
- **ESLint** with Next.js config for linting
- **Prettier** with Tailwind CSS plugin for code formatting
- **@trivago/prettier-plugin-sort-imports** for import sorting

## Build System

Bun is the preferred package manager, but npm is also supported.

### Common Commands

```bash
# Development
bun dev              # Start dev server with Turbopack
npm run dev          # Alternative with npm

# Production
bun run build        # Build for production
bun start            # Start production server

# Code Quality
bun run lint         # Run ESLint
```

### Build Validation

Always run `bun run build` before pushing changes to ensure the build succeeds.

## Path Aliases

- `@/*` maps to `./src/*` for clean imports

## Environment Variables

Required variables (see `.env.example`):
- `TELEGRAM_BOT_TOKEN` - Telegram bot for contact form
- `TELEGRAM_CHAT_ID` - Telegram chat ID for notifications
- `GEMINI_API_KEY` - Google Gemini API key
- `NEXT_PUBLIC_URL` - Public URL of the site
- `NEXT_PUBLIC_UMAMI_SRC` - Umami analytics script URL
- `NEXT_PUBLIC_UMAMI_ID` - Umami website ID
