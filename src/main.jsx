import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BlogContextProvider } from "./context/BlogContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
  </BrowserRouter>
);
