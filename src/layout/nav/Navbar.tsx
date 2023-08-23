import React from "react";
import Drawermenu from "./Drawermenu";
import NavbarMobi from "./NavbarMobi";
import { navbarData } from "../../data/navbar"


import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="hidden lg:block md:hidden sticky top-[-5px] z-10 ">
        <div className="bg-[#0064d2]  gap-10 text-white flex pl-56 ">
          <div>
            <Drawermenu />
          </div>
          <div>
            <img src="/logo.png" className="w-[150px] h-[70px]" />
          </div>
          {navbarData.map((nav, i) => (
            <Link key={i + 1} href={nav.href} className="items-center justify-center flex">{nav.title}</Link>
          ))}


          <div className="mt-5 ml-64 gap-3 flex">
            <div className="mt-2">
              <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 border-yellow-400">
                <BsTelephoneFill className="text-yellow-400 " size={20} />
              </span>
            </div>

            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-pink-500 font-bold">0939044510</p>
          </div>
        </div>
      </nav>

      <div className="block lg:hidden md:block">
        <NavbarMobi />
      </div>
    </>
  );
};

export default Navbar;
