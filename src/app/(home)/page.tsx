import {
  Contact,
  DetailsBento,
  Footer,
  Hero,
  Projects,
  Skills,
} from "./_components";
import { detailsAboutMe } from "./_data/";

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