import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-white rounded p-10">
       
       <h2 className="lg:text-6xl text-5xl font-bold">KeenKeeper</h2>
       <p className="text-white/70 ">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>   
        <nav>
    <h6 className="footer-title">Social Links</h6>
    <div className="grid grid-flow-col gap-4 ">
      <a> 
        <TbBrandInstagramFilled className='bg-[#ffffff] rounded-full text-black w-10 h-10 p-2 ' />
      </a>
      <a>
        <FaSquareFacebook className='bg-[#ffffff] rounded-full text-black w-10 h-10 p-2 ' />
      </a>
      <a>
        <BsTwitterX className='bg-[#ffffff] rounded-full text-black w-10 h-10 p-2 ' />
      </a>
    </div>
  </nav>


   <div className='text-[#ffffffab] md:flex border-t border-white/25 py-6 justify-between container mx-auto px-8'>
    <p>© 2026 KeenKeeper. All rights reserved.</p>
    <div className='flex md:text-md text-sm  gap-6 px-4'>
        <a href="">Privacy Policy</a>
        <a href="">Terms of Service</a>
        <a href="">Cookies</a>
    </div>
   </div>
      </footer>
    </div>
  );
};

export default Footer;
