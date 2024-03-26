"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export function LenisWrapper({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    console.log(scroll);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
