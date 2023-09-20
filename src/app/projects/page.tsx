import FoldText from "@/components/Unique/Buttons/FoldText/FoldText";
import LiyaxuInput from "@/components/Unique/Input/liyaxuInput";
import projectData from "@/data/Projects/projectData";
import NextProjectCard from "@/pages/ProjectNext/NextProjectCard";
import Link from "next/link";

const page = () => {
  return (
    <main className=" h-full w-full py-10">
      <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-2 justify-between">
        <div className="order-last md:order-first">
          <h1 className="text-2xl text-teal-500 font-bold">Projects</h1>
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
        <LiyaxuInput />
      </div>

      <div className="@container mt-10">
        <div className="grid grid-cols-1  gap-x-3 gap-y-4 lg:grid-cols-2 ">
          {projectData.map((value) => {
            return (
              <>
                <NextProjectCard
                  key={value.id}
                  ProjectImage={value.ProjectImage}
                  id={value.id}
                  name={value.name}
                  gitHubLink={value.gitHubLink}
                  liveLink={value.liveLink}
                  tag={value.tag}
                  description={value.description}
                  isTranslate={false}
                />
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default page;
