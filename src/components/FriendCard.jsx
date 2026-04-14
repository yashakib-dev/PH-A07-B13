import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({friend}) => {
    return (
        <Link href={`/friend/${friend.id}`} className='text-center bg-base-100 p-10 border-black/10 border rounded-2xl'>
            <Image
            src={friend.picture} alt={friend.name}
             width={100}
             height={100}
             className='rounded-full mx-auto'></Image>

             <h2>{friend.name}</h2>
             <p className='text-[#64748B] text-[14px]'>{friend.days_since_contact}</p>

             <span className='badge  bg-[#CBFADB] border-0 rounded-2xl mb-3 mt-3 p-3'>{friend.tags}</span>

             <div>
                <span className={`${friend.status === "Overdue" ? "bg-[#EF4444]"? "bg-[#244D3F]" :"" : "bg-[#EFAD44]"} text-white badge border-0 rounded-2xl p-3`}>{friend.status}</span>
             </div>
        </Link>
        
    );
};

export default FriendCard;