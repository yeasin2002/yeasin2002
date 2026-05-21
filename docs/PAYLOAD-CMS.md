# Payload CMS Guide

This project is being prepared to move portfolio content into Payload CMS while keeping the current UI and structure stable.

The idea is simple:

- keep the design and page composition in Next.js
- move editable content into Payload
- keep truly static labels and UI-only text in code

## Where Payload Lives In This Repo

- `payload.config.ts` is the main Payload config
- `src/payload/collections/` contains collections
- `src/payload/globals/` contains global singletons
- `src/payload/access/` contains access helpers
- `src/payload/utils/` contains small shared helpers
- `/payload/admin` is the CMS dashboard
- `/payload/api` is the Payload API

## How To Open The Dashboard

Run the app locally and visit:

```bash
bun run dev
```

Then open:

```text
/payload/admin
```

If the database and environment variables are configured correctly, you should see the Payload admin panel there.

## Environment Variables You Need

Payload uses the values defined in `.env.local`:

- `PAYLOAD_SECRET`
- `DATABASE_URL` or `POSTGRES_URL`
- `BLOB_READ_WRITE_TOKEN`
- `NEXT_PUBLIC_URL`

For local development, you can start with the values from `.env.example` and fill in the real ones later.

## What Is Dynamic

These are the main content areas intended to be managed from Payload:

- CV
- Experience
- Projects
- About section description and skills
- Blog posts
- Quotes
- Resume file

These are still static in code for now:

- your name
- section headings
- layout structure
- UI-only labels and helper text

## Current Payload Models

### Collections

- `media`
- `skills`
- `experiences`
- `projects`
- `blog-posts`
- `quotes`
- `users`

### Globals

- `about`
- `resume`

## What Each Model Is For

### `media`

Central storage for uploaded files.

Use this for:

- skill icons
- company logos
- project screenshots
- blog cover images
- resume PDF

This keeps uploads in one place instead of scattering files through `public/`.

### `skills`

Stores reusable skills that can be linked from other content.

Fields:

- `name`
- `icon`
- `href`
- `description`

Use this collection when you want a skill to appear in multiple places, such as About or Experience.

### `experiences`

Stores work history entries.

Fields:

- `company`
- `position`
- `location`
- `image`
- `description`
- `startDate`
- `endDate`
- `website`
- `technologies`
- `isCurrent`

This is the right place for company logos, role descriptions, and linked skills.

### `projects`

Stores portfolio projects.

Fields:

- `title`
- `slug`
- `description`
- `image`
- `link`
- `live`
- `technologies`
- `details`
- `isWorking`

The slug is generated from the title on create, so you usually only edit the title and content.

### `blog-posts`

Stores blog content.

Fields:

- `title`
- `slug`
- `excerpt`
- `coverImage`
- `content`
- `publishedAt`

Use this for MDX-style articles later if you want the blog to become fully CMS-driven.

### `quotes`

Stores quote cards or rotating quotes.

Fields:

- `quote`
- `author`

### `about`

Stores the editable part of the About section.

Fields:

- `description`
- `skills`

### `resume`

Stores the resume/CV file.

Fields:

- `file`

## How Content Editing Works

### Editing simple text

Open the matching collection or global in Payload and update the field directly.

Examples:

- update a project description in `projects`
- update the About paragraph in `about`
- update a quote in `quotes`

### Uploading images

Use the `media` collection for uploads.

Then connect the uploaded asset from:

- `skills.icon`
- `experiences.image`
- `projects.image`
- `blog-posts.coverImage`
- `resume.file`

### Linking reusable skills

Create skills once in `skills`, then reference them from:

- `about.skills`
- `experiences.technologies`
- `projects.technologies`

This avoids duplicate data and makes updates easier later.

## Access Rules

The current setup is intentionally simple:

- public users can read content
- only admin users can create, update, or delete content

That means the CMS is safe for public-facing browsing, but editing is restricted.

## Adding New Content Later

If you need a new dynamic section in the future, decide first whether it should be:

1. a collection, if there are many items
2. a global, if there is only one shared record

Then add the schema under `src/payload/`, and later connect the frontend to that data.

## Recommended Editing Flow

1. Start with the content type you want to change.
2. Check whether it belongs in a collection or a global.
3. Upload any required media into `media`.
4. Link related skills or files.
5. Save the entry.
6. Confirm the frontend still renders the same design.

## Best Practices For This Project

- Keep the UI static until the CMS migration phase is ready
- Move only content that needs frequent editing
- Reuse `media` instead of adding duplicate asset storage
- Reuse `skills` rather than hardcoding skill data in multiple places
- Keep section names and other presentation text in code if they are not meant to change often

## Local Development Notes

- Use `bun run dev` for the app
- Use `bun run build` before larger changes
- Use `bun run payload` only if you need the Payload CLI directly
- Keep `.env.local` consistent with `.env.example`

## When To Edit Code Instead Of Payload

Make a code change when the thing you want to change is:

- layout
- styling
- routing
- component behavior
- section structure
- static labels that should not be edited in CMS

Make a Payload change when the thing you want to change is:

- content text
- uploaded images
- reusable skills
- experience/project data
- blog entries
- quotes
- resume file

## Current Migration Strategy

The current codebase still has config-driven demo content.

That is intentional.

The next phase is to connect the frontend to Payload one section at a time, so the design stays stable while the data source changes underneath it.
