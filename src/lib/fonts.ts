import { DM_Sans, Geist, Instrument_Serif } from 'next/font/google';

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

export const FONTS = [geist, dmSans, instrumentSerif] as const;

export const FONTS_LIST = FONTS.map((font) => font.variable).join(' ');
