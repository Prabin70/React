import React, { useEffect, useState } from "react";

const LearnUseEffect2 = () => {
  let [count, setcount] = useState();
  useEffect(() => {
    //Use effect runs every time
    console.log("Im an useEffect");
  });
  //We can have multiple useeffect if you miss an array (dependency) [], useEffect will runs in every render.
  //useEffect runs first time only.



  //IT will run in first render from the second render it will only run when the count state value is changed.
  useEffect(() => {}, [count]);

  

  //dependency array [] ma bahira ko variable or function matra rakhne useEffect vitraa ko aafai run vaihalxa, example = a rakhna pardaina.
  useEffect(() => {
    let a = 10;
    console.log(a);
  });
  return <div>LearnUseEffect2</div>;
};

export default LearnUseEffect2;
