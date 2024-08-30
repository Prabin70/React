import React from "react";

const GetSessionStorage = () => {
  let name = sessionStorage.getItem("name");
  let age = sessionStorage.getItem("address");

  return <div>GetSessionStorage</div>;
};

export default GetSessionStorage;
