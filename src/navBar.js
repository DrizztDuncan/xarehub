import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import logo from "./Logo.svg";

// 參考 https://codesandbox.io/s/react-scroll-navbar-z76ig react-scroll-navbar

const Navbar = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#001144") : setnavColor("transparent");
    // window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <nav
      className="justify-around p-5 z-50"
      style={{
        backgroundColor: navColor,
        // height: navSize,
        transition: "all 1s",
      }}
    >
      <img src={logo} className="w-45" alt="logo" />
      <ul className=" flex justify-between items-center  w-1/3">
        <li className="cursor-pointer text-white text-base font-normal text-center w-full hover:text-blue-4">
          聚落據點
        </li>
        <li className="cursor-pointer text-white text-base font-normal text-center w-full hover:text-blue-4">
          會籍方案
        </li>
        <li className="cursor-pointer text-white text-base font-normal text-center w-full hover:text-blue-4">
          預約參觀
        </li>
        <li className="cursor-pointer text-white text-base font-normal text-center w-full hover:text-blue-4">
          免費體驗
        </li>
        <li className="cursor-pointer text-emerald-400 text-base font-normal text-center w-full hover:text-blue-4">
          下載APP
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
