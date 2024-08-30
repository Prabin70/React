import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, NavLink } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </BrowserRouter>
);
