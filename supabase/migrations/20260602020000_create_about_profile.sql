create table if not exists public.about_profile (
  id integer primary key default 1 check (id = 1),
  name text not null default '',
  description text not null default '',
  image text not null default '',
  skills text[] not null default '{}'::text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_about_profile_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists about_profile_updated_at on public.about_profile;

create trigger about_profile_updated_at
before update on public.about_profile
for each row
execute function public.set_about_profile_updated_at();

alter table public.about_profile enable row level security;

drop policy if exists "Public can read about profile" on public.about_profile;
drop policy if exists "Authenticated can insert about profile" on public.about_profile;
drop policy if exists "Authenticated can update about profile" on public.about_profile;

create policy "Public can read about profile"
on public.about_profile
for select
to public
using (true);

create policy "Authenticated can insert about profile"
on public.about_profile
for insert
to authenticated
with check (true);

create policy "Authenticated can update about profile"
on public.about_profile
for update
to authenticated
using (true)
with check (true);

grant select on public.about_profile to anon, authenticated;
grant insert, update on public.about_profile to authenticated;

insert into public.about_profile (id, name, description, image, skills)
values (
  1,
  'Md Kawsar Islam Yeasin',
  'I''m a front-end-focused full-stack software developer with almost 2 years of industry experience. I build web and mobile apps with TypeScript, React, Next.js, React Native, and Expo; contribute to open source with 622+ GitHub stars overall; and enjoy AI-driven workflows, agent-based development, client collaboration, and maintainable freelance and contract work.',
  '/assets/yeasin-normal.png',
  ARRAY[
    'react',
    'typescript',
    'nextjs',
    'tailwindcss',
    'nodejs',
    'redux',
    'react-native',
    'expo',
    'expressjs',
    'mongodb',
    'postgresql',
    'figma',
    'github',
    'motion',
    'socketio'
  ]::text[]
)
on conflict (id) do update
set
  name = excluded.name,
  description = excluded.description,
  image = excluded.image,
  skills = excluded.skills,
  updated_at = now();
