import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultGraph = ({ amount, interest }) => {
  const data = {
    labels: ["Loan Amount", "Interest"],
    datasets: [
      {
        label: ["Amount", "Int"],
        data: [amount, interest],
        backgroundColor: ["#3300dd", "#aa3000"],
      },
    ],
  };
  return (
    <div className="w-[80rem] m-auto h-[30rem]  bg-gray-200 text-center p-10">
      <Pie className=" ml-[400px] h-[10rem] w-[10rem] " data={data} />
    </div>
  );
};

export default ResultGraph;
