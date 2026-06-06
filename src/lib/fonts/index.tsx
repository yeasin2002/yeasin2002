import localFont from 'next/font/local';

const hankenGrotesk = localFont({
  src: './local/HankenGrotesk-Variable.ttf',
  display: 'swap',
  variable: '--font-hanken-grotesk',
});

const hankenGroteskItalic = localFont({
  src: './local/HankenGrotesk-Italic-Variable.ttf',
  display: 'swap',
  variable: '--font-hanken-grotesk-italic',
});

const boldonse = localFont({
  src: './local/Boldonse.ttf',
  display: 'swap',
  variable: '--font-boldonse',
  weight: '400',
});

const fontList = [hankenGrotesk, hankenGroteskItalic, boldonse];

export const fontVariables = fontList.map((font) => font.variable).join(' ');
