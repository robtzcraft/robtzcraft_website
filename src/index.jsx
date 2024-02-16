import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./assets/styles/index.css";

let updating_status = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>
);
