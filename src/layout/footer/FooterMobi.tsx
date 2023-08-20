import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { PiMapPinDuotone } from "react-icons/pi";
const FooterMobi = () => {
  return (
    <>
      <div className="bg-[#0c121c] text-white pb-5">
        <div>
          <div className="flex  justify-center gap-5 pt-5 pb-5 ">
            <FaFacebookF size={25} />
            <FaYoutube size={30} />
            <FaInstagram size={30} />
          </div>
          <div className="border-t-2 pb-5 px-5">
            <div>
              <img
                src="/logo.png"
                width={200}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="flex text-white">
              <div className="text-[15px] font-bold">
                Liên hệ với chúng tôi{" "}
              </div>
              <p className="text-[#808991] text-base font-bold">
                (Hỗ trợ 24/7)
              </p>
            </div>

            <div className="flex gap-3 text-[15px] mt-5">
              <BsTelephone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Đặt vé máy bay:</p>
              <p className="text-yellow-400 font-bold ">0939044510</p>
            </div>
            <div className="flex gap-3 text-[15px] mt-5">
              <BsTelephone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Đặt Tour du lịch:</p>
              <p className="text-yellow-400 font-bold ">0939044510</p>
            </div>
            <div className="flex gap-3 text-[15px] mt-5">
              <BsTelephone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Đặt phòng khách sạn:</p>
              <p className="text-yellow-400 font-bold ">0939044510</p>
            </div>
            <div className="flex gap-3 text-[15px] mt-5">
              <BsTelephone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Tư vấn:</p>
              <p className="text-yellow-400 font-bold ">0939044510</p>
            </div>
          </div>
          <div className="border-t-2 pt-5 px-5">
            <div className="flex gap-3 text-[15px] mt-5">
              <PiMapPinDuotone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Hồ Chí Minh</p>
            </div>
            <div className="flex gap-3 text-[15px] mt-5">
              <PiMapPinDuotone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Đà Nẵng</p>
            </div>
            <div className="flex gap-3 text-[15px] mt-5">
              <PiMapPinDuotone className="text-xl mt-1 text-white" />
              <p className="text-white font-bold">Hà Nội</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0d192e] text-white text-center py-3 text-sm pb-5">
        © 2023 Vietnambooking
      </div>
    </>
  );
};

export default FooterMobi;
