"use client";

import { CalistogaFont, PragatiNarrowFont } from "@/utils/GoogleFonts";
import { Typewriter } from "react-simple-typewriter";

import { cn } from "$lib/utils";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface TypeEffectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const TypeEffect: FC<TypeEffectProps> = ({ ...rest }) => {
  return (
    <p
      className={cn(
        "    mb-4 w-full text-center text-lg text-blue-200 xl:my-7 2xl:my-10",
        CalistogaFont.className,
      )}
      {...rest}
    >
      <span className={PragatiNarrowFont.className}>
        Loves to talk about &nbsp;
      </span>
      <Typewriter
        words={[
          "Technology",
          "Software",
          "Coding",
          "Business",
          "Finance",
          "Ideas",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={20}
        delaySpeed={1000}
        // onLoopDone={
        // onType={
      />
    </p>
  );
};
export default TypeEffect;
