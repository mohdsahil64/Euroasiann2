import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";
import "./index.css"; // ya bhi global css hai
import { HelmetProvider } from "react-helmet-async";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
  <HelmetProvider>
    <App />
  </HelmetProvider>
  </React.StrictMode>
  </BrowserRouter>
);
