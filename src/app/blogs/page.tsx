"use client";

import progressBar from "$assets/3d/ProgressBar.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Blogs = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-300 ">
        Coming Soon
      </h1>
      <Image src={progressBar} alt="progressBar" className="w-1/2" />
    </div>
  );
};
export default Blogs;
