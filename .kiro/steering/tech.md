# Tech Stack

## Core Framework

- **Next.js 15** with App Router and Turbopack
- **React 19** with Server Components
- **TypeScript** (strict mode)

## Styling

- **Tailwind CSS v4** with PostCSS
- **tw-animate-css** for animations
- **class-variance-authority** + **clsx** + **tailwind-merge** for class utilities

## Content & Documentation

- **Fumadocs** (fumadocs-core, fumadocs-ui, fumadocs-mdx) for MDX blog system
- MDX content stored in `content/docs/`
- Source configuration in `source.config.ts`

## Animation

- **GSAP** with React integration (@gsap/react)
- SplitText for text animations

## UI Components

- **shadcn/ui** (new-york style, configured in components.json)
- **lucide-react** and **react-icons** for icons

## Backend Services

- **Resend** for email sending
- Server Actions for form handling

## Package Manager

- **Bun** (bun.lock present)

## Common Commands

```bash
# Development (with Turbopack)
bun dev

# Production build
bun build

# Start production server (port 3002)
bun start

# Generate Fumadocs MDX types (runs automatically on postinstall)
fumadocs-mdx
```

## Path Aliases

- `@/*` → `./src/*`
- `@/.source` → `./.source/index.ts`
