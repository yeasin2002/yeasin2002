import { detailsAboutMe } from "@/data/details-aboutme";
import {
  Contact,
  DetailsBento,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@/sections";

export default function HomePage() {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col justify-evenly">
        <Hero />
        <DetailsBento data={detailsAboutMe} />
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
