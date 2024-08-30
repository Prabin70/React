import React, { useState } from "react";

const AnotherState = () => {
  let [count, newValue] = useState(0);
  return (
    <div>
      <button
        style={{ padding: "20px 30px" }}
        onClick={() => {
          newValue(count + 1);
        }}
      >
        +
      </button>
      <div>
        <input type="text" placeholder={count} />
      </div>
      <button
        style={{ padding: "20px 30px" }}
        onClick={() => {
          newValue(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default AnotherState;
