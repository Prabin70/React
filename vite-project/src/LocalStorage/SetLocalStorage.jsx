import React from "react";

const SetLocalStorage = () => {
  //Local storage is the memory for a particular domain in particular browser.
  //All data in localstorage are string
  //is Browser is closed local storage data will persist in local
  localStorage.setItem("name", "Ram");
  localStorage.setItem("age", "20");
  localStorage.setItem("address", "kapan");
  return <div>SetLocalStorage</div>;
};

export default SetLocalStorage;
