import React, { useState } from "react";

const AnotherStateImage = () => {
  let [old, hide] = useState(true);

  return (
    <div>
      {old === true && <img src="/public/vite.svg" />}

      <button
        onClick={() => {
          hide(!old);
        }}
      >
        {old === true ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default AnotherStateImage;
