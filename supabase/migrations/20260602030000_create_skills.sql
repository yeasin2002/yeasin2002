create extension if not exists pgcrypto;

create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  image_url text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists skills_sort_order_idx
  on public.skills (sort_order);

create index if not exists skills_name_idx
  on public.skills (name);

create or replace function public.set_skills_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists skills_updated_at on public.skills;

create trigger skills_updated_at
before update on public.skills
for each row
execute function public.set_skills_updated_at();

alter table public.skills enable row level security;

drop policy if exists "Public can read skills" on public.skills;
drop policy if exists "Authenticated can insert skills" on public.skills;
drop policy if exists "Authenticated can update skills" on public.skills;
drop policy if exists "Authenticated can delete skills" on public.skills;

create policy "Public can read skills"
on public.skills
for select
to public
using (true);

create policy "Authenticated can insert skills"
on public.skills
for insert
to authenticated
with check (true);

create policy "Authenticated can update skills"
on public.skills
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated can delete skills"
on public.skills
for delete
to authenticated
using (true);

grant select on public.skills to anon, authenticated;
grant insert, update, delete on public.skills to authenticated;
