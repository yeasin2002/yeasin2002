"use client";

import React from "react";
import Tilty from "react-tilty";

import { Highlight, themes } from "prism-react-renderer";
import { AboutString } from "../../lib/AboutMeFuncString";

// assets
import bloods from "@/assets/bloobs/Rings.svg";
import Image from "next/image";

const AboutCode = () => {
  return (
    <>
      <Tilty
        max={10}
        reverse={false}
        speed={100}
        maxGlare={1}
        className=" md:p   x-0  relative mt-6 inline-block overflow-x-hidden rounded-lg text-xs sm:mx-24 sm:text-sm md:mx-0  md:h-full md:text-sm xl:mx-3 xl:mt-0 xl:text-2xl"
        style={{
          background: `rgba(255,255,255,.01)`,
          boxShadow: "0 25px 45px rgba(0,0,0,.2)",
          backdropFilter: `blur(5px)`,
        }}
      >
        <Highlight theme={themes.okaidia} code={AboutString} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="inline-block bg-transparent">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <div>
          <Image
            src={bloods}
            alt="icons"
            className=" pointer-events-none absolute bottom-0 right-0 "
          />
        </div>
      </Tilty>
    </>
  );
};
export default AboutCode;
