'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  MEDIA_BUCKET,
  type MediaAsset,
  buildMediaObjectPath,
  fetchMediaAssets,
  hashFile,
  isImageFile,
  mediaAssetSelect,
  parseMediaTags,
  toMediaAsset,
} from '@/lib/media';
import { createClient } from '@/lib/supabase/client';
import {
  Copy,
  ImageIcon,
  Loader2,
  RefreshCcw,
  Search,
  Upload,
} from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';

const formatBytes = (sizeBytes: number) => {
  if (sizeBytes < 1024) {
    return `${sizeBytes} B`;
  }

  if (sizeBytes < 1024 * 1024) {
    return `${(sizeBytes / 1024).toFixed(1)} KB`;
  }

  return `${(sizeBytes / (1024 * 1024)).toFixed(1)} MB`;
};

const getUploadErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Unable to upload media.';

export function MediaLibraryManager() {
  const supabase = useMemo(() => createClient(), []);
  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [title, setTitle] = useState('');
  const [altText, setAltText] = useState('');
  const [tags, setTags] = useState('');

  const loadAssets = useCallback(async () => {
    setIsLoading(true);

    try {
      const records = await fetchMediaAssets(supabase, 200);
      setAssets(records.map((record) => toMediaAsset(supabase, record)));
    } catch (error) {
      toast.error(getUploadErrorMessage(error));
      setAssets([]);
    } finally {
      setIsLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    void loadAssets();
  }, [loadAssets]);

  const filteredAssets = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return assets;
    }

    return assets.filter(
      (asset) =>
        asset.searchText.includes(normalizedQuery) ||
        asset.displayLabel.toLowerCase().includes(normalizedQuery),
    );
  }, [assets, searchQuery]);

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('Please choose an image to upload.');
      return;
    }

    if (!isImageFile(selectedFile)) {
      toast.error('Only image files are supported.');
      return;
    }

    setIsUploading(true);

    try {
      const contentHash = await hashFile(selectedFile);
      const nextTags = parseMediaTags(tags);
      const existingAssetResponse = await supabase
        .from('media_assets')
        .select(mediaAssetSelect)
        .eq('content_hash', contentHash)
        .maybeSingle();

      if (existingAssetResponse.error) {
        throw existingAssetResponse.error;
      }

      if (existingAssetResponse.data) {
        const nextAsset = toMediaAsset(supabase, existingAssetResponse.data);

        setAssets((currentAssets) => [
          nextAsset,
          ...currentAssets.filter((asset) => asset.id !== nextAsset.id),
        ]);
        toast.success('That image already existed, so we reused it.');
      } else {
        const objectPath = buildMediaObjectPath(contentHash, selectedFile.name);
        const uploadResponse = await supabase.storage
          .from(MEDIA_BUCKET)
          .upload(objectPath, selectedFile, {
            contentType: selectedFile.type,
            upsert: false,
          });

        if (uploadResponse.error) {
          throw uploadResponse.error;
        }

        const { data: insertedAsset, error: insertError } = await supabase
          .from('media_assets')
          .insert({
            alt: altText.trim(),
            bucket_id: MEDIA_BUCKET,
            content_hash: contentHash,
            file_name: selectedFile.name,
            mime_type: selectedFile.type,
            object_path: objectPath,
            size_bytes: selectedFile.size,
            tags: nextTags,
            title: title.trim(),
          })
          .select(mediaAssetSelect)
          .single();

        if (insertError) {
          await supabase.storage.from(MEDIA_BUCKET).remove([objectPath]);
          throw insertError;
        }

        const nextAsset = toMediaAsset(supabase, insertedAsset);
        setAssets((currentAssets) => [nextAsset, ...currentAssets]);
        toast.success('Image uploaded successfully.');
      }

      setSelectedFile(null);
      setFileInputKey((currentKey) => currentKey + 1);
      setTitle('');
      setAltText('');
      setTags('');
    } catch (error) {
      toast.error(getUploadErrorMessage(error));
    } finally {
      setIsUploading(false);
    }
  };

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    toast.success('Copied to clipboard.');
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Media Library
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Upload once, reuse everywhere
            </h1>
            <p className="max-w-2xl text-neutral-500 dark:text-neutral-400">
              Store reusable logos, screenshots, and images in Supabase Storage,
              then search them by title, filename, alt text, or tags from
              anywhere in the dashboard.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-950/60">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
              Bucket
            </p>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">
              {MEDIA_BUCKET}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <Card className="gap-0 overflow-hidden">
          <CardHeader className="border-b border-neutral-100 dark:border-neutral-800">
            <CardTitle>Upload image</CardTitle>
            <CardDescription>
              Upload a new image or reuse an existing one by its hash.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="media-file">Image file</Label>
              <Input
                key={fileInputKey}
                id="media-file"
                type="file"
                accept="image/*"
                onChange={(event) =>
                  setSelectedFile(event.target.files?.[0] ?? null)
                }
                className="rounded-xl"
              />
              {selectedFile && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {selectedFile.name} · {formatBytes(selectedFile.size)}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="media-title">Title</Label>
              <Input
                id="media-title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="e.g. Techfosys logo"
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="media-alt">Alt text</Label>
              <Input
                id="media-alt"
                value={altText}
                onChange={(event) => setAltText(event.target.value)}
                placeholder="e.g. Techfosys logo on a dark background"
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="media-tags">Tags</Label>
              <Input
                id="media-tags"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                placeholder="logo, company, dark"
                className="rounded-xl"
              />
            </div>

            <Button
              type="button"
              onClick={() => void handleUpload()}
              disabled={isUploading}
              className="flex h-11 w-full items-center gap-2 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700"
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Upload Image
                </>
              )}
            </Button>

            <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-4 py-3 text-xs text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400">
              Exact duplicate files are reused automatically, so you can upload
              a file once and keep selecting it later.
            </div>
          </CardContent>
        </Card>

        <Card className="gap-0 overflow-hidden">
          <CardHeader className="border-b border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Recent uploads</CardTitle>
                <CardDescription>
                  Search and copy public URLs or storage paths.
                </CardDescription>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative min-w-0 sm:w-72">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                  <Input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search images..."
                    className="h-10 rounded-xl pl-9"
                  />
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => void loadAssets()}
                  className="size-10 rounded-xl"
                >
                  <RefreshCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            {isLoading ? (
              <div className="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-neutral-200 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                Loading media...
              </div>
            ) : filteredAssets.length === 0 ? (
              <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 px-6 text-center dark:border-neutral-800">
                <ImageIcon className="h-10 w-10 text-neutral-400" />
                <p className="mt-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  No media found
                </p>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  Try a different search term or upload your first image.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredAssets.map((asset) => (
                  <Card
                    key={asset.id}
                    className="gap-0 overflow-hidden border-neutral-200 shadow-none dark:border-neutral-800"
                  >
                    <div className="relative aspect-square bg-neutral-100 dark:bg-neutral-800">
                      <Image
                        src={asset.publicUrl}
                        alt={asset.alt || asset.displayLabel}
                        fill
                        sizes="(max-width: 1280px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="space-y-3 p-4">
                      <div className="space-y-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate font-semibold text-neutral-900 dark:text-neutral-100">
                              {asset.displayLabel}
                            </p>
                            <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                              {asset.file_name}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="shrink-0 rounded-full"
                          >
                            {formatBytes(asset.size_bytes)}
                          </Badge>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {asset.mime_type || 'image/*'} ·{' '}
                          {new Date(asset.created_at).toLocaleDateString()}
                        </p>
                      </div>

                      {asset.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {asset.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="rounded-full text-[11px]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Input
                            readOnly
                            value={asset.publicUrl}
                            className="h-9 rounded-xl text-xs"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => void handleCopy(asset.publicUrl)}
                            className="size-9 rounded-xl"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input
                            readOnly
                            value={asset.object_path}
                            className="h-9 rounded-xl text-xs"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => void handleCopy(asset.object_path)}
                            className="size-9 rounded-xl"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator className="bg-neutral-200 dark:bg-neutral-800" />
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        To reference an uploaded image anywhere else in the dashboard, use the
        public URL from this library.
      </p>
    </div>
  );
}
