import React from "react";

interface Props {
  children: React.ReactNode;
}

const Button_Secondary = ({ children }: Props) => {
  return <button>{children}</button>;
};

export default Button_Secondary;
