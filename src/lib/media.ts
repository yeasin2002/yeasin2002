import type { SupabaseClient } from '@supabase/supabase-js';

export const MEDIA_BUCKET = 'media-library';

export const mediaAssetSelect =
  'id,bucket_id,object_path,file_name,title,alt,tags,mime_type,size_bytes,content_hash,created_at,updated_at';

export interface MediaAssetRecord {
  id: string;
  bucket_id: string;
  object_path: string;
  file_name: string;
  title: string;
  alt: string;
  tags: string[];
  mime_type: string;
  size_bytes: number;
  content_hash: string;
  created_at: string;
  updated_at: string;
}

export interface MediaAsset extends MediaAssetRecord {
  publicUrl: string;
  displayLabel: string;
  searchText: string;
}

export interface MediaAssetOption {
  value: string;
  label: string;
  asset: MediaAsset;
  searchText: string;
}

export const isImageFile = (file: File) => file.type.startsWith('image/');

export const getFileExtension = (fileName: string) => {
  const match = fileName.trim().match(/\.[^.]+$/);

  return match ? match[0].toLowerCase() : '';
};

export const buildMediaObjectPath = (contentHash: string, fileName: string) =>
  `images/${contentHash}${getFileExtension(fileName)}`;

export const parseMediaTags = (value: string) =>
  value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

export const hashFile = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest('SHA-256', buffer);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

export const buildMediaSearchText = (asset: {
  alt: string;
  content_hash: string;
  file_name: string;
  mime_type: string;
  object_path: string;
  tags: string[];
  title: string;
}) =>
  [
    asset.title,
    asset.file_name,
    asset.alt,
    asset.object_path,
    asset.mime_type,
    asset.content_hash,
    ...asset.tags,
  ]
    .join(' ')
    .toLowerCase();

export const buildMediaDisplayLabel = (asset: {
  file_name: string;
  title: string;
}) => asset.title.trim() || asset.file_name;

export const toMediaAsset = (
  supabase: SupabaseClient,
  asset: MediaAssetRecord,
): MediaAsset => {
  const publicUrl = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(asset.object_path)
    .data.publicUrl;

  return {
    ...asset,
    publicUrl,
    displayLabel: buildMediaDisplayLabel(asset),
    searchText: buildMediaSearchText(asset),
  };
};

export const toMediaAssetOption = (
  supabase: SupabaseClient,
  asset: MediaAssetRecord,
): MediaAssetOption => {
  const mediaAsset = toMediaAsset(supabase, asset);

  return {
    value: mediaAsset.publicUrl,
    label: mediaAsset.displayLabel,
    asset: mediaAsset,
    searchText: mediaAsset.searchText,
  };
};

export const fetchMediaAssets = async (
  supabase: SupabaseClient,
  limit = 100,
) => {
  const { data, error } = await supabase
    .from('media_assets')
    .select(mediaAssetSelect)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    throw error;
  }

  return (data ?? []) as MediaAssetRecord[];
};
