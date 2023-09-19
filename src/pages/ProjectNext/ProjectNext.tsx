import Link from "next/link";
import React from "react";

const ProjectNext = () => {
  return (
    <section id="projects" className="eachName grid grid-cols-2">
      <div className="px-4 py-8">
        <h2 className="text-sup font-bold text-2xl">All Creative Works</h2>
        <p className="text-gray-300 text-xl">
          {"Here's"} some of my projects that I have worked on.
        </p>

        <Link
          className="mt-3 text-lg text-teal-600 font-semibold"
          href={"projects"}
        >
          Explore more
        </Link>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default ProjectNext;
