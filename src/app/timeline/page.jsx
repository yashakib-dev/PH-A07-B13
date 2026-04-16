"use client";
import { CheckInContext } from "@/context/CheckInProvider";
import { useContext, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

const timelinePage = () => {
  const { friendsData } = useContext(CheckInContext);

  const [filter, setFilter] = useState("Filter timeline");
  const actionIcons = {
    Call: <FiPhoneCall className="h-5 w-5" />,
    Text: <MdOutlineTextsms className="h-5 w-5" />,
    Video: <IoVideocamOutline className="h-5 w-5" />,
  };
  const filteredData = [...friendsData]
    .reverse()
    .filter((friend) =>
      filter === "Filter timeline" ? true : friend.action === filter,
    );
  return (
    <div className="space-y-5 my-30 w-[85%] lg:w-full container mx-auto ">
        <h2 className="font-bold text-5xl mb-10">Timeline</h2>
      <div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 border w-80  border-black/10 rounded-md bg-base-200"
        >
          <option>Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video Call">Video Call</option>
        </select>
      </div>
      {filteredData.length === 0 ? (
        <p className="text-center border border-black/10 rounded-xl p-10 text-gray-500">
          No activity found
        </p>
      ) : (
        filteredData.map((friend, ind) => {
          return (
            <div key={ind} className="container mx-auto  ">
              <div className="bg-base-100 flex items-center gap-4  p-5  w-full rounded-xl border-black/10 border">
                <div>{actionIcons[friend.action]}</div>
                <div>
                  <p>
                    {friend.action}{" "}
                    <span className="text-[#64748B]">
                      with {friend.name}
                    </span>{" "}
                  </p>
                  <p className="text-[#64748B] text-sm">
                    {new Date(friend.time).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default timelinePage;
