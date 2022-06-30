import './App.css'
import React, { useState, } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
function SelectDate () {
  const [startDate, setStartDate] = useState(new Date());

    return (
      <DatePicker 
        className=' 20w h-11 relative rounded-xl text-sm font-semibold flex flex-row justify-start items-center pl-3 '
        selected={startDate} 
        onChange={(date:Date) => setStartDate(date)} 
      />
    )
}

export default SelectDate