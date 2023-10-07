import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      //   @ts-ignore
      direction: "vertical",
      smooth: true,
    });

    function raf(time: FrameRequestCallback) {
      lenis.raf(time);
      //   @ts-ignore
      requestAnimationFrame(raf);
    }
    //   @ts-ignore
    requestAnimationFrame(raf);
  }, []);
};
