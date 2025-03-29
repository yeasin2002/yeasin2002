import { Contact, Hero } from "@/sections";
import ProjectNext from "@/sections/projects/ProjectNext";
import Skills from "@/sections/Skills/Skills";

import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="2xl:container">
      <Hero />
      <Skills />
      <ProjectNext />
      <Contact />
      <Toaster />
    </div>
  );
}
