import { baseOptions } from '@/app/layout.config';
import { RootMetadata } from "@/config/rootMetaData";
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}

export { RootMetadata as metadata };
