import React from "react";
import { NavLink } from "react-router-dom";

const AppLink = () => {
  return (
    <div>
      <NavLink
        to={"/"}
        style={{
          margin: "20px",
          textDecoration: "None",
          color: "#001233",
          marginBottom: "100px",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        style={{
          margin: "20px",
          textDecoration: "None",
          color: "#0d1321",
          paddingBottom: "100px",
        }}
      >
        {" "}
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        style={{
          margin: "20px",
          textDecoration: "None",
        }}
      >
        Contact
      </NavLink>
      <NavLink
        to={"/blogs"}
        style={{
          margin: "20px",
          textDecoration: "None",
        }}
      >
        Blogs
      </NavLink>
    </div>
  );
};

export default AppLink;
