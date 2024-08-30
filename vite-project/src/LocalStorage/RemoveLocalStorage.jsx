import React from "react";

const RemoveLocalStorage = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("age");
  localStorage.removeItem("address");
  return <div>RemoveLocalStorage</div>;
};

export default RemoveLocalStorage;
