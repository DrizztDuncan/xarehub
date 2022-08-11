import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { SiGoogleplay } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className=" flex  justify-center bg-blue-1 relative">
      <div className=" w-80w h-auto lg:h-30v flex justify-center lg:justify-between items-start mt-4 flex-col lg:flex-row">
        {/* Left Block */}
        <div className="   flex flex-col justify-between items-start text-blue-3 ">
          <div className="  w-80w lg:w-30w flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start font-normal	text-3xl	lg:text-lg  ">
=======
    <footer className=" flex justify-center bg-blue-1 relative">
      <div className=" w-80w h-auto lg:h-30v flex lg:flex-row flex-col justify-between items-start mt-4 ">
        {/* Left Block */}
        <div className="   flex flex-col justify-between items-start text-blue-3 ">
          <div className=" w-80w lg:w-30w flex justify-around items-center font-normal lg:flex-row flex-col	text-lg  ">
>>>>>>> 16b2d31c8eb20fb89050e0fef254451de9c7ba74
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
<<<<<<< HEAD
          <div className=" flex text-center lg:text-left justify-center lg:justify-start text-base font-medium ml-0 lg:ml-2 mt-4 text-white	cursor-auto	w-100w lg:w-30w ">
=======
          <div
            className=" 
          w-30w lg:w-80w text-base font-medium lg:ml-2 mx-auto mt-8 lg:mt-24 m-0 text-white	cursor-auto	text-center lg:text-left leading-8	 
          "
          >
>>>>>>> 16b2d31c8eb20fb89050e0fef254451de9c7ba74
            xarehub享聚落
            <br />
            復北慶城
            <br />
            台北市松山區復興北路143號12樓
          </div>
        </div>
        {/* Right Block */}
<<<<<<< HEAD
        <div className=" flex flex-col items-stretch w-20w text-blue-3 text-lg ">
          <div className="cursor-default	">下載APP</div>
          <div className=" flex  ">
            <div className=" flex text-white w-10w h-16 justify-center items-center ">
              <AiFillApple className=" text-3xl cursor-pointer" />
              <div className=" text-sm cursor-pointer mx-2">App Store</div>
            </div>
            <div className=" flex text-white w-10w h-16 justify-center items-center">
=======
        <div className=" flex flex-col items-center lg:items-stretch w-80w lg:w-30w text-blue-3 text-lg ">
          <div className="cursor-default my-6 lg:my-0">下載APP</div>
          <div className=" w-80w lg:w-20w flex justify-evenly lg:justify-center ">
            <div className=" flex text-white w-50w lg:w-10w justify-center items-center ">
              <AiFillApple className=" text-3xl cursor-pointer" />
              <div className=" text-sm cursor-pointer mx-2">App Store</div>
            </div>
            <div className=" flex text-white w-50w lg:w-10w justify-center items-center">
>>>>>>> 16b2d31c8eb20fb89050e0fef254451de9c7ba74
              <SiGoogleplay className=" text-2xl cursor-pointer" />
              <div className=" text-sm cursor-pointer mx-2">Google Play</div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="cursor-default	">聯絡我們</div>
          <div className=" flex text-white ">
            <BsInstagram className=" text-5xl cursor-pointer mx-3" />
            <FaLine className=" text-5xl cursor-pointer  mx-3" />
            <BsFacebook className=" text-5xl cursor-pointer  mx-3" />
=======
          <div className="cursor-default my-6 lg:my-0">聯絡我們</div>
          <div className=" flex text-white ">
            <BsInstagram className=" text-5xl m-5  cursor-pointer" />
            <FaLine className=" text-5xl m-5  cursor-pointer" />
            <BsFacebook className=" text-5xl m-5  cursor-pointer" />
>>>>>>> 16b2d31c8eb20fb89050e0fef254451de9c7ba74
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
