import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { DM_Sans, Geist, Instrument_Serif } from 'next/font/google';

import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'Md Kawsar Islam Yeasin — Software Developer & Product Engineer',
  description:
    'Front-end-focused full-stack software developer building scalable, responsive, and high-performance web & mobile applications with modern technologies and clean craft.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        dmSans.variable,
        instrumentSerif.variable,
        'font-sans',
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
