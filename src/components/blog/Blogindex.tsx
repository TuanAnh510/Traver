import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Image,
    CardFooter,
} from "@nextui-org/react";
import { BsArrowRight } from 'react-icons/bs';

import { blog } from '../../data/blog'
import { blogdetail } from '../../data/blog'

const Blogindex = () => {
    return (
        <div>
            <div className="">
                <div className="flex gap-2 text-center justify-center">
                    <h1 className="text-center mt-5 text-xl lg:text-3xl font-semibold">TIN TỨC</h1>
                    <p className="text-center mt-5 text-xl lg:text-3xl font-extralight">NỔI BẬT</p>
                </div>
            </div>
            <div className='flex gap-5 mt-5'>
                <div className='w-[50%] '>
                    {blog?.map((blog, i) => (
                        <Card shadow="sm" className='h-[100%]' key={i}>
                            <CardBody className="overflow-visible p-0 ">
                                <img
                                    width="100%"
                                    className="w-full object-cover h-[400px]"
                                    src={blog?.imgge}

                                />
                                <div className="px-3 mt-3">
                                    <p className="text-[18px] font-semibold">{blog?.name}</p>
                                    <p className="text-[13px] ">{blog?.description.slice(0, 150)}...</p>

                                </div>
                                <button className="btnSeeMoreBlog w-[120px] h-[40px] flex gap-2 py-2 justify-center ">
                                    <p >Xem Thêm</p>
                                    <BsArrowRight className="mt-1" />

                                </button>
                            </CardBody>
                        </Card>
                    ))}

                </div>
                <div className='w-[50%]'>
                    <div className='grid grid-cols-2 gap-5  '>
                        {blogdetail?.map((blogdetail, i) => (
                            <Card shadow="sm" className='h-[300px]' key={i} >
                                <CardBody className="overflow-visible p-0 ">
                                    <img
                                        width="100%"
                                        className="w-full object-cover h-[150px]"
                                        src={blogdetail?.imgge}

                                    />
                                    <div>
                                        <div className="px-3 mt-3">
                                            <p className="text-[15px] font-semibold">{blogdetail?.name}</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogindex