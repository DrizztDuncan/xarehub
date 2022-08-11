import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { SiGoogleplay } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex  justify-center bg-blue-1 relative">
      <div className=" w-80w h-auto lg:h-30v flex justify-center lg:justify-between items-start mt-4 flex-col lg:flex-row">
        {/* Left Block */}
        <div className="   flex flex-col justify-between items-start text-blue-3 ">
          <div className="  w-80w lg:w-30w flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start font-normal	text-3xl	lg:text-lg  ">
            <div className="cursor-pointer hover:text-blue-4 my-2 lg:my-0">
              我有空間
            </div>
            <div className="hidden lg:block">|</div>
            <div className="cursor-pointer hover:text-blue-4 my-2 lg:my-0">
              常見問題
            </div>
            <div className="hidden lg:block">|</div>
            <div className="cursor-pointer hover:text-blue-4 my-2 lg:my-0">
              使用者條款
            </div>
            <div className="hidden lg:block">|</div>
            <div className="cursor-pointer hover:text-blue-4 my-2 lg:my-0">
              隱私條款政策
            </div>
          </div>
          <div className=" flex text-center lg:text-left justify-center lg:justify-start text-base font-medium ml-0 lg:ml-2 mt-4 text-white	cursor-auto	w-100w lg:w-30w ">
            xarehub享聚落
            <br />
            復北慶城
            <br />
            台北市松山區復興北路143號12樓
          </div>
        </div>
        {/* Right Block */}
        <div className=" flex flex-col items-stretch w-20w text-blue-3 text-lg ">
          <div className="cursor-default	">下載APP</div>
          <div className=" flex  ">
            <div className=" flex text-white w-10w h-16 justify-center items-center ">
              <AiFillApple className=" text-3xl cursor-pointer" />
              <div className=" text-sm cursor-pointer mx-2">App Store</div>
            </div>
            <div className=" flex text-white w-10w h-16 justify-center items-center">
              <SiGoogleplay className=" text-2xl cursor-pointer" />
              <div className=" text-sm cursor-pointer mx-2">Google Play</div>
            </div>
          </div>
          <div className="cursor-default	">聯絡我們</div>
          <div className=" flex text-white ">
            <BsInstagram className=" text-5xl cursor-pointer mx-3" />
            <FaLine className=" text-5xl cursor-pointer  mx-3" />
            <BsFacebook className=" text-5xl cursor-pointer  mx-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
