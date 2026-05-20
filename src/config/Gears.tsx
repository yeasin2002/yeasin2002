import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'Huawei MateBook D16 16GB RAM 512GB SSD',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'DESKTOP-CM0MML7 12th Gen Intel(R) Core(TM) i5-12400 (2.50 GHz) 16.0 GB (15.8 GB usable)',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'Magic Keyboard',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Logitech MX Master 3S Mouse',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'Crossbeats Roar 2.0 (Special Addition)',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'Pixel 4a (6GB RAM 128GB Storage)',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'Unhook', href: 'https://unhook.app/' },
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  // {
  //   name: 'ColorZilla',
  //   href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  // },
  {
    name: 'Redux DevTools',
    href: 'https://chromewebstore.google.com/detail/redux-devtools/lmhkpmdpjhnlmmfddppnefddmchfmpcn?hl=en',
  },
  {
    name: "Temp Mail",
    href: "https://temp-mail.org/en/"
  },
  {
    name: "Mobile simulator",
    href: "https://mobile-simulator.vercel.app/"
  },
  {
    name: "Fake filler",
    href: "https://fakefiller.com/"
  }
];

export const software = [
  // { name: 'Dia', href: 'https://www.diabrowser.com/' },
  { name: 'Cursor', href: 'https://cursor.sh/' },
  { name: 'Antigravity', href: 'https://antigravity.ai/' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'TickTick', href: 'https://ticktick.com/download' },
  { name: 'OBS Studio', href: 'https://obsproject.com/' },
  { name: 'VLC', href: 'https://www.videolan.org/vlc/' },
  // { name: 'Ghostty', href: 'https://ghostty.org/' },
];
