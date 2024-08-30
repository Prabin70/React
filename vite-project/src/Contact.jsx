import React from "react";
import { replace, useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div>Contact section</div>

      <button
        onClick={() => {
          navigate("/about", { replace: true });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Contact;
