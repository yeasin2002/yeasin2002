import { PlusMini } from "@/components/Icons";
import React from "react";

interface Props extends React.ComponentProps<"div"> {
  data: {
    label: string;
    description: string;
  }[];
}

export const DetailsBento = ({ data }: Props) => {
  return (
    <>
      <div className="container mx-auto overflow-x-hidden">
        <div className="grid bento-grid grid-cols-1 md:grid-cols-3 border border-gray-800 relative  mt-6">
          {data.map((feature, index) => (
            <div className="p-8  relative" key={index}>
              <div className="flex items-center gap-2 mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">{feature.label}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              {/*
              <a
                href={`/${feature.collection}/${feature.slug}`}
                className="text-gray-400 hover:text-white"
              >
                Learn more
              </a>    
                 */}

              {(index === 0 || index === 1 || index === 3 || index === 4) && (
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <PlusMini />
                  </div>
                </div>
              )}

              {(index === 0 || index === 1 || index === 2) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <PlusMini />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
