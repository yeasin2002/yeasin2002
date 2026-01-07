# Project Structure

## Directory Layout

```
src/
├── app/                    # Next.js App Router
│   ├── (home)/             # Homepage route group
│   │   ├── _components/    # Page-specific components (private)
│   │   ├── _data/          # Static data files (private)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/                # API routes
│   ├── blogs/              # Fumadocs blog pages
│   ├── my-blogs/           # Blog listing page
│   ├── layout.tsx          # Root layout
│   └── global.css          # Global styles
├── actions/                # Server Actions
├── assets/                 # Static assets (images, icons, SVGs)
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── shared/             # Shared components
│   └── Icons/              # Custom icon components
├── config/                 # App configuration (metadata)
├── data/                   # Global data files
├── fonts/                  # Font configuration and local fonts
├── helpers/                # Utility helpers
└── lib/                    # Core utilities (cn, source loader)

content/
└── docs/                   # MDX blog content files

.source/                    # Generated Fumadocs source (auto-generated)
```

## Conventions

### Route Groups

- Use `(groupName)` for logical grouping without affecting URL
- Private folders prefixed with `_` (e.g., `_components`, `_data`)

### Component Organization

- Page-specific components live in `_components/` within the route
- Shared/reusable components go in `src/components/`
- UI primitives in `src/components/ui/`

### Data Files

- Route-specific data in `_data/` folders
- Use barrel exports (`index.ts`) for clean imports

### Exports

- Use barrel files (`index.ts`) to re-export from folders
- Named exports preferred over default exports for components

### File Naming

- React components: PascalCase (e.g., `ProjectCard.tsx`)
- Utilities/data: kebab-case (e.g., `skill-data.ts`)
- CSS modules: `ComponentName.module.css`
