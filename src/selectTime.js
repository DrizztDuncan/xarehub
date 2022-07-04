import './App.css'
import { useState } from 'react';
import { Button, TimePicker } from 'antd';
import 'antd/dist/antd.css';


function SelectTime () {
    const [open, setOpen] = useState(false);
    return (
            <TimePicker
                open={open}
                onOpenChange={setOpen}
                className='w-20w h-11 relative !border-hidden !rounded-xl text-sm font-semibold flex flex-row justify-start items-center '
                renderExtraFooter={() => (
                <Button size="small" type="primary" onClick={() => setOpen(false)}>
                    OK
                </Button>
                )}
            />
      
    );
  
}

export default SelectTime