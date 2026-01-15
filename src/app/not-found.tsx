import notFoundImage from "@/assets/images/404-image.webp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RootNotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <Image
            src={notFoundImage}
            alt="404 - Page not found"
            className="w-full h-auto"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why are you here?
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          {`You're`} not supposed to be here
        </p>

        <Link
          href="/"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default RootNotFound;
