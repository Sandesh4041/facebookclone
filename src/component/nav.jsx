import React from "react";
import facebook from "../images/facebook.png";
import { IoSearch } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdVideoSettings } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";
import { GrGamepad } from "react-icons/gr";
import { BiSolidFoodMenu } from "react-icons/bi";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import mark from "../images/mark.png"

const Nav = () => {
  return (
    <div className="flex justify-between  sm:gap-3 md:gap-4 lg:gap-3 border-b-2 border-gray-400 shadow-gray-500 bg-white p-3">
      <div className="flex gap-2 items-center">
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
        <ul className="flex  justify-evenly gap-16 ">

          <li className="hover:border-b-2 border-blue-500 w-full h-full cursor-pointer sm:ml-5" >
            <IoHomeOutline className="w-8 h-8 text-gray-600 "/></li>

          <li className="hover:border-b-2 border-blue-500 w-full h-full cursor-pointer">
            <LiaUserFriendsSolid className="w-8 h-8  text-gray-600"/></li>

          <li className="hover:border-b-2 border-blue-500 w-full h-full cursor-pointer">
            < MdVideoSettings className="w-8 h-8  text-gray-600"/></li>

          <li className="hover:border-b-2 border-blue-500 w-full h-full cursor-pointer">
            <LiaStoreAltSolid className="w-8 h-8  text-gray-600"/></li>

          <li className="hover:border-b-2 border-blue-500 w-full h-full cursor-pointer">
            <GrGamepad className="w-8 h-8  text-gray-600"/></li>

        </ul>
      </div>

      <div>
        <ul className="flex justify-evenly items-center gap-4">

          <li className="hover:border-b-2 border-blue-500 cursor-pointer " >
            <BiSolidFoodMenu className="w-5 h-5 xs:w-8 xs:h-8  "/></li>

          <li className="hover:border-b-2 border-blue-500 cursor-pointer">
            <LuMessageSquareMore className="w-5 h-5 xs:w-8 xs:h-8"/></li>

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
