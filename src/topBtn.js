import "./App.css";
import Hexagon from "./img/hexagon-svgrepo-com.svg";
import Arrow from "./img/arrow.svg";

const TopBtn = () => {
  return (
    <div className="sticky  z-50">
      <img src={Hexagon} alt="" className=" w-10 absolute " />
      <img src={Arrow} alt="" className=" w-10 z-10 absolute " />
    </div>
  );
};

export default TopBtn;
