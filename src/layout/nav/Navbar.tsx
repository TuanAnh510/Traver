import React from "react";

import Drawermenu from "./Drawermenu";
import NavbarMobi from "./NavbarMobi";


const Navbar = () => {
  return (
    <>
      <div className="hidden lg:block md:hidden">
        <div className="bg-[#0064d2]  gap-10 text-white flex pl-56">
          <div>
            <Drawermenu />
          </div>
          <div>
            <img src="/logo.png" className="w-[150px] h-[70px]" />
          </div>
          <div className="mt-6">Vé máy bay</div>
          <div className="mt-6">Du lịch</div>
          <div className="mt-6">Khách sạn</div>
          <div className="mt-6">Combo</div>
          <div className="mt-6">Flash Sale</div>
        </div>
       
      </div>

      <div className="block lg:hidden md:block">
        <NavbarMobi />
      </div>
    </>
  );
};

export default Navbar;
