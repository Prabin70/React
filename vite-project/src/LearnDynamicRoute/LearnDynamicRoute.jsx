import React from "react";
import { useParams } from "react-router-dom";

const LearnDynamicRoute = () => {
  //useParams => to get dynamic router parameter
  let params = useParams();
  return (
    <div>
      LearnDynamicRoute
      <div>
        {params.id1}
        <br />
        {params.id2}
      </div>
    </div>
  );
};

export default LearnDynamicRoute;
