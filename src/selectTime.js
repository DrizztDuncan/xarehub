import './App.css'
import { useState } from 'react';
import moment from 'moment';
import { Button, TimePicker } from 'antd';
import 'antd/dist/antd.css';


function SelectTime () {
    // const [open, setOpen] = useState(false);
    const onChange = (time, timeString) => {
        console.log(time, timeString);
      };
    return (
            // <TimePicker
            //     open={open}
            //     onOpenChange={setOpen}
            //     className=' h-11 relative !border-hidden !rounded-xl text-sm font-semibold flex flex-row justify-start items-center '
            //     renderExtraFooter={() => (
            //     <Button size="small" type="primary" onClick={() => setOpen(false)}>
            //         OK
            //     </Button>
            //     )}
            // />

            <TimePicker 
            className=' h-11 relative !border-hidden !rounded-xl text-sm font-semibold flex flex-row justify-start items-center '
            onChange={onChange} defaultValue={moment('00:00:00', 'HH:mm:ss')} 

            />
      
    );
  
}

export default SelectTime