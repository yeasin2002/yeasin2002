import '@/app/global.css';
import { fontVariables } from "@/fonts";
import { cn } from "@/lib";
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className={cn("flex flex-col min-h-screen", fontVariables)}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
