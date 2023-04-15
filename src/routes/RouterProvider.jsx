import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./routes";
const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        {routes.map((route) => {
          if (route.path === "index") {
            return (
              <Route
                key={`${route.path}-page`}
                index
                element={route.component}
              />
            );
          }
          return (
            <Route
              key={`${route.path}-page`}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
