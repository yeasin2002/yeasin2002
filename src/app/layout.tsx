import { siteConfig } from '@/config/meta.config';
import { FONTS_LIST } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import ReactLenis from 'lenis/react';
import type { Metadata } from 'next';

import './globals.css';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn('h-full antialiased font-sans', FONTS_LIST)}>
      <ReactLenis root>
        <body className="min-h-full flex flex-col font-sans">{children}</body>
      </ReactLenis>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.author.twitter,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
