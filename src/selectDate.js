import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IconName } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
function SelectDate() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      className="bg-white w-80w h-11 rounded-xl text-sm font-semibold flex flex-row justify-start 
        items-center pl-3 lg:w-20w m-3"
    >
      <BsFillCalendarCheckFill className=" text-blue-500 block mr-2" />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="w-70w lg:w-10w"
      />
    </div>
  );
}

export default SelectDate;
