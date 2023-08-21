import React from "react";
import { FcSearch } from "react-icons/fc";
import { CiViewList } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import Search from "@/components/Search";

const NavbarTop = () => {
  return (
    <div className="hidden lg:block md:hidden">
      <div className="bg-[#ffffff] flex justify-between w-[70%] mx-auto py-4">
        <div className="flex gap-10 text-[14px] text-[#808991] font-semibold">
          <div className="flex gap-1">
            <img src="/iconlogo/offer.png" width={20} />
            <p>Khuyến mãi</p>
          </div>
          <div className="flex gap-1">
            <CiViewList className="text-xl text-[#0064d2]" />
            <p>Đặt chổ của tôi</p>
          </div>
          <div className="flex gap-1">
            <BiSupport className="text-xl text-[#0064d2]" />
            <p>Trung tâm trợ giúp</p>
          </div>
          <div className="flex gap-1">
            <img src="/iconlogo/handshake.png" width={20} />
            <p>Đặt chổ của tôi</p>
          </div>
          <div className="">
            
            <Search/>
          </div>
        </div>
        <div className="flex gap-5 text-[14px] text-[#808991] font-semibold">
          <div className="flex gap-1">
            <img src="/iconlogo/user.png" width={20} className="mt-[2px]" />
            <p>Đăng nhập</p>
          </div>
          <div className="text-[#0064d2]">Đăng ký</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
