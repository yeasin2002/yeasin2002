"use client";



export function LenisWrapper({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    console.log(scroll);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
