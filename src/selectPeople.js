import './App.css'
import React, { useState } from 'react';
import Select from 'react-select';


function SelectPeople () {
   
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ]
  const [selectedOption, setSelectedOption] = useState(null);

  // const onchange = (e) => {
  //   setSelectedOption(e.target.value);
  // }
return(
  // <div/>
  <div className=" h-11 relative !rounded-xl text-sm font-semibold flex flex-row justify-start items-center pl-3 ">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className="rounded-xl"
      />
    </div>
  )
}

export default SelectPeople