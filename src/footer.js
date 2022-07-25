import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { SiGoogleplay } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-blue-1 relative">
      {/* Left Block */}
      <div className=" h-40v  w-30w flex flex-col justify-start items-start ">
        <div className=" flex justify-evenly ">
          <div>我有空間</div>
          <div>|</div>
          <div>常見問題</div>
          <div>|</div>
          <div>使用者條款</div>
          <div>|</div>
          <div>隱私條款政策</div>
        </div>
        <div>
          xarehub享聚落
          <br />
          復北慶城
          <br />
          台北市松山區復興北路143號12樓
        </div>
      </div>
      {/* Right Block */}
      <div className=" flex justify-evenly w-30w ">
        <div>下載APP</div>
        <div>
          <div className=" flex ">
            <AiFillApple />
            App Store
          </div>
          <div className=" flex ">
            <SiGoogleplay />
            Google Play
          </div>
        </div>
        <div>聯絡我們</div>
        <div className=" flex ">
          <BsInstagram />
          <FaLine />
          <BsFacebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
