create extension if not exists pgcrypto;

insert into storage.buckets (id, name, public)
values ('media-library', 'media-library', true)
on conflict (id) do update
set
  name = excluded.name,
  public = excluded.public;

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  bucket_id text not null default 'media-library',
  object_path text not null unique,
  file_name text not null,
  title text not null default '',
  alt text not null default '',
  tags text[] not null default '{}'::text[],
  mime_type text not null default '',
  size_bytes bigint not null default 0,
  content_hash text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists media_assets_created_at_idx
  on public.media_assets (created_at desc);

create index if not exists media_assets_tags_idx
  on public.media_assets using gin (tags);

create index if not exists media_assets_search_idx
  on public.media_assets using gin (
    to_tsvector(
      'simple',
      coalesce(title, '') || ' ' || coalesce(file_name, '') || ' ' || coalesce(alt, '')
    )
  );

create or replace function public.set_media_assets_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists media_assets_updated_at on public.media_assets;

create trigger media_assets_updated_at
before update on public.media_assets
for each row
execute function public.set_media_assets_updated_at();

alter table public.media_assets enable row level security;

drop policy if exists "Authenticated can read media assets" on public.media_assets;
drop policy if exists "Authenticated can insert media assets" on public.media_assets;
drop policy if exists "Authenticated can update media assets" on public.media_assets;
drop policy if exists "Authenticated can delete media assets" on public.media_assets;

create policy "Authenticated can read media assets"
on public.media_assets
for select
to authenticated
using (true);

create policy "Authenticated can insert media assets"
on public.media_assets
for insert
to authenticated
with check (true);

create policy "Authenticated can update media assets"
on public.media_assets
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated can delete media assets"
on public.media_assets
for delete
to authenticated
using (true);

grant select, insert, update, delete on public.media_assets to authenticated;

drop policy if exists "Authenticated can read media objects" on storage.objects;
drop policy if exists "Authenticated can insert media objects" on storage.objects;
drop policy if exists "Authenticated can update media objects" on storage.objects;
drop policy if exists "Authenticated can delete media objects" on storage.objects;

create policy "Authenticated can read media objects"
on storage.objects
for select
to authenticated
using (bucket_id = 'media-library');

create policy "Authenticated can insert media objects"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'media-library');

create policy "Authenticated can update media objects"
on storage.objects
for update
to authenticated
using (bucket_id = 'media-library')
with check (bucket_id = 'media-library');

create policy "Authenticated can delete media objects"
on storage.objects
for delete
to authenticated
using (bucket_id = 'media-library');
