import React, { useState } from "react";

const UseState4 = () => {
  let [text, password] = useState("password");
  return (
    <div>
      <label htmlFor="">Password</label>
      <br />
      <input type={text} placeholder="Enter Your Password" />
      {/* if we keep the type password here it wont work */}
      <button
        onClick={() => {
          password("text");
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          password("password");
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default UseState4;
