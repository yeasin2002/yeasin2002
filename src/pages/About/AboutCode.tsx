import React from "react";
import { Tilt } from "react-tilt";

import AboutString from "./AboutMeFuncString";

//  syntax highlighter
import { Highlight, themes } from "prism-react-renderer";

// assets
import bloods from "@/assets/bloobs/Rings.svg";
import Image from "next/image";
import Round from "@/components/Icons/Round";

const AboutCode = () => {
  const tiltOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 100, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99.5)", // Easing on enter/exit.
    glare: true,
    "max-glare": "1",
  };
  return (
    <Tilt
      options={tiltOptions}
      className=" sm:text-base md:text-lg relative overflow-hidden text-xs rounded-lg"
      style={{
        background: `rgba(255,255,255,.01)`,
        boxShadow: "0 25px 45px rgba(0,0,0,.2)",
        backdropFilter: `blur(5px)`,
      }}
    >
      <Highlight theme={themes.okaidia} code={AboutString} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className="bg-transparent">
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
      {/* <pre>{AboutString}</pre> */}
      <div>
        <Image
          src={bloods}
          alt="icons"
          className=" absolute bottom-0 right-0"
        />
      </div>
    </Tilt>
  );
};
export default AboutCode;

// style=
//
// background: `rgba(255,255,255,.1)`
// boxShadow: "0 25px 45px rgba(0,0,0,.2)"
// backdropFilter: `blur(5px)`
//
//
