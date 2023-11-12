import { cn } from "$lib/utils";
import { LogoFont } from "@/utils/GoogleFonts";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
interface LogoProps extends  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
{
  className?: string;
}

const Logo: FC<LogoProps> = ({className , ...rest}) => {
  return (
    
      <p
      {...rest}
        className={cn(`text-paste md:text-2xl 2xl:text-3xl font-bold ${LogoFont.className}`, className)}
      >
        {"<"}
        Yeasin
        {"/>"}
      </p>
    
  );
};

export default Logo;
