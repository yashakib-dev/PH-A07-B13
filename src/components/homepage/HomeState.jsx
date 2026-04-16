import React from "react";
import { TiPlus } from "react-icons/ti";

const HomeState = () => {
  return (
    <div className="space-y-6 mt-20 text-center container lg:w-full w-[85%] mx-auto">
      <h2 className="text-5xl  font-bold ">
        Friends to keep close in your life
      </h2>
      <p className="text-[#64748B]/80 lg:w-120 mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white"><TiPlus />Add a Friend</button>

        <div className="lg:grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6 border-b pt-2 border-black/10 py-12">
            <div className="text-center bg-base-100 rounded-xl border-black/10 border py-10 px-10 shadow-sm">
                <p className="text-[#244D3F] font-semibold text-3xl">10</p>
                <p className="mt-2 text-[#64748B]">Total Friends</p>
            </div>
            <div className="text-center bg-base-100 rounded-xl border-black/10 border py-10 px-10 shadow-sm">
                <p className="text-[#244D3F] font-semibold text-3xl">3</p>
                <p className="mt-2 text-[#64748B]">On Track</p>
            </div>
            <div className="text-center bg-base-100 rounded-xl border-black/10 border py-10 px-10 shadow-sm">
                <p className="text-[#244D3F] font-semibold text-3xl">6</p>
                <p className="mt-2 text-[#64748B]">Need Attention</p>
            </div>
            <div className="text-center bg-base-100 rounded-xl border-black/10 border py-10 px-10 shadow-sm">
                <p className="text-[#244D3F] font-semibold text-3xl">12</p>
                <p className="mt-2 text-[#64748B]">Interactions This Month</p>
            </div>
        </div>
    </div>
  );
};

export default HomeState;
