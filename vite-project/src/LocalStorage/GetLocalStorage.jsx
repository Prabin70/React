import React from "react";

const GetLocalStorage = () => {
  let name = localStorage.getItem("name");
  let age = localStorage.getItem("age");

  return (
    <>
      My Name is {name} and age is {age}
    </>
  );
};

export default GetLocalStorage;
