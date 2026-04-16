"use client";
import useFriends from "@/hooks/useFriends";
import FriendCard from "../FriendCard";
import { MoonLoader } from "react-spinners";

const Friends = () => {
  const { friends, loading } = useFriends();

  return (
    <div className="container mx-auto lg:w-full w-[85%] ">
      <h2 className="text-2xl font-semibold mt-10">Your Friends</h2>

      {loading ? (
        <span className="flex  my-10 "><MoonLoader className="mx-auto " /></span>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6 my-10">
          {friends.map((friend) => {
            return <FriendCard friend={friend} key={friend.id}></FriendCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default Friends;
