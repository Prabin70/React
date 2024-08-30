import React, { useState } from "react";

const ImageState = () => {
  let [show, hide] = useState(true);

  return (
    <div>
      {show === true && <img src="/public/vite.svg" />}

      <button
        onClick={() => {
          hide(false);
        }}
      >
        Hide
      </button>
      <button
        onClick={() => {
          hide(true);
        }}
      >
        {" "}
        Show
      </button>
    </div>
  );
};

export default ImageState;
