import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Blogs from "../Blogs";
import LearnDynamicRoute from "../LearnDynamicRoute/LearnDynamicRoute";
import GetQueryParams from "../LearnDynamicRoute/GetQueryParams";
import ErrorMethod from "../ErrorMethod";

const LearnRouting = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home name={"Prabin"} number={9877665656}></Home>}
        ></Route>
        <Route
          path="/about"
          element={<About name={"Aaryan"} age={90}></About>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route
          path="/user/:id1/create/:id2"
          element={<LearnDynamicRoute></LearnDynamicRoute>}
        ></Route>
        <Route
          path="/admin"
          element={<GetQueryParams></GetQueryParams>}
        ></Route>
        <Route path="/:id" element={<ErrorMethod></ErrorMethod>}></Route>
      </Routes>
    </>
  );
};

export default LearnRouting;
