import "./App.css";
import { useState } from "react";
import moment from "moment";
import { Button, TimePicker } from "antd";
import "antd/dist/antd.min.css";
import { IconName } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";

function SelectTime() {
  // const [open, setOpen] = useState(false);
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <div
      className="bg-white w-80w h-11 relative rounded-xl text-sm font-semibold flex flex-row justify-start items-center
    pl-3  m-3 lg:w-10w "
    >
      <MdAccessTimeFilled className=" text-blue-500 block  mr-2" />
      <TimePicker
        className=" h-11 relative !border-hidden !rounded-xl text-sm font-semibold flex flex-row justify-start items-center 
     w-70w lg:w-[8vw] lg:m-0 "
        onChange={onChange}
        defaultValue={moment("00:00:00", "HH:mm:ss")}
        clearIcon
      />
    </div>
  );
}

export default SelectTime;
