import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import { Listbox } from "@headlessui/react";
import logo from "./Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerDD from "./burgerDD";

// 參考 https://codesandbox.io/s/react-scroll-navbar-z76ig
// https://codesandbox.io/s/tailwind-react-hamburger-menu-tjhfyx?file=/src/components/Header/Header.js

const Navbar = () => {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#001144") : setnavColor("transparent");
    // window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  // control burger menu
  const [isShown, setIsShown] = useState(false);
  // const handleClick = (event) => {
  //   setIsShown(true);
  // };

  return (
    <nav
      className="flex flex-col justify-around items-center p-5 z-30 fixed "
      style={{
        backgroundColor: navColor,
        // height: navSize,
        transition: "all 1s",
      }}
    >
      <div className="flex items-center justify-between w-80w">
        <img src={logo} alt="logo" />
        <ul className=" hidden justify-between items-center w-1/2 lg:flex ">
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
        {/* https://codesandbox.io/s/tailwind-react-hamburger-menu-tjhfyx?file=/src/components/Header/Header.js:343-1993 */}
        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="w-90w h-[50px] flex justify-evenly items-start"
              onClick={() => setIsNavOpen(false)}
            >
              <img src={logo} className="w-45" alt="logo" />
              <svg
                className="h-12 w-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[200px]">
              <li className=" w-80w mx-auto my-3 uppercase text-3xl font-black	active:ring ring-white active:bg-blue-800 rounded-lg text-center">
                <a className="text-white active:text-blue-300">聚落據點</a>
              </li>
              <li className=" w-80w mx-auto my-3 uppercase text-3xl font-black	active:ring ring-white active:bg-blue-800 rounded-lg text-center">
                <a className="text-white active:text-blue-300">會籍方案</a>
              </li>
              <li className=" w-80w mx-auto my-3 uppercase text-3xl font-black	active:ring ring-white active:bg-blue-800 rounded-lg text-center">
                <a className="text-white active:text-blue-300">預約參觀</a>
              </li>
              <li className=" w-80w mx-auto my-3 uppercase text-3xl font-black	active:ring ring-white active:bg-blue-800 rounded-lg text-center">
                <a className="text-white active:text-blue-300">免費體驗</a>
              </li>
              <li className="  w-80w mx-auto my-3 uppercase text-3xl font-black	active:ring ring-white active:bg-blue-800 rounded-lg text-center">
                <a className="text-white active:text-blue-300">下載APP</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
