import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { BiMenu } from "react-icons/bi";
import { navItems } from "./Nav";

interface  MobileNavProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const  MobileNav: FC< MobileNavProps> = ({ ...rest }) => {
    return <div {...rest}> 
      <div className="md:hidden">
        <Popover  >
          <PopoverTrigger 
           className="cursor-pointer text-lg font-semibold text-gray-50 hover:text-gray-100 bg-paste  p-2 rounded-full"
          >
            <BiMenu className="text-gray-800" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col relative -left-5 top-5">
            {
                navItems.map((val) => { 
                    return <Link key={val.title +val.url}
                    className="border-b border-transparent  hover:border-teal-700   text-gray-800 text-lg font-semibold  p-2 transition-all   "
                    href={val.url}
                    >
                        {val.title}
                    </Link>
                 })
                }
                
          </PopoverContent>
        </Popover>
      </div>
</div>
}