import React from "react";
import { useSearchParams } from "react-router-dom";

const GetQueryParams = () => {
  let [query] = useSearchParams();

  return (
    <div>
      <div>GetQueryParams</div>
      {query.get("name")}
    </div>
  );
};

export default GetQueryParams;
