"use client"

import { CalistogaFont, } from "@/utils/GoogleFonts";
import { Typewriter } from "react-simple-typewriter";

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface  TypeEffectProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

 const  TypeEffect: FC< TypeEffectProps> = ({ ...rest }) => {
    return <span className={CalistogaFont.className} {...rest}>
                  <Typewriter
                    words={["Technology", "Software", "Coding", "Business", "Finance", "Ideas"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={20}
                    delaySpeed={1000}
                    // onLoopDone={
                    // onType={
                  />
                </span>

}
export default TypeEffect