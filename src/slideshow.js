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
    <>
      {/* new */}

      {/* <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample010.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample005.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample012.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample007.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample008.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample009.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div> */}

      {/* origin */}
      <div className=" lg:flex items-center my-24 hidden">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={5}
        >
          <SwiperSlide>
            <img src={Caroul_1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Caroul_2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Caroul_3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Caroul_4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Caroul_5} />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* mobile */}
      <div className=" flex items-center my-2 lg:hidden">
        <Swiper navigation={false} loop={true} className="mySwiper">
          <SwiperSlide>
            <img src={Caroul_1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Caroul_2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Caroul_3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Caroul_4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Caroul_5} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
