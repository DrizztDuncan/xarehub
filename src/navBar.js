import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import { Listbox } from "@headlessui/react";
import logo from "./Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <div>
        <GiHamburgerMenu className=" text-blue-500 block" />
        <Listbox value={selectedMenu} onChange={setSelectedMenu}>
          <Listbox.Button className=" w-auto h-11 relative rounded-xl text-sm font-semibold flex flex-row justify-start items-center pl-3  m-3 md:w-1/4 md:hidden ">
            {selectedMenu.value}
          </Listbox.Button>

          <Listbox.Options className="w-40 bg-white absolute left-3/4 text-start text-sm font-semibold mt-12 ml-12 cursor-pointer pl-2 ">
            {menu.map((person) => (
              <Listbox.Option
                key={person.value}
                value={person}
                disabled={person.unavailable}
              >
                {person.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </nav>
  );
};

export default Navbar;
