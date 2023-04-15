import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./input.css";
import RouterProvider from "./routes/RouterProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
