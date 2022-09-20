import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { SiGoogleplay } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" relative bottom-0 flex  justify-center bg-blue-1">
      <div className=" w-80w h-auto lg:h-40v flex justify-center lg:justify-between items-start lg:items-center mt-4 flex-col lg:flex-row">
        {/* Left Block */}
        <div className=" w-80w lg:w-30w  flex flex-col justify-between items-start text-blue-3 ">
          <div className="  w-80w lg:w-30w flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start font-normal	text-base	lg:text-lg  ">
            <div className="cursor-pointer hover:text-blue-4 my-2 lg:my-0">
              我有空間
            </div>
            <div className="hidden lg:block">|</div>
            <div className="cursor-pointer hover:text-blue-4 my-2 lg:my-0 active:text-white active:font-black">
              常見問題
            </div>
            <div className="hidden lg:block">|</div>
            <div className="cursor-pointer hover:text-blue-4 my-2 lg:my-0 active:text-white active:font-black">
              使用者條款
            </div>
            <div className="hidden lg:block">|</div>
            <div className="cursor-pointer hover:text-blue-4 my-2 lg:my-0 active:text-white active:font-black">
              隱私條款政策
            </div>
          </div>
          <div
            className=" 
          w-80w lg:w-30w text-base font-medium mx-auto lg:mt-8 my-6 m-0 lg:pl-2
          text-white	cursor-auto	text-center lg:text-left leading-8	 
          "
          >
            xarehub享聚落
            <br />
            復北慶城
            <br />
            台北市松山區復興北路143號12樓
          </div>
        </div>
        {/* Right Block */}

        <div className="w-80w lg:w-20w flex flex-col items-center lg:items-stretch  text-blue-3 text-lg ">
          <div className="cursor-default my-6 lg:my-0">下載APP</div>
          <div className=" w-70w lg:w-20w flex justify-between lg:justify-center ">
            <div className=" flex text-white lg:w-50w w-30w justify-center items-center ">
              <AiFillApple className=" text-3xl cursor-pointer" />
              <div className=" text-xs lg:text-sm cursor-pointer mx-2 ">
                App Store
              </div>
            </div>
            <div className=" flex text-white lg:w-50w w-30w justify-center items-center">
              <SiGoogleplay className=" text-2xl cursor-pointer" />
              <div className=" text-xs lg:text-sm cursor-pointer mx-2 ">
                Google Play
              </div>
            </div>
          </div>
          <div className="cursor-default my-6 lg:my-2">聯絡我們</div>
          <div className=" flex text-white mb-8">
            <BsInstagram className=" text-5xl m-5  cursor-pointer" />
            <FaLine className=" text-5xl m-5  cursor-pointer" />
            <BsFacebook className=" text-5xl m-5  cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
