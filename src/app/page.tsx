import ProjectNext from "@/sections/ProjectNext/ProjectNext";
import Skills from "@/sections/Skills/Skills";
import Contact from "@/sections/contact/Contact";

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
