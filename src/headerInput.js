import './App.css'
import { useState,} from 'react'
import { Listbox } from '@headlessui/react'
import SelectLocation from './selectLocation'
import SelectDate from './selectDate'
import SelectPeople from './selectPeople'
import SelectSpace from './selectSpace'
import SelectTime from './selectTime'


function HeaderInput() {

  return (

    <div className='w-80w flex justify-evenly '>
        <SelectLocation />
        <SelectSpace />
        <SelectDate />
        <SelectTime />
        <SelectPeople />
    </div>
    
    // <Listbox value={selectedPerson} onChange={setSelectedPerson}>
    //   <Listbox.Button>{selectedPerson.name}</Listbox.Button>
    //   <Listbox.Options>
    //     {people.map((person) => (
    //       <Listbox.Option
    //         key={person.id}
    //         value={person}
    //         disabled={person.unavailable}
    //       >
    //         {person.name}
    //       </Listbox.Option>
    //     ))}
    //   </Listbox.Options>
    // </Listbox>
  )
}
export default HeaderInput