import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { SiGoogleplay } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" relative bottom-0 flex  justify-center bg-footer-back text-white m-auto py-2">
      <div className="flex justify-center">
        <div>© 2022 Nightblue Music</div>
        <div>Privacy Policy</div>
        <div>|</div>
        <div>Terms of Use</div>
      </div>
    </footer>
  );
};

export default Footer;
