import React, { useState } from "react";

const UseState3 = () => {
  let [show, setShow] = useState(true);

  //   let [showPass, hidePass] = useState(false);

  return (
    <div>
      {/* <div>
        <img src="/public/vite.svg" alt="" />
      </div> */}
      {show === true && <img src="./public/vite.svg" />}
      <button
        // onClick={() => {
        //   if (show === true) {
        //     setShow(false);
        //   } else {
        //     setShow(true);
        //   }
        // }}
        onClick={() => {
          setShow(!show);
        }}
      >
        {show === true ? "Hide" : "Show"}
      </button>
      {/* <button
        onClick={() => {
          setShow(false);
        }}
      >
        Hide
      </button> */}
    </div>
  );
};

export default UseState3;
