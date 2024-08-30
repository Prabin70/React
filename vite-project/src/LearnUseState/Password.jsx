import React, { useState } from "react";

const Password = () => {
  let [defaultPass, showPass] = useState("password");
  return (
    <div>
      <label>Password</label>
      <input type={defaultPass} />

      <button
        onClick={() => {
          defaultPass === "password" ? showPass("text") : showPass("password");
        }}
      >
        {defaultPass === "password" ? "show" : "hide"}
      </button>
    </div>
  );
};

export default Password;
