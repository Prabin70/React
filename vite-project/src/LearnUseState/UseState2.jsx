import React, { useState } from "react";

const UseState2 = () => {
  let [show, setShow] = useState(true);

  let [showPass, hidePass] = useState(false);

  return (
    <div>
      {/* <div>
        <img src="/public/vite.svg" alt="" />
      </div> */}
      {show === true && <img src="./public/vite.svg" />}
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default UseState2;
