import palestineImg from "@/assets/avatar/palestine.svg";
import { KellySlabFont } from "@/utils/GoogleFonts";
import Image from "next/image";
import { FC, HtmlHTMLAttributes } from "react";

interface FreePalestineProps extends HtmlHTMLAttributes<HTMLDivElement> {}
const FreePalestine: FC<FreePalestineProps> = ({ ...rest }) => {
  return (
    <div
      className="absolute top-0 flex items-center justify-center gap-x-4  "
      {...rest}
    >
      <p className={`text-gray-200 ${KellySlabFont.className}`}>
        Stand with Palestine
      </p>
      <Image src={palestineImg} alt="palestineImg" className="w-10 h-10" />
      <p className="text-blue-400 ">#FreePalestine</p>
    </div>
  );
};

export default FreePalestine;
