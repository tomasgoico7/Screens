import React from "react";
import ReactDOM from "react-dom/client";
import { ScreenApp } from "./ScreenApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ScreenApp />
    </React.StrictMode>
  </BrowserRouter>
);
