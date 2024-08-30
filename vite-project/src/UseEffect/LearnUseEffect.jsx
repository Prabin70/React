import React, { useEffect } from "react";

const LearnUseEffect = () => {
  //useEffect function is asynchronous function which will lexecute oncce all the code executed. it means it will executed once the dom peinted on the browser.

  useEffect(() => {
    console.log("I'm useEffect Function");
  });

  console.log("a");
  return <div>LearnUseEffect</div>;
};

export default LearnUseEffect;
