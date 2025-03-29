import { Footer, Hero } from "@/sections";
import ProjectNext from "@/sections/projects/ProjectNext";
import Skills from "@/sections/Skills/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Skills />
      <ProjectNext />
      <Footer />
    </div>
  );
}
