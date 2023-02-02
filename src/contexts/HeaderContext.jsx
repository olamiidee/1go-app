import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  //to track scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  let refreshIntervalId = setInterval(
    () => setScrollPosition(window.pageYOffset),
    500
  );

  // useEffect(() => {
  //   console.log(scrollPosition);
  // }, [scrollPosition]);

  return (
    <HeaderContext.Provider value={{ currentPage, scrollPosition }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(HeaderContext);
};

export default HeaderContextProvider;
