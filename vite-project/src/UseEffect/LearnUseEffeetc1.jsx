import React, { useEffect, useState } from "react";

const LearnUseEffeetc1 = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(10);
  useEffect(() => {
    //cleanup function is the function which is return by useEffect.
    //cleanup function doesnot execute on first render (component mount), but from the second render if useEffect execute, cleanup function runs at first then  the other code will run.

    //Mount => SHOW
    //Unmoount => hide
    console.log("Im useEffect");
    return () => {
      console.log("Im a cleanup function");
    };
  }, [count, count1]);
  return (
    <div>
      <div>Count is {count}</div>
      <div>Another count is {count1}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount1(count1 + 10);
        }}
      >
        Add by 10
      </button>
    </div>
  );
};

export default LearnUseEffeetc1;
