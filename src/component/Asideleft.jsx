import React from 'react'
import Marketplace from '../pages/Marketplace'
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

const icons={
    friend:<LiaUserFriendsSolid/>,
    memories:<MdAccessTime/>,
    saved:<GiSaveArrow/>,
    groups:<MdOutlineGroups/>,
    video:<MdVideoSettings/>,
    Marketplace:<MdOutlineLocalGroceryStore/>,
    feeds:<IoNewspaperOutline/>,
    events:<SlCalender/>,
    adsmanager:<LiaBuysellads/>,
    birthdays:<BsCake2/>,
    climate:<TiWeatherPartlySunny/> 
}

const Asideleft = () => {
  return (
    <div>
      
    </div>
  )
}

export default Asideleft
