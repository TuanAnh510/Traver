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

import { combo } from "../../data/combo";
import { BsArrowRight } from 'react-icons/bs'


const Destination = () => {
    const settings = {
        dots: false,
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
            <div className="pb-20">
                <div className="">
                    <div className="flex gap-2 text-center justify-center">
                        <h1 className="text-center mt-5 text-xl lg:text-3xl font-semibold">ĐỊA ĐIỂM</h1>
                        <p className="text-center mt-5 text-xl lg:text-3xl font-extralight">NỔI BẬT</p>
                    </div>
                </div>

                <Slider {...settings} autoplay autoplaySpeed={5000} className="mt-5">


                    <div className="mt-5" >
                        <img src="/carousel/hanoi.jpg" className="h-[400px] object-cover" />
                    </div>
                    <div className="mt-5 flex flex-col gap-3" >
                        <img src="/carousel/laocai.jpg" className="h-[180px] w-[100%]" />
                        <img src="/carousel/kiengiang.jpg" className="h-[200px] w-[100%] mt-3" />

                    </div>
                    <div className="mt-5" >
                        <img src="/carousel/khanhhoa.jpg" className="h-[400px] w-[100%] object-cover" />
                    </div>
                    <div className="mt-5" >
                        <img src="/carousel/hanoi.jpg" className="h-[400px] object-cover" />
                    </div>
                    <div className="mt-5 flex flex-col gap-3" >
                        <img src="/carousel/tphcm.jpg" className="h-[180px] w-[100%]" />
                        <img src="/carousel/danang.jpg" className="h-[200px] w-[100%] mt-3" />

                    </div>
                    <div className="mt-5" >
                        <img src="/carousel/nghean.jpg" className="h-[400px] w-[100%] object-cover" />
                    </div>
                </Slider>
                <div className="mt-10">
                    <button className="btnSeeMore w-[120px] h-[40px] flex gap-2 py-2 justify-center ">
                        <p >Xem Thêm</p>
                        <BsArrowRight className="mt-1" />
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Destination