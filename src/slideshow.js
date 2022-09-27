import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// install Swiper modules
import { Navigation } from "swiper";

// install carousel img
import Caroul_1 from "./img/neoni.png";
import Caroul_2 from "./img/neovaii.jpg";
import Caroul_3 from "./img/jadekey.jpg";
import Caroul_4 from "./img/Blanke.webp";
import Caroul_5 from "./img/ninachuba.webp";

export default function SlideShow() {
  return (
    <>
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
