import "./App.css";
import Sec4Pic1 from "./img/Group355.svg";
import Sec4Pic2 from "./img/Group356.svg";
import Sec4Pic3 from "./img/Group357.svg";
import Sec4Pic4 from "./img/Group358.svg";
import Sec4Arr from "./img/Path248.svg";
import { GoArrowDown } from "react-icons/go";
// import Sec4BG from './img/Background_2.svg';

const Section4 = () => {
  return (
    <section className="flex lg:flex-row flex-col justify-center h-100v lg:h-60v relative ">
      {/* wrapping each blocks */}
      <div className="flex lg:flex-row flex-col justify-center items-center mx-3 z-20 ">
        <div>
          <div className="h-[192px]">
            <img src={Sec4Pic1} alt="" />
          </div>
          <div className="text-blue-1 font-semibold text-lg">
            選擇日期與空間條件
          </div>
        </div>
        <div className="lg:block hidden mx-3">
          <img src={Sec4Arr} alt="sec arrow" />
        </div>
        <GoArrowDown className=" text-blue-1 text-5xl block lg:hidden " />
      </div>
      {/* wrapping each blocks */}
      <div className="flex lg:flex-row flex-col justify-center items-center mx-3 z-20">
        <div>
          <div className="h-[192px]">
            <img src={Sec4Pic2} alt="" />
          </div>
          <div className="text-blue-1 font-semibold text-lg">
            App 預約座位或空間
          </div>
        </div>
        <div className=" lg:block hidden mx-3">
          <img src={Sec4Arr} alt="sec arrow" />
        </div>
        <GoArrowDown className=" text-blue-1 text-5xl block lg:hidden " />
      </div>
      {/* wrapping each blocks */}
      <div className="flex lg:flex-row flex-col justify-center items-center mx-3 z-20">
        <div>
          <div className="h-[192px]">
            <img src={Sec4Pic4} alt="" />
          </div>
          <div className="text-blue-1 font-semibold text-lg">
            自動體溫感測管控
          </div>
        </div>
        <div className="lg:block mx-3 hidden">
          <img src={Sec4Arr} alt="sec arrow" />
        </div>
        <GoArrowDown className=" text-blue-1 text-5xl block lg:hidden " />
      </div>
      {/* wrapping each blocks */}
      <div className="flex lg:flex-row flex-col justify-center items-center mx-3 z-20">
        <div>
          <div className="h-[192px]">
            <img src={Sec4Pic3} alt="" />
          </div>
          <div className="text-blue-1 font-semibold text-lg">
            掃描 QR Code 進出
          </div>
        </div>
        <div className="flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Section4;
