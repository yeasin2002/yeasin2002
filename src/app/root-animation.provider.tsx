"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const RootAnimation = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    // fade animate
    gsap.utils.toArray<HTMLElement>(".animate-fade").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 75 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    });

    // fade-side
    gsap.utils.toArray<HTMLElement>(".animate-fade-side").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    });
  }, []);

  return children;
};
