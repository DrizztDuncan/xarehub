import "./App.css";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import SelectLocation from "./selectLocation";
import SelectDate from "./selectDate";
import SelectPeople from "./selectPeople";
import SelectSpace from "./selectSpace";
import SelectTime from "./selectTime";

function HeaderInput() {
  return (
    <div className=" flex flex-col justify-around py-2 bg-blue-2 rounded-2xl lg:flex-row relative">
      <SelectLocation />
      <SelectSpace />
      <SelectDate />
      <SelectTime />
      <SelectPeople />
    </div>
  );
}
export default HeaderInput;
