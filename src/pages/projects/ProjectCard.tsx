import Image, { StaticImageData } from "next/image";
import React from "react";
import { projectTypes } from "@/data/Projects/projectData";

// interface valueProps {
//   name: string;
//   Image: StaticImageData;
// }

const ProjectCard = ({ name, ProjectImage, id }: projectTypes) => {
  return (
    <div className=" group relative">
      <div className=" h-72 inline-block w-full">
        <Image src={ProjectImage} alt={name} className="w-full h-full" />
      </div>
      {/* <div className="h-2/5 group-hover:block bg-slate-50/30 absolute bottom-0 left-0 hidden w-full transition-all">
        {name}
      </div> */}
    </div>
  );
};
export default ProjectCard;
