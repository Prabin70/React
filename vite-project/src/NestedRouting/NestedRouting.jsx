import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/a" element={<div>a page</div>}></Route>
    <Route path="/a/a1" element={<div>a1 page</div>}></Route>
    <Route path="/a/a1/a2" element={<div>a3 page</div>}></Route> */}

        <Route
          path="/"
          element={
            <>
              <Outlet></Outlet>
            </>
          }

          //outlate is used to replace the child element
        ></Route>
        <Route index element={<div>home page</div>}></Route>
        <Route path="a" element={<Outlet></Outlet>}>
          <Route index element={<div>A page</div>}></Route>
          <Route path="a1" element={<Outlet></Outlet>}>
            <Route index element={<div>a1 page</div>}></Route>
            <Route path="a2" element={<Outlet></Outlet>}></Route>
            <Route path=":id" element={<div>Ramdom Page</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default NestedRouting;
