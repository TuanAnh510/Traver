import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HotelCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper slidesPerView={3} spaceBetween={30} className="swiper-container">
        <SwiperSlide>
          
          <img src="/banner1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner1.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HotelCarousel;