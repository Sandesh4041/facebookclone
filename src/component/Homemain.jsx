import React, { useState } from 'react';
import mark from "../images/mark.png";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const homedata = [
  {
    icons: <MdOutlineOndemandVideo />,
    title: "live video"
  },
  {
    icons: <MdOutlinePhotoLibrary />,
    title: "photos/video"
  },
  {
    icons: <FaRegFaceLaugh />,
    title: "Feeling/activity",
    hide: true
  }
];

const Homemain = () => {

  const [feed, setFeed] = useState([]);
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState("");
  const [modalPopup, setModalPopup] = useState(false);

  const handleCreate = () => {
    setModalPopup(true);
  };

  const currentDate = new Date();
  const newDate = currentDate.toLocaleString('en-US', {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2024"
    month: 'long', // "December"
    day: 'numeric', // "29"
    hour: '2-digit', // "01"
    minute: '2-digit', // "30"
    second: '2-digit' // "45"
  });

  const newfeed = {
    content: title,
    date: newDate,
    post: photo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeed([...feed, newfeed]);
    console.log(newfeed);
    setTitle("");
    setPhoto("");
    setModalPopup(false);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleCancel = () => {
    setModalPopup(false);
  };

  return (
    <div className="flex flex-col w-[80%] m-0 mx-auto relative">
      <div className="bg-slate-200">
        <div className="flex gap-2 p-2">
          <img src={mark} alt="profile" className="w-10 h-10 rounded-full" />
          <input
            type="text"
            placeholder="What's on your mind, Mark?"
            className="grow text-gray-400 outline-none p-2 rounded-2xl border border-gray-500 w-[50%] xs:w-full"
          />
        </div>
        <div className="w-[95%] m-0 mx-auto border-t-2 border-gray-400 overflow-hidden">
          <ul className="flex gap-4 p-2 sm:p-4">
            {homedata.map((items, index) => (
              <li key={index} className="flex items-center gap-2">
                <span
                  className={`flex items-center text-xs lg:text-3xl text-blue-400 ${
                    items.hide ? "hidden me:block" : ""
                  }`}
                >
                  {items.icons}
                </span>
                <span
                  className={`font-bold ${items.hide ? "hidden me:block" : ""}`}
                >
                  {items.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex mt-2 gap-3 bg-slate-200 p-3">
        <span
          className="text-2xl text-blue-700 m-0 my-auto cursor-pointer"
          onClick={handleCreate}
        >
          <MdOutlineAddCircleOutline />
        </span>

        <div>
          <h3 className="font-bold">Create post</h3>
          <p>Share a photo or write something</p>
        </div>
      </div>

      {/* Modal Popup */}
      {modalPopup && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCancel}
        >
          <div
            className="bg-white p-6 rounded-3xl w-full sm:w-[400px] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write something here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="file"
                className="w-full p-3 border border-gray-400 rounded-lg mb-4"
                onChange={handlePhotoChange}
              />

              {photo && (
                <div className="mb-4">
                  <img
                    src={photo}
                    alt="Preview"
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                </div>
              )}

              <div className="flex justify-between gap-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-yellow-500 text-white p-3 rounded-lg w-full hover:bg-yellow-600 transition"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* this is about post or feed  */}

      <div>
        {feed && feed.map((items,index)=>
         <div className=" mt-2  bg-slate-200 p-3">
          <div className='flex gap-3'>
          <span
           className=" m-0 my-auto cursor-pointer"
         >
         <img src={mark} alt="mark" className="w-10 h-10 rounded-full" />
         </span>
         <div>
         <h3 className="font-bold">Mark  . <span className='text-blue-500 cursor-pointer'>Follow</span></h3>
         <p>{items.date}</p>
         </div>
        
          </div>

           <div className='mt-1'>
           <p className='p-2'>{items.content}</p>
           {items.post && (
          <img src={items.post} alt="post" className="object-cover w-full rounded-lg" />
        )}
         </div>

         <div className='flex justify-evenly mt-2 p-2 overflow-hidden w-full me:w-[90%] m-0 mx-auto border-t-2 border-gray-400 '>
          <div className='flex  gap-0 me:gap-3 justify-center items-center  hover:bg-gray-400 p-2 rounded cursor-pointer'>
          <AiOutlineLike />
          <p>Like</p>
          </div>
         
         <div className='flex gap-0 me:gap-3 justify-center items-center hover:bg-gray-400 p-2 rounded cursor-pointer'>
         <FaRegCommentDots />
         <p>Comment</p>
         </div>

         <div className='flex gap-0 me:gap-3 justify-center items-center  hover:bg-gray-400 p-2 rounded cursor-pointer'>
         <PiShareFat />
         <p>Share</p>
         </div>
          
         </div>

       </div>
        )}
        
      </div>
    </div>
  );
};

export default Homemain;

