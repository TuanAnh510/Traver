import React from "react";
import Drawermenu from "./Drawermenu";
import { CiUser } from "react-icons/ci";

const NavbarMobi = () => {
  return (
    <div className="flex bg-[#0064d2] justify-between">
      <div>
        <Drawermenu />
      </div>
      <div>
        <img src="/logo.png" className="w-[150px] h-[70px]" />
      </div>
       <div>
          <CiUser size={25} className="text-white mt-6"/>
        </div>
    </div>
  );
};

export default NavbarMobi;
