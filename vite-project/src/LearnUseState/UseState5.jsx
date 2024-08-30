import React, { useState } from "react";

const UseState5 = () => {
  let [text, password] = useState("password");
  return (
    <div>
      <label htmlFor="">Password</label>
      <br />
      <input type={text} placeholder="Enter Your Password" />
      {/* if we keep the type password here it wont work */}
      <button
        onClick={() => {
          text === "password" ? password("text") : password("password");
        }}
      >
        {text === "password" ? "Show" : "hide"}
      </button>
    </div>
  );
};

export default UseState5;
