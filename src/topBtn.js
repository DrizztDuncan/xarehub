import "./App.css";
import Hexagon from "./img/hexagon-svgrepo-com.svg";
import Arrow from "./img/arrow.svg";
import React, { useState, useEffect } from "react";

//source to top btn https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
const TopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [btnDisplay, setDisplay] = useState("none");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setDisplay("block") : setDisplay("none");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed top-2/3 right-3 w-10 z-50 "
      onClick={goToTop}
      style={{
        display: btnDisplay,
        // height: navSize,
        transition: "all 1s",
      }}
    >
      <img src={Hexagon} alt="" className=" w-10 absolute " />
      <img src={Arrow} alt="" className=" w-10 z-10 absolute " />
    </div>
  );
};

export default TopBtn;
