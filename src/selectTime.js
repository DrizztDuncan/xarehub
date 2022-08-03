import './App.css'
import { useState } from 'react';
import moment from 'moment';
import { Button, TimePicker } from 'antd';
import 'antd/dist/antd.min.css';


function SelectTime () {
    // const [open, setOpen] = useState(false);
    const onChange = (time, timeString) => {
        console.log(time, timeString);
      };
    return (

            <TimePicker 
            className=' h-11 relative !border-hidden !rounded-xl text-sm font-semibold flex flex-row justify-start items-center Harrison md:w-1/4 md:m-0 '
            onChange={onChange} defaultValue={moment('00:00:00', 'HH:mm:ss')} 

            />
      
    );
  
}

export default SelectTime