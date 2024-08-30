import React, { useState } from "react";
import "../LearnUseState/state.css";

const UseState1 = () => {
  //component will render if state variable is changed
  let [defaultValue, newValue] = useState(0);
  console.log("I'm prabin dada");

  function increment() {
    newValue(defaultValue + 1);
  }
  function decrement() {
    newValue(defaultValue - 1);
  }

  function reset() {
    newValue(0);
  }

  return (
    <div>
      <div> {defaultValue}</div>
      <button className="active" onClick={increment}>
        Increment{" "}
      </button>
      <button onClick={decrement}>Decrement </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseState1;
