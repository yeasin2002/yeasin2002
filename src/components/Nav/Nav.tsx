import React from "react";
import FreePalestine from "../Globals/FreePalestine";
import LargeDeviceNav from "./LargeDeviceNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <div>
      <LargeDeviceNav />
      <MobileNav />
    </div>
  );
};

export default Nav;
