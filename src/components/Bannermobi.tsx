import React from "react";

const Bannermobi = () => {
  return (
    <div>
      <div className="bg-[#0064d2] ">
        <h2 className="text-white text-center py-5 px-10">
          Đặt vé tour du lịch, khách sạn giá rẻ 2023 | Mona Booking
        </h2>
      </div>
      <div className="bg-box relative overflow-hidden bg-no-repeat"></div>
      <div className="px-4 md:px-12 ml-auto mr-auto lg:w-[70%] w-full ">
        <div className="block rounded-lg absolute mt-[-40px]">
          <div className="grid grid-cols-3 ml-8 gap-5">
            <div className="flex flex-col shadow-2xl border-2 bg-white border-[#c7d6f5] w-[90px] h-[90px] rounded-xl py-2 hover:border-[#00a1fe] hover:border-2 ">
              <img
                src="/iconlogo/icon_hotel.png"
                width={45}
                className="mx-auto"
              />
              <p className="text-[13px] font-semibold mt-2 text-center">
                Khách sạn
              </p>
            </div>
            <div className="flex flex-col shadow-2xl border bg-white border-[#c7d6f5] w-[90px] h-[90px] rounded-xl py-2 hover:border-[#00a1fe] hover:border-2 ">
              <img
                src="/iconlogo/icon_tour.png"
                width={45}
                className="mx-auto"
              />
              <p className="text-[13px] font-semibold mt-2 text-center">
                Du lịch
              </p>
            </div>
            <div className="flex flex-col shadow-2xl border bg-white border-[#c7d6f5] w-[90px] h-[90px] rounded-xl py-2 hover:border-[#00a1fe] hover:border-2 ">
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
      </div>
    </div>
  );
};

export default Bannermobi;
