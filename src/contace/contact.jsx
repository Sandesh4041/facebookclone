import React from 'react'
import { IoSearch } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import doremon from "../images/doremon.png"
import keymon from "../images/keymon.png"
import spongebob from "../images/sponge.png"
import bill from "../images/bill.png"



const contactData=[
  {
    icons:doremon,
    profile:"Doremon"
  },
  {
    icons:keymon,
    profile:"Keymon"
  },
  {
    icons:spongebob,
    profile:"Spongebob"
  },
  {
    icons:bill,
    profile:"Bill Gates"
  }
]

const Contacts = () => {
  return (
    <div>
    <div className='flex justify-between'>

      <div className='start'>
        <h3 className='font-bold'>Contacts</h3>
      </div>

      <div className='end flex gap-2 sm:gap-4'>
<IoSearch/>
<HiDotsHorizontal/>
      </div>

    </div>
    <div>
      {contactData.map((item,i)=>
      <div className='flex gap-1 p-2 mt-1 hover:bg-gray-400'>
      <img src={item.icons} alt="icons" className='w-8 h-8 rounded-full'/>
      <p className='ml-2 font-bold'>{item.profile}</p>
      </div>
      )}
    </div>
    </div>
  )
}

export default Contacts
