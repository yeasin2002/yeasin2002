import React from "react";
import Image from "next/image";

import yeasin from "../../assets/avatar/me/exam.jpg";
import ContactVia from "./ConnectVia";

const MyAvatar = () => {
  return (
    <div className=" order-first flex h-full flex-col justify-between px-6 md:order-last">
      <div className="justify-between self-center justify-self-center">
        <Image
          src={yeasin}
          alt="Yeasin"
          className="h-60 w-60 rounded-full ring-4 ring-paste"
        />
      </div>
      <ContactVia />
    </div>
  );
};
export default MyAvatar;
