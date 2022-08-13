import "./App.css";
import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { IconName } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const branch = [
  { id: 1, name: "復北慶城", unavailable: false },
  { id: 2, name: "享健身xarefit 信義松仁店", unavailable: false },
  { id: 3, name: "xarehub 直播室", unavailable: false },
  { id: 4, name: "鍛鍊基地 (Workout base)", unavailable: false },
];

function SelectLocation() {
  const [selectedLocation, setSelectedLocation] = useState(branch[0]);

  // https://headlessui.dev/react/listbox for dropdown

  return (
    <div>
      <Listbox value={selectedLocation} onChange={setSelectedLocation}>
        <Listbox.Button
          className="bg-white w-80w h-11 rounded-xl text-sm font-semibold flex flex-row justify-start 
        items-center pl-3 lg:w-20w m-3
      "
        >
          <FaMapMarkerAlt className=" text-blue-500 block  mr-2" />
          {selectedLocation.name}
        </Listbox.Button>

        <Listbox.Options className=" w-80w bg-white absolute text-start text-sm font-semibold  cursor-pointer mx-3 pl-2 lg:w-20w z-10">
          {branch.map((person) => (
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
export default SelectLocation;
