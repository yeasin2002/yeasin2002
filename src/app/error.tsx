"use client";

import Image from "next/image";
import errorPage from "@/assets/not-foundAndErrorAndLoading/error.jpg";

const NotFoundPage = () => {
  return (
    <section className="flex h-screen w-full flex-col  items-center justify-between gap-x-20 px-6 pt-20 md:flex-row md:px-2">
      <div className="  overflow-hidden rounded-full ring-4 ring-paste/30">
        <Image
          src={errorPage}
          alt="Yeasin"
          className="aspect-square h-full w-full  md:aspect-video"
        />
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
          404
        </p>
        <h1 className=" my-3 text-2xl font-semibold text-red-800 dark:text-white md:text-3xl">
          Error
        </h1>
        <p className="00 mt-4 text-gray-300">
          Something went wrong. Please try again later.
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
