import './App.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// import img
import Carousel1 from "./img/carousel-1.jpeg";
import Carousel2 from "./img/carousel-2.jpeg";
import Carousel3 from "./img/carousel-3.jpeg";
import Carousel4 from "./img/carousel-4.jpeg";
import Carousel5 from "./img/carousel-5.jpeg";

export default function SlideShow() {
  return (
    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={Carousel1} /></SwiperSlide>
            <SwiperSlide><img src={Carousel2} /></SwiperSlide>
            <SwiperSlide><img src={Carousel3} /></SwiperSlide>
            <SwiperSlide><img src={Carousel4} /></SwiperSlide>
            <SwiperSlide><img src={Carousel5} /></SwiperSlide>
        </Swiper>
    </>
  );
}