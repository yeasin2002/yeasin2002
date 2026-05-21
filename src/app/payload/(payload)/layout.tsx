import configPromise from '@payload-config';
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts';
import type { ServerFunctionClient } from 'payload';
import type { ReactNode } from 'react';

import { importMap } from './admin/importMap.js';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <RootLayout
      config={configPromise}
      importMap={importMap}
      serverFunction={handleServerFunctions as unknown as ServerFunctionClient}
    >
      {children}
    </RootLayout>
  );
}
