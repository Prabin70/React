import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet></Outlet>}>
        <Route index element={<div>Homepage</div>}></Route>
        <Route
          path="student"
          element={
            <>
              <Outlet></Outlet>
            </>
          }
        >
          <Route index element={<div>Home page</div>}></Route>
          <Route index element={<div>student data</div>}></Route>
          <Route path="1" element={<div>1 page student </div>}></Route>
          <Route path="ram" element={<Outlet></Outlet>}>
            <Route index element={<div>ram page </div>}></Route>
            <Route path=":id" element={<div>Dynamic route</div>}></Route>
          </Route>
        </Route>
        <Route path="*" element={<div>404 page not found</div>}></Route>
      </Route>
    </Routes>
  );
};

export default NestedRouting1;
