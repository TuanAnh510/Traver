import React, { useRef, useState } from "react";
import Checkin from "./Checkin";
import Bannermobi from "./Bannermobi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div className="hidden lg:block md:hidden mb-96">
        <div className="relative overflow-hidden bg-no-repeat bg-cover">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <img src="/banner1.jpg" className="w-[100%] h-[500px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner2.jpg" className="w-[100%] h-[500px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner3.jpg" className="w-[100%] h-[500px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner4.jpg" className="w-[100%] h-[500px]" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-black px-4 md:px-12  w-[70%] ml-[15%] absolute z-[5]">
          <div className="block rounded-lg shadow-lg CBlur">
            <div className="bg-[#f6f9ff] py-5 px-5 flex justify-between">
              <h2 className="font-semibold font-sans text-xl py-5">
                {" "}
                MONA Booking - Niềm tin của bạn
              </h2>

              <div className="grid grid-cols-3 gap-4 mr-32">
                <div className="flex flex-col shadow-2xl border-2 border-[#00a1fe] w-[90px] h-[90px] rounded-xl py-2 hover:border-[#00a1fe] hover:border-2 ">
                  <img
                    src="/iconlogo/icon_hotel.png"
                    width={45}
                    className="mx-auto"
                  />
                  <p className="text-[13px] font-semibold mt-2 text-center">
                    Khách sạn
                  </p>
                </div>
                <div className="flex flex-col shadow-2xl border border-[#c7d6f5] w-[90px] h-[90px] rounded-xl py-2 hover:border-[#00a1fe] hover:border-2 ">
                  <img
                    src="/iconlogo/icon_tour.png"
                    width={45}
                    className="mx-auto"
                  />
                  <p className="text-[13px] font-semibold mt-2 text-center">
                    Du lịch
                  </p>
                </div>
                <div className="flex flex-col shadow-2xl border border-[#c7d6f5] w-[90px] h-[90px] rounded-xl py-2 hover:border-[#00a1fe] hover:border-2 ">
                  <img
                    src="/iconlogo/icon_combo.png"
                    width={45}
                    className="mx-auto"
                  />
                  <p className="text-[13px] font-semibold mt-2 text-center">
                    Combo
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Checkin />
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden md:block">
        <Bannermobi />
      </div>
    </>
  );
};

export default Banner;
