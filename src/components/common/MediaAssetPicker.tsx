'use client';

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox';
import { cn } from '@/lib/utils';
import type { MediaAssetOption } from '@/lib/media';
import Image from 'next/image';
import { useRef } from 'react';

interface MediaAssetPickerProps {
  assets: MediaAssetOption[];
  className?: string;
  disabled?: boolean;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
}

export function MediaAssetPicker({
  assets,
  className,
  disabled = false,
  label,
  onChange,
  placeholder = 'Search saved images...',
  value,
}: MediaAssetPickerProps) {
  const portalContainerRef = useRef<HTMLDivElement | null>(null);
  const selectedAsset = assets.find((asset) => asset.value === value) ?? null;

  return (
    <div ref={portalContainerRef} className={cn('space-y-2', className)}>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Search by title, file name, alt text, or tags.
          </p>
        </div>
        {selectedAsset && (
          <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
            Selected: {selectedAsset.asset.file_name}
          </p>
        )}
      </div>

      <Combobox
        value={selectedAsset}
        onValueChange={(nextValue) => onChange(nextValue?.value ?? '')}
        filter={(item, query) => {
          const searchQuery = query.trim().toLowerCase();

          if (!searchQuery) {
            return true;
          }

          const candidateText = [item.searchText, item.label].join(' ').toLowerCase();

          return candidateText.includes(searchQuery);
        }}
        isItemEqualToValue={(item, currentValue) => item.value === currentValue.value}
      >
        <ComboboxInput
          showTrigger
          showClear
          disabled={disabled}
          placeholder={placeholder}
          className="w-full"
        />
        <ComboboxContent container={portalContainerRef}>
          <ComboboxList>
            <ComboboxEmpty>No saved images found.</ComboboxEmpty>
            {assets.map((asset) => (
              <ComboboxItem key={asset.value} value={asset}>
                <span className="flex w-full items-center gap-3">
                  <Image
                    src={asset.asset.publicUrl}
                    alt={asset.label}
                    width={40}
                    height={40}
                    className="size-10 rounded-lg object-cover"
                  />
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate font-medium">{asset.label}</span>
                    <span className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                      {asset.asset.file_name}
                    </span>
                  </span>
                </span>
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
