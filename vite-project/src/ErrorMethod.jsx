import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ErrorMethod = () => {
  return <Navigate to={"/"}> </Navigate>;
};

export default ErrorMethod;
