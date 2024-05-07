import Link from "next/link";
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { robotoSlab } from "@/utils/GoogleFonts";
import { RiMenu3Fill } from "react-icons/ri";
import { navItems } from "./Nav";

interface MobileNavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const MobileNav: FC<MobileNavProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <Popover>
        <PopoverTrigger className="cursor-pointer rounded-full bg-gray-100   p-2 text-lg font-semibold transition-all hover:bg-gray-200">
          <RiMenu3Fill className="text-slate-950 " />
        </PopoverTrigger>
        <PopoverContent className="relative -left-5 top-5 flex w-40 flex-col">
          {navItems.map((val) => {
            return (
              <Link
                key={val.title + val.url}
                className="flex items-center gap-x-1 border-b   border-transparent  p-2   text-lg font-semibold text-gray-800 transition-all  hover:border-teal-700 hover:text-gray-600"
                href={val.url}
              >
                <p className={cn("font-bold", robotoSlab.className)}>
                  {" "}
                  {val.title}
                </p>
              </Link>
            );
          })}
        </PopoverContent>
      </Popover>
    </div>
  );
};
