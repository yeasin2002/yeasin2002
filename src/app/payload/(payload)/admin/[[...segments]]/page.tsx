import configPromise from '@payload-config';
import { RootPage } from '@payloadcms/next/views';

import { importMap } from '../../admin/importMap.js';

type Props = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
};

export default function Page({ params, searchParams }: Props) {
  return RootPage({
    config: configPromise,
    importMap,
    params,
    searchParams,
  });
}
