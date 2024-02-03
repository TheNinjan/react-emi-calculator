import InputField from "./components/InputField";
import ResultField from "./components/ResultField";
import ResultGraph from "./components/ResultGraph";
import React, { useEffect } from "react";
import "./index.css";
import "./app.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(1);
  const [duration, setDuration] = useState(1);

  let [emi, setEmi] = useState(0);
  let [interest, setInterest] = useState(0);
  let [total, setTotal] = useState(amount);
  useEffect(() => {
    let calTotal = Math.floor(amount * Math.pow(1 + rate / 100, duration));
    setTotal(calTotal);
    let calEmi = Math.floor(total / (12 * duration));
    setEmi(calEmi);
    let calInterest = Math.floor(total - amount);
    setInterest(calInterest);
  }, [amount, rate, duration]);

  console.log("TOtal", total);
  console.log("Interest", interest);
  console.log("EMI---", emi);
  return (
    <>
      <h1 className="text-4xl font-extrabold text-blue-500 w-full text-center bg-gray-100">
        EMI CALCULATOR
      </h1>
      <InputField
        handleDuration={setDuration}
        handleRate={setRate}
        handleAmount={setAmount}
        amount={amount}
        rate={rate}
        duration={duration}
      />
      <h1 className="text-4xl font-extrabold text-blue-500 w-full text-center bg-gray-100">
        CALCULATED AMOUNTS
      </h1>
      <ResultField total={total} emi={emi} interest={interest} />
      <h1 className="text-4xl font-extrabold text-blue-500 w-full text-center bg-gray-100">
        GRAPHICAL
      </h1>
      <ResultGraph amount={amount} interest={interest} />
    </>
  );
}

export default App;
