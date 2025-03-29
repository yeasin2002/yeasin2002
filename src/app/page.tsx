import { Hero } from "@/sections";
import ProjectNext from "@/sections/projects/ProjectNext";
import Skills from "@/sections/Skills/Skills";

import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="2xl:container mx-auto">
      <Hero />
      <Skills />
      <ProjectNext />
      <Toaster />
    </div>
  );
}
