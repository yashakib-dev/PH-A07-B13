import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div >
           <div className='flex bg-[#023702] flex-col gap-6 text-6xl font-bold justify-center items-center h-screen'>
            <p className='text-white'>This page is not found!😔</p>
            <Link href={'/'}><button className='btn bg-[#244D3F]  text-white w-55 hover:bg-[#356857]  h-13'>Back to Home</button> </Link>
           </div>
           
        </div>
    );
};

export default notFound;