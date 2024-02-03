import React from "react";

const InputField = ({
  rate,
  duration,
  amount,
  handleAmount,
  handleRate,
  handleDuration,
}) => {
  return (
    <div className="w-[80rem] m-auto h-[25rem]  bg-gray-200 text-center p-10">
      <div className="w-full text-2xl  mb-10 ">
        <label className="">Loan Amount Between 10K to 10CR </label> <br />
        <input
          type="range"
          min={1000}
          max={1000000}
          className="w-[30rem]"
          onChange={(e) => handleAmount(e.target.value)}
        />{" "}
        {amount}
        <br />
      </div>
      <div className="w-full text-2xl  mb-10">
        <label className="">Rate of Interest</label> <br />
        <input
          type="range"
          min={0}
          max={50}
          className="outline-none rounded-md text-md w-[30rem] placeholder:text-sm items-center"
          placeholder="Enter Rate of Interest"
          onChange={(e) => handleRate(e.target.value)}
        />
        {`${rate} %`}
        <br />
      </div>
      <div className="w-full text-2xl  mb-10">
        <label className="">Duration of Loan (in years)</label> <br />
        <input
          className="outline-none rounded-md text-md w-[30rem] placeholder:text-sm "
          type="range"
          min={1}
          max={100}
          placeholder="Enter Duration In Year "
          onChange={(e) => handleDuration(e.target.value)}
        />
        {`${duration}Years`}
        <br />
      </div>
    </div>
  );
};

export default InputField;
