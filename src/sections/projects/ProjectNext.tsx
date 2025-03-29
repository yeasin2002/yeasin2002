import Link from "next/link";
import { useId } from "react";

import Revel from "@/components/Globals/Revel";
import OverText from "@/components/Unique/Buttons/OverText/OverText";
import projectData from "@/data/projectData";

import NextProjectCard from "./NextProjectCard";

const ProjectNext = () => {
  return (
    <section
      id="projects"
      className="sections-container grid grid-cols-1 gap-4  py-32  md:gap-x-6 lg:grid-cols-2  xl:gap-x-10 xl:gap-y-8  2xl:gap-10 "
    >
      <Revel
        className="px-4 py-8"
        customVariants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2
          className={` font-boldonse text-2xl font-extrabold 2xl:text-3xl text-main-yellow`}
        >
          All Creative Works
        </h2>
        <p className={`mb-6 text-xl text-gray-300 2xl:text-2xl `}>
          {"Here's"} some of my projects that I have worked on.
        </p>

        <Link href={"projects"}>
          <OverText className="mt-5" text="Explore_More" />
        </Link>
      </Revel>
      {/*  other dynamic grid colum */}
      {projectData.slice(0, 3).map((value, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const id = useId();
        return (
          <NextProjectCard
            key={id}
            ProjectImage={value.ProjectImage}
            id={index}
            name={value.name}
            gitHubLink={value.gitHubLink}
            liveLink={value.liveLink}
            tag={value.tag}
            description={value.description}
            isTranslate={true}
          />
        );
      })}
    </section>
  );
};

export default ProjectNext;
