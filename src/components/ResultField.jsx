const ResultField = ({ emi, interest, total }) => {
  console.log("TotalR", total);
  console.log("InterestR", interest);
  console.log("EMI---R", emi);
  return (
    <div className="w-[80rem] m-auto h-[20rem]  bg-gray-200 text-center p-10">
      <div className="w-full text-2xl  mb-10 ">
        <h1>EMI per Month - {emi}</h1>
      </div>
      <div className="w-full text-2xl  mb-10 ">
        <h1>Total Interest - {interest} </h1>
      </div>
      <div className="w-full text-2xl  mb-10 ">
        <h1>Principal Amount - {total}</h1>
      </div>
    </div>
  );
};

export default ResultField;
