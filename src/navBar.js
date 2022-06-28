import React, { useState, Fragment } from 'react'
import './App.css';
import logo from './Logo.svg';

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <nav className="justify-around pt-2.5" onScroll={changeNavbarColor}>
                <img src={logo} className="w-45" alt="logo" />
                    <ul className=" flex justify-between items-center  w-1/3">
                        <li className="text-white text-sm font-normal text-center w-full">聚落據點</li>
                        <li className="text-white text-sm font-normal text-center w-full">會籍方案</li>
                        <li className="text-white text-sm font-normal text-center w-full">預約參觀</li>
                        <li className="text-white text-sm font-normal text-center w-full">免費體驗</li>
                        <li className="text-emerald-400 text-sm font-normal text-center w-full">下載APP</li>
                    </ul>
        </nav>
      )
  }

export default Navbar;