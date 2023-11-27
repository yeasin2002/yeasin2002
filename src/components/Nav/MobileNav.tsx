

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { navItems } from "./Nav";

import menuImg from '$assets/3d/menu.png';
import Image from "next/image";

interface  MobileNavProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const  MobileNav: FC< MobileNavProps> = ({ ...rest }) => {
    return <div {...rest}> 
      <div className="md:hidden">
        <Popover  >
          <PopoverTrigger 
           className="cursor-pointer text-lg font-semibold text-gray-50 hover:text-gray-100  p-1 rounded-full bg-gray-300/70 hover:bg-gray-300 transition-all"
          >
             <Image
             alt="menu"
             src={menuImg}
             width={50}
             height={50}
            />

            
          </PopoverTrigger>
          <PopoverContent className="flex flex-col relative -left-5 top-5">
            {
                navItems.map((val) => { 
                    return <Link key={val.title +val.url}
                    className="border-b flex gap-x-1 items-center  border-transparent  hover:border-teal-700   text-gray-800 text-lg font-semibold  p-2 transition-all   "
                    href={val.url}
                    >
                      <Image
                      src={val.Icon}
                      alt={val.title + "Icon"}
                      width={40}
                      height={40}

                      />
                    <p>    {val.title}</p>
                    </Link>
                 })
                }
                
          </PopoverContent>
        </Popover>
      </div>
</div>
}