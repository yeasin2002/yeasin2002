'use client';

import yeasinSticker from '@/assets/yeasin-sticker.png';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <header
        className={`header ${hidden && !menuOpen ? 'hide' : ''}`}
        id="header"
      >
        <Link
          href="#top"
          aria-label="Md Kawsar Islam Yeasin"
          className="flex items-center gap-2.5 group"
          onClick={closeMenu}
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-foreground/20 bg-amber-50 flex-shrink-0">
            <Image
              src={yeasinSticker}
              alt="Md Kawsar Islam Yeasin"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex items-center gap-1.5 font-bold tracking-tight">
            <span className="text-foreground tracking-[-0.04em] text-sm md:text-base font-extrabold">
              YEASIN
            </span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-full bg-foreground/10 text-foreground font-semibold tracking-wider">
              .DEV
            </span>
          </div>
        </Link>

        <nav aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="mailto:mdkawsarislam2002@gmail.com">
          Get in touch <b>↗</b>
        </a>

        <SheetTrigger
          render={
            <button
              className="menu flex md:hidden cursor-pointer bg-transparent border-0 items-center justify-center p-2 -mr-1"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            />
          }
        >
          <div className="flex flex-col items-end justify-center gap-[6px] w-[26px] py-1">
            <span
              className={`block h-[2px] bg-foreground transition-all duration-300 ${
                menuOpen ? 'w-[24px]' : 'w-[26px]'
              }`}
            />
            <span
              className={`block h-[2px] bg-foreground transition-all duration-300 ${
                menuOpen ? 'w-[24px]' : 'w-[26px]'
              }`}
            />
          </div>
        </SheetTrigger>
      </header>

      <SheetContent
        side="top"
        showCloseButton={false}
        className="fixed inset-0 z-[950] h-dvh w-screen max-w-none border-none bg-[#f7f4ed] p-0 flex flex-col justify-center px-[8vw] md:hidden transition-transform duration-500 ease-out data-[side=top]:inset-0 data-[side=top]:h-dvh data-[side=top]:border-none data-[side=top]:data-starting-style:translate-y-[-100%] data-[side=top]:data-ending-style:translate-y-[-100%]"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Mobile navigation links
        </SheetDescription>

        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-5 sm:gap-6 justify-center py-16"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-[38px] sm:text-[48px] font-bold tracking-[-0.05em] text-foreground leading-[1.1] hover:opacity-70 transition-opacity w-fit"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-[38px] sm:text-[48px] font-bold tracking-[-0.05em] text-foreground leading-[1.1] hover:opacity-70 transition-opacity w-fit text-primary"
          >
            Contact
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
