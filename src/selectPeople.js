import "./App.css";
import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { IconName } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

function SelectPeople() {
  const people = [
    { value: "1", label: "1", unavailable: false },
    { value: "2", label: "2", unavailable: false },
    { value: "3", label: "3", unavailable: false },
    { value: "4", label: "4", unavailable: false },
    { value: "5", label: "5", unavailable: false },
    { value: "6", label: "6", unavailable: false },
    { value: "7", label: "7", unavailable: false },
    { value: "8", label: "8", unavailable: false },
    { value: "9", label: "9", unavailable: false },
    { value: "10", label: "10", unavailable: false },
  ];
  const [selectedPeople, setSelectedPeople] = useState(people[0]);

  return (
    <div>
      <Listbox value={selectedPeople} onChange={setSelectedPeople}>
        <Listbox.Button
          className="bg-white w-80w h-11 relative rounded-xl text-sm font-semibold flex flex-row justify-start items-center
         pl-3  m-3 lg:w-10w "
        >
          <MdPeopleAlt className=" text-blue-500 block  mr-2" />
          {selectedPeople.value}
        </Listbox.Button>

        <Listbox.Options className=" w-80w bg-white absolute text-start text-sm font-semibold  cursor-pointer pl-2 lg:w-10w z-10 mx-3">
          {people.map((person) => (
            <Listbox.Option
              key={person.value}
              value={person}
              disabled={person.unavailable}
            >
              {person.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default SelectPeople;
