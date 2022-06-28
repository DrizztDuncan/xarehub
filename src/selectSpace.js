import './App.css'
import { useState, Fragment } from 'react'
import { Listbox } from '@headlessui/react'
import { IconName } from "react-icons/hi";
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const space = [
    { id: 1, name: '共享座位', unavailable: false },
    { id: 2, name: '多人獨立空間', unavailable: false },
    { id: 3, name: '會議活動空間', unavailable: false },
    { id: 4, name: '主題空間', unavailable: false },
  ]

function SelectSpace () {
    const [selectedSpace, setSelectedSpace] = useState(space[0])
return (
    <Listbox value={selectedSpace} onChange={setSelectedSpace} >
      
      <Listbox.Button className="bg-white w-20w h-11 relative rounded-xl text-sm font-semibold flex flex-row justify-start items-center pl-3 ">
         <HiOutlineOfficeBuilding className=' text-blue-500 block' />
          {selectedSpace.name}
      </Listbox.Button>

      <Listbox.Options  className=" w-20w bg-white absolute left-1/2 text-start text-sm font-semibold mt-10 cursor-pointer pl-2 ">
        {space.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
)

}

export default SelectSpace