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
    <div className="container mx-auto my-20 lg:w-full w-[85%]">
        <h2 className="text-xl lg:text-2xl font-medium text-[#244D3F]">Friendship Analytics</h2>
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
  );
};

export default statsPage;
