import Image from "next/image";
import Link from "next/link";

import notFoundImg from "@/assets/not-foundAndErrorAndLoading/notFound.jpg";
import { ArrowLeft } from "lucide-react";



const NotFoundPage = () => {
  return (
    <section className="flex w-full flex-col md:flex-row py-12  items-center justify-between h-screen px-5 lg:px-11">
      <div>
        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404</p>
        <h1 className=" text-2xl font-semibold text-red-800 my-3 dark:text-white md:text-3xl">Can Not Found</h1>
        <p className="mt-4 text-gray-300 00">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          <br /> mistyped the URL? Be sure to check your spelling.
        </p>
        wa
        <div className="flex items-center mt-6 gap-x-3">
          <Link
            href={"/"}
            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white  transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 flex gap-x-2 items-center "
          >
          <ArrowLeft/>
            Take me home
          </Link>
        </div>
      </div>
      <div className="md:w-96 md:h-96 w-60 h-60 ring-4 ring-paste/30 rounded-full overflow-hidden  order-first md:order-last">
        <Image src={notFoundImg} alt="Yeasin" className="w-full h-full" />
      </div>
    </section>
  );
};

export default NotFoundPage;
