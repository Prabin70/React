import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Blogs from "../Blogs";
import AnotherState from "../LearnUseState/AnotherState";

const NestedRouting2 = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet></Outlet>
            </>
          }
        >
          <Route index element={<AnotherState></AnotherState>}></Route>
          <Route path="about" element={<Outlet></Outlet>}>
            <Route index element={<div>This is an about section</div>}></Route>
            <Route path="student" element={<Outlet></Outlet>}>
              <Route index element={<div>This is a student page </div>}></Route>
              <Route path="ram" element={<Outlet></Outlet>}>
                <Route index element={<div>This is a ram</div>}></Route>
                <Route
                  path="address"
                  element={<div>Ram live in Kapan</div>}
                ></Route>
                <Route path="*" element={<div>Dynamic ROute</div>}></Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default NestedRouting2;
