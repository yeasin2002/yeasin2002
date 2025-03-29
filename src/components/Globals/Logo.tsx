import { cn } from "$lib/utils";

import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
interface LogoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className, ...rest }) => {
  return (
    <p
      {...rest}
      className={cn(
        `font-extrabold silver-text md:text-2xl 2xl:text-3xl `,
        className
      )}
    >
      {"<"}
      Yeasin
      {"/>"}
    </p>
  );
};

export default Logo;
