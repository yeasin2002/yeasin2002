create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  image text not null,
  video text,
  link text not null,
  github text,
  live text,
  details boolean not null default false,
  project_details_page_slug text,
  technologies text[] not null default '{}'::text[],
  is_working boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists projects_title_link_key
  on public.projects (title, link);

create index if not exists projects_sort_order_idx
  on public.projects (sort_order);

create or replace function public.set_projects_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists projects_updated_at on public.projects;

create trigger projects_updated_at
before update on public.projects
for each row
execute function public.set_projects_updated_at();

alter table public.projects enable row level security;

drop policy if exists "Public can read projects" on public.projects;
drop policy if exists "Authenticated can insert projects" on public.projects;
drop policy if exists "Authenticated can update projects" on public.projects;
drop policy if exists "Authenticated can delete projects" on public.projects;

create policy "Public can read projects"
on public.projects
for select
to public
using (true);

create policy "Authenticated can insert projects"
on public.projects
for insert
to authenticated
with check (true);

create policy "Authenticated can update projects"
on public.projects
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated can delete projects"
on public.projects
for delete
to authenticated
using (true);

grant select on public.projects to anon, authenticated;
grant insert, update, delete on public.projects to authenticated;

-- seed placeholder removed; use seed function from dashboard actions
