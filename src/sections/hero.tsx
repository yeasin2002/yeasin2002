import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-start gap-8 relative">
        <div className=" space-y-6">
          <h1 className=" text-3xl/relaxed md:text-5xl/relaxed font-bold text-yellow-vibe  font-boldonse text-main-yellow">
            Junior Software Developer
          </h1>
          <p className="text-xl  max-w-6xl font-primary font-normal">
            Hi, {`i'm`} Md Kawsar Islam Yeasin. I am a front-end focused Full
            Stack web developer. TypeScript and Nextjs enthusiast. I have been
            doing freelance project from last 1 year and working with teams to
            make good projects
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
