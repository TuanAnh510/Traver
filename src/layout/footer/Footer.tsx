import React from "react";
import { BsTelephone } from "react-icons/bs";
import FooterMobi from "./FooterMobi";

const Footer = () => {
  return (
    <>
      <div className="bg-[#0c121c] hidden lg:block md:hidden mt-20">
        <div className="w-[70%] mx-auto flex gap-5 pb-5">
          <div className="w-[350px]">
            <div>
              <img src="/logo.png" width={200} height={80} />
            </div>
            <div className="flex text-white gap-2">
              <div className="text-base font-bold">Liên hệ với chúng tôi</div>
              <p className="text-[#808991] text-base font-bold">
                (Hỗ trợ 24/7)
              </p>
            </div>

            <div className="flex gap-3  mt-5">
              <BsTelephone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Đặt vé máy bay:</p>
              <p className="text-yellow-400 font-bold ">0939044510</p>
            </div>
            <div className="flex gap-3  mt-5">
              <BsTelephone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Đặt Tour du lịch:</p>
              <p className="text-yellow-400 font-bold ">0939044510</p>
            </div>
            <div className="flex gap-3  mt-5">
              <BsTelephone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Đặt phòng khách sạn:</p>
              <p className="text-yellow-400 font-bold ">0939044510</p>
            </div>
            <div className="flex gap-3   mt-5">
              <BsTelephone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Tư vấn:</p>
              <p className="text-yellow-400 font-bold ">0939044510</p>
            </div>
          </div>
          <div className=" grid grid-cols-3 text-white gap-10 pt-10">
            <div className="">
              <div className="text-[17px] font-bold ">Về Chúng Tôi</div>

              <div className="flex flex-col text-[#aaa8a8] mt-5">
                <p className=" hover:text-white">Giới thiệu</p>
                <p className="mt-3 hover:text-white">Liên hệ</p>
                <p className="mt-3  hover:text-white">Truyền thông</p>
                <p className="mt-3  hover:text-white">Chính sách bảo hành</p>
                <p className="mt-3  hover:text-white">Điều khoản sử dụng</p>
              </div>
            </div>
            <div className="">
              <div className="text-[17px] font-bold">Sản phẩm</div>

              <div className="flex flex-col text-[#aaa8a8] mt-5">
                <p className=" hover:text-white">vé máy bay</p>
                <p className="mt-3 hover:text-white">Tour du lịch</p>
                <p className="mt-3  hover:text-white">Đặt khách sạn</p>
                <p className="mt-3  hover:text-white">Combo tiết kiệm</p>
                <p className="mt-3  hover:text-white">Cách đặt chổ</p>
              </div>
            </div>
            <div className="">
              <div className="text-[17px] font-bold">Khác</div>

              <div className="flex flex-col text-[#aaa8a8] mt-5">
                <p className=" hover:text-white">Xem lại đơn hàng</p>
                <p className="mt-3 hover:text-white">Hướng dẫn thanh toán</p>
                <p className="mt-3  hover:text-white">Chăm sóc khách hàng</p>
                <p className="mt-3  hover:text-white">Chính sách bảo hành</p>
                <p className="mt-3  hover:text-white">Điều khoản sử dụng</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0d192e] text-white text-center py-3 text-xs">
          © 2023 Vietnambooking
        </div>
      </div>

      {/* FooterMobi */}
      <div className="block lg:hidden md:block">
        <FooterMobi />
      </div>
    </>
  );
};

export default Footer;
