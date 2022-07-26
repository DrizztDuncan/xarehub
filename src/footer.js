import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { SiGoogleplay } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex justify-center bg-blue-1 relative">
    <div className=" w-80w h-30v flex justify-between items-start mt-4 ">
{/* Left Block */}
<div className="   flex flex-col justify-between items-start text-blue-3 ">
        <div className=" w-30w flex justify-around font-normal		text-lg  ">
          <div>我有空間</div>
          <div>|</div>
          <div>常見問題</div>
          <div>|</div>
          <div>使用者條款</div>
          <div>|</div>
          <div>隱私條款政策</div>
        </div>
        <div className=" text-base font-medium ml-2 mt-4 text-white	">
          xarehub享聚落
          <br />
          復北慶城
          <br />
          台北市松山區復興北路143號12樓
        </div>
      </div>
      {/* Right Block */}
      <div className=" flex flex-col items-stretch w-20w text-blue-3 text-lg">
        <div>下載APP</div>
        <div className=" flex  ">
          <div className=" flex text-white w-10w h-16 justify-center items-center ">
            <AiFillApple className=" text-3xl  " />
            <div className=" text-sm ">App Store</div>
          </div>
          <div className=" flex text-white w-10w h-16 justify-center items-center">
            <SiGoogleplay className=" text-2xl" />
            <div className=" text-sm">Google Play</div>
          </div>
        </div>
        <div>聯絡我們</div>
        <div className=" flex text-white ">
          <BsInstagram className=" text-5xl m-5" />
          <FaLine className=" text-5xl m-5"  />
          <BsFacebook className=" text-5xl m-5"  />
        </div>
      </div>
    </div>
      
    </footer>
  );
};

export default Footer;
