"use client";
import Logo from "$components/Globals/Logo";
import Link from "next/link";
import { IconBase } from "react-icons";


import { MobileNav } from "./MobileNav";


export  const navItems = [
  {
    title: "Home",
    url: "/",
    Icon: <IconBase/>
  },
  {
    title: "Shop",
    url: "/shop",
    Icon: <IconBase/>
  },
  {
    title: "login",
    url: "/login",
    Icon: <IconBase/>
  },
  {
    title: "Contact",
    url: "/contact",
    Icon: <IconBase/>
  },
]

 const Nav = () => {
   
  return (
    <nav
      className="fixed left-0 right-0  top-3 z-10  mx-auto flex w-10/12 items-center justify-between rounded-lg  py-3 px-5"
      //  glass effect
      style={{
        background: `rgba(255, 255, 255, 0.2)`,
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
        backdropFilter: `blur(5px)`,
        border: `1px solid rgba(255, 255, 255, 0.3)`,
      }}
    >
      <Link href={"/"} className="h-10 w-10 ">
        <Logo className="h-full w-full " />
      </Link>


<MobileNav/>

      <div className="hidden gap-x-6  md:flex ">

        {navItems.map((item) => {
          return (
            <Link href={item.url} defaultValue={"/"} key={item.title + item.url} className="group relative flex items-center">
              <p className="cursor-pointer text-lg font-semibold text-gray-50 hover:text-gray-100">{item.title}</p>
              <span className="absolute -bottom-1  left-0 h-1 w-0 bg-teal-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )
        })}
      </div>
     
    </nav>
  )
}




export default Nav