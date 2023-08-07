import React from "react";
import Image from "next/image";

import yeasin from "../../assets/avatar/me/Yeasin2002.jpg";
import ContactVia from "./ConnectVia";

const MyAvatar = () => {
  return (
    <div className=" xl:order-last flex flex-col justify-between order-first h-full px-6">
      <div className="justify-self-center self-center justify-between">
        <Image
          src={yeasin}
          alt="Yeasin"
          className="w-60 h-60 ring-4 ring-paste rounded-full"
        />
      </div>
      <ContactVia />
    </div>
  );
};
export default MyAvatar;
