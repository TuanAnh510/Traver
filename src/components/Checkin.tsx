import React from "react";
import { Button, Input } from "antd";
import { Switch } from "antd";
import { BiMap } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import Selectdate from "./date/Selectdate";

const Checkin = () => {
  return (
    <div>
      <div className="px-10 py-5 ">
        <div className="flex gap-3">
          <img src="/iconlogo/icon_hotel.png" />
          <p className="text-[18px] font-semibold mt-2">Đặt phòng khách sạn trực tuyến giá rẻ</p>
        </div>

        <div className="mt-5">
          <p className="font-semibold">Điạ điểm hoặc tên khách sạn</p>
          <Input
            prefix={<BiMap size={20} color="#9e9e9e" />}
            className="border border-black mt-3 py-3 "
            placeholder="Nhập địa điểm hoặc tên khách sạn"
          />
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className="">
            <p className="font-semibold">Ngày nhận phòng</p>
            <Selectdate />
          </div>
          <div className="">
            <p className="font-semibold">Ngày trả phòng</p>
            <Selectdate />
          </div>
          <div className="">
            <p className="font-semibold">Số phòng và khách</p>
            <Input
              prefix={<FaBuildingUser size={20} color="#9e9e9e" />}
              className="border border-black mt-3"
            />
          </div>
        </div>
        <div className="text-right mt-10">
            <button className="btnCheckin">TÌM KIẾM</button>
        </div>
      </div>
    </div>
  );
};

export default Checkin;
