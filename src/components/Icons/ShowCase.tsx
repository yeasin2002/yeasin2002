import React from "react";
import Image from "next/image";
import showcase from "@/assets/icons/showcase.svg";

const Showcase = () => {
  return <Image width={20} height={20} src={showcase} alt="showcase" />;
};

export default Showcase;
