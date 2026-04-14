import FriendCard from "@/components/FriendCard";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { PiArchiveLight, PiBellSimpleZBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();
  return friends;
};
const FriendDetailsPage = async ({ params }) => {
  const friends = await friendsPromise();
  const { id } = await params;

  const friend = friends.find((friend) => String(friend.id) === id);
  console.log(friend);

  if (!friend) return <h1>Friend is not found!</h1>;

  const {
    name,
    picture,
    days_since_contact,
    goal_days,
    next_due,
    status,
    tags,
    bio,
  } = friend;

  return (
    <div className="lg:flex lg:w-[70%] w-[95%] mx-auto   gap-6 ">
        <div className="text-center lg:w-full w-[95%] mx-auto space-y-5 mb-20 mt-10 ">
      <div className=" bg-base-100 p-10 border-black/10 border rounded-2xl">
        <div>
          <Image
            src={friend.picture}
            alt={friend.name}
            width={100}
            height={100}
            className="rounded-full mx-auto"
          ></Image>

          <h2>{friend.name}</h2>
          <p className="text-[#64748B] text-[14px]">
            {friend.days_since_contact}
          </p>

          <span className="badge  bg-[#CBFADB] border-0 rounded-2xl mb-3 mt-3 p-3">
            {friend.tags}
          </span>

          <div>
            <span
              className={`${friend.status === "Overdue" ? ("bg-[#EF4444]" ? "bg-[#244D3F]" : "") : "bg-[#EFAD44]"} text-white badge border-0 rounded-2xl p-3`}
            >
              {friend.status}
            </span>
          </div>

         <div className="mt-2">
           <i className="text-[#64748B] "> "{friend.bio}" </i>
          <p className="text-[#64748B] text-sm">Preferred: {friend.email}</p>
         </div>

        </div>

       
      </div>

         <div className="bg-base-100 p-4 border-black/10 border rounded-xl">
            <p className="flex justify-center items-center gap-2 font-medium"><PiBellSimpleZBold  />Snooze 2 weeks</p>
        </div>

      <div className=" bg-base-100 p-4 border-black/10 border rounded-xl">
        <p className="flex justify-center items-center gap-2 font-medium"><PiArchiveLight />Archive</p>
      </div>

      <div className=" bg-base-100 p-4   border-black/10 border rounded-xl">
      <p className="flex justify-center text-red-500 items-center gap-2 font-medium"><RiDeleteBinLine />Delete</p></div>

    </div>

    <div className="lg:w-full w-[95%] mx-auto">
        <div className="lg:flex  gap-6 my-10">
            <div className="text-center bg-base-100 rounded-xl border-black/10 border py-10 px-10 shadow-sm"> <span className="text-[#244D3F] text-2xl font-semibold">62</span> <p>Days Since Contact</p></div>
            <div className="text-center bg-base-100 rounded-xl border-black/10 border py-10 px-10 shadow-sm"><span className="text-[#244D3F] text-2xl font-semibold">30</span> <p>Goal (Days)</p></div>
            <div className="text-center bg-base-100 rounded-xl border-black/10 border py-10 px-10 shadow-sm"> <span className="text-[#244D3F] text-2xl font-semibold">Feb 27, 2026</span> <p>Next Due</p></div>
        </div>

      <div className=" bg-base-100 rounded-xl border-black/10 border py-8  px-10 shadow-sm">
        <div className="flex justify-between">
        <p className="text-[#244D3F] font-bold text-2xl">Relationship Goal</p>
        <button className="btn">Edit</button>
      </div>
      
        <p>Connect every 30 days</p>
      
      </div>

      <div className=" bg-base-100 mt-8 rounded-xl border-black/10 border py-10 px-10 shadow-sm">
        <p className="text-[#244D3F] font-bold text-2xl mb-2 ">Quick Check-In</p>

        <div className="flex justify-evenly gap-4 ">
          <div className="bg-base-300 py-8 border-black/10 border text-center w-full  rounded-2xl "><FiPhoneCall className="mx-auto h-6 w-6"/>Call</div>
          <div className="bg-base-300 py-8 text-center border-black/10 border w-full rounded-2xl"> <MdOutlineTextsms className="mx-auto h-6 w-6" />Text</div>
          <div className="bg-base-300 py-8 text-center border-black/10 border w-full rounded-2xl"> <IoVideocamOutline className="mx-auto h-6 w-6"/>Video</div>
        </div>
      </div>


    </div>
    </div>
  );
};

export default FriendDetailsPage;
