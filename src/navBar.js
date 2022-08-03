import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import { Listbox } from "@headlessui/react";
import logo from "./Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerDD from "./burgerDD";

// 參考 https://codesandbox.io/s/react-scroll-navbar-z76ig

const Navbar = () => {
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
  const menu = [
    { value: "1", label: "1", unavailable: false },
    { value: "2", label: "2", unavailable: false },
    { value: "3", label: "3", unavailable: false },
    { value: "4", label: "4", unavailable: false },
    { value: "5", label: "5", unavailable: false },
    { value: "6", label: "6", unavailable: false },
    { value: "7", label: "7", unavailable: false },
    { value: "8", label: "8", unavailable: false },
    { value: "9", label: "9", unavailable: false },
    { value: "10", label: "10", unavailable: false },
  ];
  const [selectedMenu, setSelectedMenu] = useState(menu[0]);

  return (
    <nav
      className="justify-around p-5 z-30"
      style={{
        backgroundColor: navColor,
        // height: navSize,
        transition: "all 1s",
      }}
    >
      <img src={logo} className="w-45" alt="logo" />
      <ul className=" hidden justify-between items-center  w-1/3 md:flex ">
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

      {/* burger menu */}
      <BurgerDD />
    </nav>
  );
};

export default Navbar;
