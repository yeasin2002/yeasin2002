import * as React from "react";

import { cn } from "@/lib/utils";
import useGEneratedColor from "@/hooks/useGeneratedColor";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { theStyles } = useGEneratedColor({
      GreenishColorValue: {
        styles:
          "focus:bg-emerald-700 bg-emerald-800 placeholder:text-gray-300 text-conf",
      },
      MidnightBlueColorValue: {
        styles:
          "focus:bg-slate-700 bg-slate-800 placeholder:text-gray-300 text-paste",
      },
    });

    return (
      <input
        type={type}
        className={cn(`${theStyles} `, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
