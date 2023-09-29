import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BlogContextProvider } from "./context/BlogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
);
