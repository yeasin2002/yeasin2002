import React from "react";
import ProjectCard from "./ProjectCard";
import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  ProjectImage: StaticImageData;
  id: number;
}

const ProjectDetails = ({ ProjectImage, id, name }: Props) => {
  return (
    <div>
      {/* <ProjectCard name={name} ProjectImage={ProjectImage} id={id} /> */}

      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <Image
          src={ProjectImage}
          alt={name}
          className="w-full h-full  bg-center bg-cover rounded-lg shadow-md"
        ></Image>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase ">
            Nike Revolt
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 ">
            <span className="font-bold text-gray-800 ">$129</span>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700  focus:bg-gray-700  focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
