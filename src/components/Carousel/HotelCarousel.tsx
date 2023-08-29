import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import Link from "next/link";

import { dataroom } from "../../data/dataroom";
import { BsArrowRight } from "react-icons/bs";



const HotelCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    // arrows: true,
    fade: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div>
      <div>
        <div className="">
          <div className="flex gap-2 text-center justify-center">
            <h1 className="text-center mt-5 text-xl lg:text-3xl font-semibold">ƯU ĐÃI</h1>
            <p className="text-center mt-5 text-xl lg:text-3xl font-extralight">DÀNH CHO BẠN</p>
          </div>
        </div>

        <Slider {...settings} className="mt-5">
          {dataroom?.map((room, i) => (
            <div key={i}>
              <Card shadow="sm" >
                <CardBody className="overflow-visible p-0">
                  <img
                    width="100%"
                    className="w-full object-cover h-[200px]"
                    src={room.img}
                  />
                </CardBody>
                <div className="px-3 mt-3">
                  <p className="text-xl font-semibold">{room.title}</p>
                </div>
                <CardFooter className="text-small justify-between">
                  <div className="flex">
                    <p className="text-yellow-400 mr-1 text-lg">
                      {room.price}{" "}
                    </p>
                    <p className="mt-1">/đêm</p>
                  </div>
                  <button className="btnCheckin w-[100px] h-[40px]">
                    Đặt ngay
                  </button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
        <button className="btnSeeMore w-[120px] h-[40px] flex gap-2 py-2 justify-center ">
          <p >Xem Thêm</p>
          <BsArrowRight className="mt-1" />

        </button>
      </div>
    </div>
  );
};

export default HotelCarousel;
