"use client";

import Image from "next/image";
import errorPage from "@/assets/not-foundAndErrorAndLoading/error.jpg";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col md:flex-row w-full  items-center justify-between h-screen gap-x-20 px-6 md:px-2 pt-20">
      <div className="  ring-4 ring-paste/30 rounded-full overflow-hidden">
        <Image
          src={errorPage}
          alt="Yeasin"
          className="w-full h-full aspect-square  md:aspect-video"
        />
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
          404
        </p>
        <h1 className=" text-2xl font-semibold text-red-800 my-3 dark:text-white md:text-3xl">
          Error
        </h1>
        <p className="mt-4 text-gray-300 00">
          Something went wrong. Please try again later.
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
