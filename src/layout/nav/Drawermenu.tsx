import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";
import { BsList } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const Drawermenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space>
        <button onClick={showDrawer}>
          <BsList className="text-3xl mt-5" />
        </button>
      </Space>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="text-[18px]">
          <div className="text-[#0064d2] font-bold flex gap-2">
            <FaHome className="mt-1" size={20} />
            <p> Trang Chủ</p>
          </div>
          <p className="mt-3 hover:text-[#0064d2] hover:font-bold">Về chúng tôi</p>
          <p className="mt-3 hover:text-[#0064d2] hover:font-bold">Du lịch</p>
          <p className="mt-3 hover:text-[#0064d2] hover:font-bold">Khách sạn</p>
          <p className="mt-3 hover:text-[#0064d2] hover:font-bold">Combo tiết kiệm</p>
          <p className="mt-3 hover:text-[#0064d2] hover:font-bold">Flash Sale</p>
          <p className="mt-3 hover:text-[#0064d2] hover:font-bold">Thanh toán</p>
          <p className="mt-3 hover:text-[#0064d2] hover:font-bold">Liên hệ</p>
        </div>
      </Drawer>
    </>
  );
};

export default Drawermenu;
