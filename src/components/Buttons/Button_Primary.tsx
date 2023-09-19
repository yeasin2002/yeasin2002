import React from "react";

interface Button_PrimaryProps {
  children: React.ReactNode;
}

const Button_Primary = ({ children, ...rest }: Button_PrimaryProps) => {
  return <button {...rest}>{children}</button>;
};

export default Button_Primary;
