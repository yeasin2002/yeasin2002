import fiverLogo from "@/assets/icons/others/Fiverr_white.svg";
import Image from "next/image";

export const HireMe = ({ ...props }) => {
  return (
    <a
      href={"https://www.fiverr.com/yeasindev2002"}
      target="_blank"
      className="flex items-end justify-center  rounded-full  bg-[#14ee96] px-4  text-black py-1 gap-x-2 ring-3 ring-[#83f6c7]"
      {...props}
    >
      <span className="font-bold text-xl ">Hire Me</span>
      <Image src={fiverLogo} alt="Fiver" className="size-10" />
    </a>
  );
};
