import "./App.css";
import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { IconName } from "react-icons/hi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const space = [
  { id: 1, name: "共享座位", unavailable: false },
  { id: 2, name: "多人獨立空間", unavailable: false },
  { id: 3, name: "會議活動空間", unavailable: false },
  { id: 4, name: "主題空間", unavailable: false },
];

function SelectSpace() {
  const [selectedSpace, setSelectedSpace] = useState(space[0]);
  return (
    <div>
      <Listbox value={selectedSpace} onChange={setSelectedSpace}>
        <Listbox.Button
          className="bg-white w-80w h-11 relative rounded-xl text-sm font-semibold flex flex-row 
        justify-start items-center pl-3  m-3 lg:w-20w "
        >
          <HiOutlineOfficeBuilding className=" text-blue-500 block  mr-2" />
          {selectedSpace.name}
        </Listbox.Button>

        <Listbox.Options className="w-80w lg:w-20w bg-white absolute text-start text-sm font-semibold mx-3 cursor-pointer pl-2 z-10 ">
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
    </div>
  );
}

export default SelectSpace;
