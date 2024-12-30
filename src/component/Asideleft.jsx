import React from 'react'

import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdAccessTime } from "react-icons/md";
import { GiSaveArrow } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { LiaBuysellads } from "react-icons/lia";
import { BsCake2 } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import data from "./data.json"



const icons={
    friend:<LiaUserFriendsSolid/>,
    memories:<MdAccessTime/>,
    saved:<GiSaveArrow/>,
    groups:<MdOutlineGroups/>,
    video:<MdVideoSettings/>,
    marketplace:<MdOutlineLocalGroceryStore/>,
    feeds:<IoNewspaperOutline/>,
    events:<SlCalender/>,
    adsmanager:<LiaBuysellads/>,
    birthdays:<BsCake2/>,
    climate:<TiWeatherPartlySunny/> 
}

const Asideleft = () => {
  return (
    <div >
    <div>
      <ul>
        {data.map((item,index)=>
          <li key={index} className={`hover:bg-gray-200 rounded p-3 flex items-center cursor-pointer`}>
            <span className={`text-blue-600 w-8 h-8 text-xl flex justify-center items-center`}>{icons[item.icon]}</span>
            <span className='ml-2 font-bold'>{item.content}</span></li>
          
        )}
      </ul>
    </div>
    </div>
  )
}

export default Asideleft
