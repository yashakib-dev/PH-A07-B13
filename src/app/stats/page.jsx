"use client"
import { CheckInContext } from "@/context/CheckInProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const statsPage = () => {
    const {friendsData} = useContext(CheckInContext);

        const callData = friendsData.filter(f => f.action === "Call");
        const textData = friendsData.filter(f => f.action === "Text");
        const videoData = friendsData.filter(f => f.action === "Video");

        const data = [
        {name: "Call", value: callData.length, fill:"#244D3F"},
        {name: "Text", value: textData.length, fill:"#7E35E1"},
        {name: "Video", value: videoData.length, fill:"#37A163"}
    ]
    
  return (
    <div>
      <h2 className="lg:text-5xl text-3xl mt-20 lg:w-full w-[85%] container mx-auto font-bold">Friendship Analytics </h2>
      {
        friendsData.length === 0 ? (
        <p className="text-center lg:w-full w-[85%] text-xl border border-black/10 rounded-xl p-10 container mx-auto h-30 mb-54 my-10 text-gray-500">
          No stats found!
        </p>
      ) : (
        <div className="container mx-auto my-20 lg:w-full w-[85%]">
      
      <div className="bg-base-100 p-10 rounded-xl border border-black/10 mt-10">
                <h2 className="text-xl lg:text-2xl  font-medium text-[#244D3F]">By Interaction Type</h2>
        <PieChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        margin: "auto",
        marginTop: "40px",
        paddingBottom:"40px",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
      </div>
    </div>
      )
      }
    </div>
    
  );
};

export default statsPage;
