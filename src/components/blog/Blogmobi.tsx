import { Card, CardBody, CardFooter } from '@nextui-org/react';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';

import { blogdetail } from '../../data/blog'

const Blogmobi = () => {
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
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         infinite: true,
            //         dots: true,
            //     },
            // },
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         initialSlide: 2,
            //     },
            // },
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
            <div className="">
                <Slider {...settings}>
                    {blogdetail?.map((blogdetail, i) => (
                        <div className="mt-5" key={i + 1}>
                            <Card shadow="sm" >
                                <CardBody className="overflow-visible p-0 ">
                                    <img
                                        width="100%"
                                        className="w-full object-cover h-[200px]"
                                        src={blogdetail.imgge}
                                    />
                                    <div className="px-3 mt-3">
                                        <p className="text-[15px] font-semibold">{blogdetail.name}</p>
                                    </div>
                                </CardBody>
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
}

export default Blogmobi