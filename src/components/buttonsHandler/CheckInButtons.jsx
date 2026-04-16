"use client"
import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { CheckInContext } from '@/context/CheckInProvider';
import { toast } from 'react-toastify';
const CheckInButtons = ({friend}) => {
    
    const { setFriendsData} = useContext(CheckInContext);
    
   const handleCheckInButtons = (type) => {
    const updatedFriend = {
        ...friend,
        action: type,
        time: new Date().toISOString(), 
    };

    setFriendsData(prev => [...prev, updatedFriend]);
    toast.success(` ${type} with ${friend.name}`)
};

    return (
        <div className='flex justify-evenly gap-4 w-full'>
            <button onClick={() => handleCheckInButtons("Call")}
             className="hover:cursor-pointer hover:bg-gray-200 bg-base-300 py-8 border-black/10 border text-center w-full  rounded-2xl ">
              <FiPhoneCall className="mx-auto h-6 w-6" />
              Call
            </button>
            <button onClick={() => handleCheckInButtons("Text")}
             className="hover:cursor-pointer hover:bg-gray-200 bg-base-300 py-8 text-center border-black/10 border w-full rounded-2xl">
              {" "}
              <MdOutlineTextsms className="mx-auto h-6 w-6" />
              Text
            </button>
            <button  onClick={() => handleCheckInButtons("Video Call")}
             className="hover:cursor-pointer hover:bg-gray-200 bg-base-300 py-8 text-center border-black/10 border w-full rounded-2xl">
              {" "}
              <IoVideocamOutline className="mx-auto h-6 w-6" />
              Video
            </button>
        </div>
    );
};

export default CheckInButtons;