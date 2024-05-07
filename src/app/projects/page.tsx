"use client";

import Link from "next/link";
import { useState } from "react";

import { Meteors } from "$components/aceternity";
import FoldText from "@/components/Unique/Buttons/FoldText/FoldText";
import LiyaxuInput from "@/components/Unique/Input/liyaxuInput";
import projectData from "@/data/Projects/projectData";
import NextProjectCard from "@/sections/ProjectNext/NextProjectCard";

const AllProjects = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredProjects =
    projectData.filter((project) =>
      project?.name?.toLowerCase().includes(searchValue.toLowerCase())
    ) || ([] as typeof projectData);

  return (
    <main className=" h-full min-h-screen px-1 py-10 sm:px-2 md:px-4">
      <Meteors number={20} />
      <div className="flex flex-col justify-between gap-y-6 md:flex-row md:gap-x-2">
        <div className="order-last md:order-first">
          <h1 className="silver-text text-3xl font-bold">Projects</h1>
          <p className="text-xl font-semibold text-gray-500">
            Here is my all projects
          </p>
        </div>
        <Link href={"/"} className="inline-block">
          <FoldText>
            <p>Go Back</p>
          </FoldText>
        </Link>
      </div>
      <div className="mt-8">
        <LiyaxuInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      <div className="@container mt-10">
        <div className="grid grid-cols-1  gap-x-3 gap-y-4 lg:grid-cols-2 ">
          {filteredProjects?.map((value, index) => {
            return (
              <NextProjectCard
                key={crypto.randomUUID()}
                ProjectImage={value.ProjectImage}
                id={index}
                name={value.name}
                gitHubLink={value.gitHubLink}
                liveLink={value.liveLink}
                tag={value.tag}
                description={value.description}
                isTranslate={false}
                notes={value.notes}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default AllProjects;
