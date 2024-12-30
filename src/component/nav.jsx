import React, { useState } from "react";
import facebook from "../images/facebook.png";
import { IoSearch } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdVideoSettings } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";
import { GrGamepad } from "react-icons/gr";
import { BiSolidFoodMenu } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import mark from "../images/mark.png";
import { useNavigate } from "react-router-dom";

// import {Link} from "react-router-dom";

const Nav = () => {
  const[navstate,setNavstate]=useState("");
  const navigation=useNavigate();

  const handleNavigate=(path)=>{
    setNavstate(path);
    navigation(path);
  }
  return (
    <div className="fixed top-0 left-0 right-0 z-10  flex justify-between  sm:gap-3 md:gap-4 lg:gap-3 border-b-2 border-gray-400 shadow-gray-500 bg-white p-3">
      <div className=" flex gap-2 items-center">
        <img src={facebook} alt="facebook" className="w-8 h-8 xs:w-10 xs:h-10  " />
        <div></div>

        <div className="rounded-full block md:hidden bg-gray-100 w-10 h-10 ">
            <div className="flex w-full h-full  items-center justify-center ">

          <IoSearchOutline />
            </div>
        </div>

        <div className="hidden md:block">
          <div className=" flex gap-2 bg-gray-50 border-2 border-gray-300 p-1 rounded-full outline-none ">
            <IoSearch className="mt-1.5 ml-1" />
            <input
              type="text"
              placeholder="search facebook"
              className=" w-24 md:36 lg:w-52 bg-gray-50 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <ul className="flex  justify-evenly gap-8 lg:gap-16 ">

          <li className={`w-full h-full cursor-pointer sm:ml-2  lg:ml-5 ${navstate==="/"?"border-b-2 border-blue-500":""}`}
          onClick={()=>handleNavigate("/")} >
            {/* <link to="/">   </link> */}
            <IoHomeOutline className={`w-8 h-8  text-gray-600  ${navstate==="/"?"text-blue-500":""}`}/>
            </li>

          <li className={`w-full h-full cursor-pointer sm:ml-2  lg:ml-5 ${navstate==="/friends"?"border-b-2 border-blue-500":""}`}
           onClick={()=>handleNavigate("/friends")}>
            {/* <Link to="/friends"></Link> */}
            <LiaUserFriendsSolid className={`w-8 h-8  text-gray-600 ${navstate==="/friends"?"text-blue-500":""}`}/>
            </li>

          <li className={`w-full h-full cursor-pointer sm:ml-2  lg:ml-5 ${navstate==="/video"?"border-b-2 border-blue-500":""}`}
           onClick={()=>handleNavigate("/video")}>
            {/* <Link to="/video"></Link> */}
            < MdVideoSettings className={`w-8 h-8  text-gray-600 ${navstate==="/video"?"text-blue-500":""}`}/>
            </li>

          <li className={`w-full h-full cursor-pointer sm:ml-2  lg:ml-5 ${navstate==="/marketplace"?"border-b-2 border-blue-500":""}`}
           onClick={()=>handleNavigate("/marketplace")}>
            {/* <Link to="/marketplace"></Link> */}
            <LiaStoreAltSolid className={`w-8 h-8  text-gray-600 ${navstate==="/marketplace"?"text-blue-500":""}`}/>
            </li>

          <li className={`w-full h-full cursor-pointer sm:ml-2  lg:ml-5 ${navstate==="/gaming"?"border-b-2 border-blue-500":""}`}
           onClick={()=>handleNavigate("/gaming")}>
          {/* <Link to="gaming"></Link> */}
          <GrGamepad className={`w-8 h-8  text-gray-600 ${navstate==="/gaming"?"text-blue-500":""}`}/>
            </li>

        </ul>
      </div>

      <div>
        <ul className="flex justify-evenly items-center gap-4">

          <li className="hover:border-b-2 border-blue-500 cursor-pointer " >
            <BiSolidFoodMenu className="w-5 h-5 xs:w-8 xs:h-8  "/></li>

          <li className="hover:border-b-2 border-blue-500 cursor-pointer">
            <AiFillMessage className="w-5 h-5 xs:w-8 xs:h-8"/></li>

          <li className="hover:border-b-2 border-blue-500 cursor-pointer">
            <IoNotifications className="w-5 h-5 xs:w-8 xs:h-8 "/></li>

          <li className="w-8 h-8 xs:w-10 xs:9 sm:9 sm:h-11 "><img src={mark} alt="mark" className=" rounded-full" />
          </li>

        </ul>
      </div>
    </div>
  
  
  );
};

export default Nav;
