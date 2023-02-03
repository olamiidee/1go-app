import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { auth, db } from "../firebase/firebase-config";
// import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  //to save reg form input
  const [regForm, setRegForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  // console.log(regForm);

  //to handle form input change chnage
  function handleRegChange(event) {
    const { id, value } = event.target;
    setRegForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  //to handle reg form data submit to firebase
  const register = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await createUserWithEmailAndPassword(
        auth,
        regForm.email,
        regForm.password
      );
      setLoader(false);
      navigate("/book-ride");
      await createUserDocument(regForm.email, regForm.displayName);
    } catch (error) {
      setLoader(false);
      console.log(error.message);
      alert("User exists");
    }
  };

  return (
    <AppContext.Provider value={{ regForm, handleRegChange, loader, register }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
