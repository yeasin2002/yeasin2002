import { detailsAboutMe } from "@/data/details-aboutme";
import { DetailsBento, Footer, Hero } from "@/sections";
import ProjectNext from "@/sections/projects/ProjectNext";
import Skills from "@/sections/Skills/Skills";

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col justify-evenly">
        <Hero />
        <DetailsBento data={detailsAboutMe} />
      </div>
      <Skills />
      <ProjectNext />
      <Footer />
    </div>
  );
}
