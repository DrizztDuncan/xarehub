import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";

const BurgerDD = () => {
  return (
    <button className=" block lg:hidden ">
      <GiHamburgerMenu className=" text-blue-500 block lg:hidden text-3xl " />
    </button>
  );
};
export default BurgerDD;
