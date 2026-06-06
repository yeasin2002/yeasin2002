create extension if not exists pgcrypto;

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  position text not null,
  location text not null,
  image text not null,
  description jsonb not null default '[]'::jsonb,
  start_date text not null,
  end_date text not null,
  website text not null default '',
  x text,
  linkedin text,
  github text,
  technologies text[] not null default '{}'::text[],
  is_current boolean not null default false,
  is_blur boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists experiences_company_position_start_date_key
  on public.experiences (company, position, start_date);

create index if not exists experiences_sort_order_idx
  on public.experiences (sort_order);

create or replace function public.set_experiences_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists experiences_updated_at on public.experiences;

create trigger experiences_updated_at
before update on public.experiences
for each row
execute function public.set_experiences_updated_at();

alter table public.experiences enable row level security;

drop policy if exists "Public can read experiences" on public.experiences;
drop policy if exists "Authenticated can insert experiences" on public.experiences;
drop policy if exists "Authenticated can update experiences" on public.experiences;
drop policy if exists "Authenticated can delete experiences" on public.experiences;

create policy "Public can read experiences"
on public.experiences
for select
to public
using (true);

create policy "Authenticated can insert experiences"
on public.experiences
for insert
to authenticated
with check (true);

create policy "Authenticated can update experiences"
on public.experiences
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated can delete experiences"
on public.experiences
for delete
to authenticated
using (true);

grant select on public.experiences to anon, authenticated;
grant insert, update, delete on public.experiences to authenticated;

insert into public.experiences (
  company,
  position,
  location,
  image,
  description,
  start_date,
  end_date,
  website,
  technologies,
  is_current,
  is_blur,
  sort_order
)
values
  (
    'Freelance & Contract Work',
    'Full Stack Developer',
    'Remote',
    '/company/promote.png',
    jsonb_build_array(
      'Worked with agencies and indie devs on freelance and contract projects.',
      'Built and maintained web and mobile apps with a TypeScript-first workflow.',
      'Collaborated with backend developers and clients to gather requirements and ship updates.',
      'Kept codebases modular, performant, and maintainable.'
    ),
    '2024',
    'Present',
    '',
    ARRAY[
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'React Native',
      'Expo',
      'Figma'
    ],
    true,
    false,
    0
  ),
  (
    'Techfosys',
    'Software Developer',
    'Remote',
    '/company/jvai.jpg',
    jsonb_build_array(
      'Integrated an AI-related API endpoint and collaborated with backend developers to ensure seamless API integration.',
      'Met with foreign clients, gathered information, and translated requirements into delivery plans.',
      'Built and maintained applications and API endpoints across multiple client projects.',
      'Completed 5+ client projects, optimized performance, fixed bugs, and maintained W3C standards and browser compatibility.'
    ),
    'Jul 2025',
    'Present',
    '',
    ARRAY[
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux',
      'Postman',
      'Figma',
      'Vercel',
      'Sentry'
    ],
    true,
    false,
    1
  ),
  (
    'Neonency',
    'Frontend Developer',
    'Remote',
    '/company/loop.png',
    jsonb_build_array(
      'Optimized frontend performance, reduced loading times, and improved the overall user experience.',
      'Built responsive layouts across screen sizes and fixed unnecessary re-rendering and client-side issues.',
      'Improved Lighthouse scores by 10-20 points and consistently targeted 90+ whenever feasible.'
    ),
    'Dec 2023',
    'September 2024',
    '',
    ARRAY[
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Redux',
      'Figma',
      'Netlify',
      'Vercel',
      'Postman',
      'Sentry'
    ],
    false,
    false,
    2
  )
on conflict (company, position, start_date) do update
set
  location = excluded.location,
  image = excluded.image,
  description = excluded.description,
  end_date = excluded.end_date,
  website = excluded.website,
  technologies = excluded.technologies,
  is_current = excluded.is_current,
  is_blur = excluded.is_blur,
  sort_order = excluded.sort_order,
  updated_at = now();
