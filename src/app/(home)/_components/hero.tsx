"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText("#title", { type: "chars, words" });
    const paragraphSplit = new SplitText("#subtitle", { type: "lines" });

    // heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.02,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div id="hero">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-start gap-8 relative">
        <div className=" space-y-6">
          <h1
            id="title"
            className=" text-3xl/relaxed md:text-5xl/relaxed font-bold text-yellow-vibe  font-boldonse text-main-yellow"
          >
            Junior Software Developer
          </h1>
          <p
            id="subtitle"
            className="text-xl  max-w-6xl font-primary font-normal"
          >
            Front-end focus Full-Stack developer with over 1 year of experience. Also have experience in freelancing and contract-based work with a
few agencies/indie devs. Engaged in small Open Source Contributions. Experienced in cross-team collaboration and client communication
            {/* Hi, {`i'm`} Md Kawsar Islam Yeasin. I am a front-end focused Full
            Stack web developer. TypeScript and Nextjs enthusiast. I have been
            doing freelance project from last 1 year and working with teams to
            make good projects */}
          </p>

          <div className="flex gap-x-4 gap-y-8 flex-col md:flex-row ">
            <a
              href={"/yeasin2002.pdf"}
              download={"yeasin2002"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn BoldStockBtn "
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn BoldStockBtn bg-zinc-900 hover:bg-zinc-800 z-40 text-white"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        className="absolute inset-0 pointer-events-none max-h-[55vh]"
      />
    </div>
  );
};
