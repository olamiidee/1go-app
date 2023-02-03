import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HeaderContextProvider from "./contexts/HeaderContext";
import AppContextProvider from "./contexts/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <HeaderContextProvider>
          <App />
        </HeaderContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
