import Image from "next/image";
import Link from "next/link";

import notFoundImg from "@/assets/not-foundAndErrorAndLoading/notFound.jpg";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center  justify-between px-5 py-12 md:flex-row lg:px-11">
      <div>
        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
          404
        </p>
        <h1 className=" my-3 text-2xl font-semibold text-red-800 dark:text-white md:text-3xl">
          Can Not Found
        </h1>
        <p className="00 mt-4 text-gray-300">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          <br /> mistyped the URL? Be sure to check your spelling.
        </p>
        wa
        <div className="mt-6 flex items-center gap-x-3">
          <Link
            href={"/"}
            className="flex w-1/2 shrink-0 items-center gap-x-2 rounded-lg  bg-blue-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto "
          >
            <ArrowLeft />
            Take me home
          </Link>
        </div>
      </div>
      <div className="order-first h-60 w-60 overflow-hidden rounded-full ring-4 ring-paste/30 md:order-last  md:h-96 md:w-96">
        <Image src={notFoundImg} alt="Yeasin" className="h-full w-full" />
      </div>
    </section>
  );
};

export default NotFoundPage;
