# Project Structure

## Directory Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── gears/             # Gear/setup page
│   ├── journey/           # Journey/timeline page
│   ├── projects/          # Project pages
│   ├── resume/            # Resume page
│   ├── setup/             # Setup page
│   ├── work-experience/   # Work experience page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── analytics/         # Analytics components
│   ├── blog/              # Blog-specific components
│   ├── common/            # Shared/reusable components
│   ├── contact/           # Contact form components
│   ├── experience/        # Experience components
│   ├── gears/             # Gear showcase components
│   ├── landing/           # Landing page components
│   ├── projects/          # Project showcase components
│   ├── svgs/              # SVG icon components
│   ├── technologies/      # Technology icon components
│   └── ui/                # Shadcn UI components
├── config/                # Configuration files
│   ├── About.tsx          # About section config
│   ├── Contact.tsx        # Contact form config
│   ├── Experience.tsx     # Work experience config
│   ├── Hero.tsx           # Hero section config
│   ├── Meta.tsx           # SEO metadata config
│   ├── Navbar.tsx         # Navigation config
│   ├── Projects.tsx       # Projects config
│   └── ...                # Other config files
├── data/                  # Content (MDX files)
│   ├── blog/              # Blog post MDX files
│   ├── journey/           # Journey entry MDX files
│   └── projects/          # Project detail MDX files
├── hooks/                 # Custom React hooks
│   ├── use-mobile.ts      # Mobile detection hook
│   ├── use-umami.ts       # Analytics hook
│   └── ...
├── lib/                   # Utility functions
│   ├── blog.ts            # Blog utilities
│   ├── project.ts         # Project utilities
│   ├── utils.ts           # General utilities
│   └── ...
└── types/                 # TypeScript type definitions
    ├── blog.ts            # Blog types
    ├── project.ts         # Project types
    └── ...

public/
├── assets/                # General static assets
├── blog/                  # Blog post images
├── company/               # Company logos
├── fonts/                 # Custom fonts
├── meta/                  # Meta/OG images
├── project/               # Project thumbnails
├── setup/                 # Setup/gear images
└── skills/                # Skill icons
```

## Naming Conventions

### Files & Directories

- **PascalCase**: React components (`BlogCard.tsx`), type definitions, component directories
- **camelCase**: Utility functions (`formatDate.ts`), hooks (`useMobile.ts`), config files
- **kebab-case**: MDX content files (`my-blog-post.mdx`)

### Components

- One component per file
- Component files use `.tsx` extension
- Group related components in feature directories

### Hooks

- Prefix with `use` and use camelCase
- One hook per file in `src/hooks/`

## Configuration Pattern

Configuration files in `src/config/` export data structures that define content and settings for different sections of the site. This allows easy customization without modifying component code.

## Content Management

- Blog posts: MDX files in `src/data/blog/` with frontmatter
- Projects: MDX files in `src/data/projects/` with frontmatter
- Images: Organized in `public/` by content type

## Import Aliases

Use `@/` prefix for all imports from `src/`:

```typescript
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
```
