import './App.css'
import React, { useState, } from 'react'
import DatePicker from "react-datepicker";
import { IconName } from "react-icons/bs";
import { BsFillCalendarCheckFill } from 'react-icons/bs';


import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
function SelectDate () {
  const [startDate, setStartDate] = useState(new Date());

    return (
      <div className='bg-white w-auto h-11 relative rounded-xl text-sm font-semibold flex flex-row justify-start items-center pl-3  m-3 md:w-1/4 '>
          <BsFillCalendarCheckFill className=' text-blue-500 block' />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      
    )
}

export default SelectDate