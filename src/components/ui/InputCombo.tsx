import { cn } from "@/utils";
import type { DetailedHTMLProps, FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputComboProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegisterReturn;
  placeholder: string;
  label: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  error?: string | undefined;
  isLabelHidden?: boolean;
  isRequired?: boolean;
}

export const InputCombo: FC<InputComboProps> = ({
  register,
  placeholder,
  label,
  error,
  className,
  labelClassName,
  isLabelHidden,
  isRequired = false,
  wrapperClassName = "",

  ...rest
}) => {
  const { ref, ...registerRest } = register;

  return (
    <div className={cn(wrapperClassName)}>
      <label htmlFor={label} className={cn(labelClassName)}>
        {label}
        <span className="text-md font-bold text-red-800">
          {isRequired && "*"}
        </span>
      </label>

      <input
        {...rest}
        {...registerRest}
        ref={ref}
        type={"text"}
        id={label}
        placeholder={placeholder}
        className={cn(
          "w-full text-zinc-900",
          { " outline-red-600  ": error },
          className
        )}
      />
    </div>
  );
};
