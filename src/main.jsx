import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HeaderContextProvider from "./contexts/HeaderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderContextProvider>
        <App />
      </HeaderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
