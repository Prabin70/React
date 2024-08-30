import React from "react";

const RemoveSession = () => {
  sessionStorage.removeItem("name");
  return <div>RemoveSession</div>;
};

export default RemoveSession;
