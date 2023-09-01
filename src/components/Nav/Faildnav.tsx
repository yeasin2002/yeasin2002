import React from "react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#aboutMe" },
  { name: "Contact", link: "#contact" },
  { name: "Projects", link: "#projects" },
];

const Faildnav = () => {
  return (
    <div>
      <div className="">
        {/* <motion.ul layoutId="navList" className=" flex items-center gap-2"> */}
        <ul className=" flex items-center gap-2">
          {navItems.map((val) => {
            return (
              <>
                <li
                  className="text-sup relative z-0 transition-all"
                  key={val.name}
                >
                  <a href={val.link} className="px-2 cursor-pointer">
                    {val.name}
                  </a>
                  {/* {activeBar === val.name && (
                      <motion.div
                        layoutId="active-pill"
                        className="bg-paste text-conf absolute bottom-0 left-0 w-full h-1 px-2 rounded-full"
                      ></motion.div>
                    )} */}
                </li>
              </>
            );
          })}
        </ul>
        {/* </ motion.ul> */}
      </div>
    </div>
  );
};

export default Faildnav;
