import React, { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

const UseState = () => {
  let [count, newValue] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          newValue(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          newValue(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseState;
