import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// install Swiper modules
import { Navigation } from "swiper";

// install carousel img
import Caroul_1 from "./img/carousel-1.jpeg";
import Caroul_2 from "./img/carousel-2.jpeg";
import Caroul_3 from "./img/carousel-3.jpeg";
import Caroul_4 from "./img/carousel-4.jpeg";
import Caroul_5 from "./img/carousel-5.jpeg";


export default function SlideShow() {
  
  
  
  
  
  return (
    <div className=" flex items-center  ">
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><img src={Caroul_1} /></SwiperSlide>
      <SwiperSlide><img src={Caroul_2} /></SwiperSlide>
      <SwiperSlide><img src={Caroul_3} /></SwiperSlide>
      <SwiperSlide><img src={Caroul_4} /></SwiperSlide>
      <SwiperSlide><img src={Caroul_5} /></SwiperSlide>
    </Swiper>
  </div>
  )
}