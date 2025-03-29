import Contact from "@/sections/contact/Contact";
import ProjectNext from "@/sections/projects/ProjectNext";
import Skills from "@/sections/Skills/Skills";

import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="2xl:container">
      <Skills />
      <ProjectNext />
      <Contact />
      <Toaster />
    </div>
  );
}
