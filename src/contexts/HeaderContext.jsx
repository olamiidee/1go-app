import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  function handleTheme() {
    setIsLightTheme((prev) => !prev);
  }
  return (
    <HeaderContext.Provider value={{ currentPage }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(HeaderContext);
};

export default HeaderContextProvider;
