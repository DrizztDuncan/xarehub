import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import './swiper.min.css'; 
// import './swiper-bundle.min.cs';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css"; >>Path error<<

// install Swiper modules
import { Navigation } from "swiper";



export default function SlideShow() {
  
  
  
  
  
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  </>
  )
}