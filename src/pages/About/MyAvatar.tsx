import Image from "next/image";
import React from "react";

import yeasin from "../../assets/avatar/me/yeasin-2.jpg";
import ContactVia from "./ConnectVia";
const MyAvatar = () => {
  return (
    <div className=" xl:order-last flex flex-col justify-between order-first h-full px-6">
      <div className="justify-self-center self-center justify-between">
        <Image src={yeasin} alt="Yeasin" className="w-60 h-60 rounded-full" />
      </div>
      <ContactVia />
    </div>
  );
};
export default MyAvatar;
