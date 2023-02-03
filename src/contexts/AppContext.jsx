import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import {
  getDocs,
  addDoc,
  collection,
  query,
  where,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
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

  //to save login form input
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //to handle form input change chnage
  function handleLoginChange(event) {
    const { id, value } = event.target;
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  //function to create user doc on sign up
  const createUserDocument = async (
    firstname,
    lastname,
    email,
    phone,
    createdAt
  ) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        createdAt: createdAt,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  //to formate date
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

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
      await createUserDocument(
        regForm.firstname,
        regForm.lastname,
        regForm.email,
        regForm.phone,
        formattedDate
      );
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  //to log in users
  const login = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      );
      setLoader(false);
      navigate("/book-ride");
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  //to log out users
  const logout = async () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  //to show and hide password
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  //to show logout tray
  const [showLogout, setShowLogout] = useState(false);
  function toggleLogoutOn() {
    setShowLogout(true);
  }
  function toggleLogoutOff() {
    setShowLogout(false);
  }

  window.addEventListener("click", () => {
    setShowLogout(false);
  });

  //to save current user from auth in state
  const [user, setUser] = useState({ name: "", email: "" });
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  //to save current user from db
  const [currentUserFromDb, setCurrentUserFromDb] = useState({});

  //to get users saved in db
  useEffect(() => {
    if (user) {
      const getUserDetails = async () => {
        setLoader(true);
        const userQuery = query(
          collection(db, "users"),
          where("email", "==", user?.email)
        );
        try {
          const querySnapshot = await getDocs(userQuery);
          querySnapshot.forEach((doc) => {
            setCurrentUserFromDb(doc.data());
          });
          setLoader(false);
        } catch (err) {
          console.log(err.message);
          setLoader(false);
        } finally {
          setLoader(false);
        }
      };
      getUserDetails();
    }
  }, [user]);

  //dashboard access
  const [userNotLoggedIn, setuserNotLoggedIn] = useState(false);
  function accessDashboard() {
    if (currentUserFromDb) {
      navigate("/book-ride");
    } else {
      navigate("/login");
      setuserNotLoggedIn(true);
      setTimeout(() => {
        setuserNotLoggedIn(true);
      }, 10000);
    }
  }

  return (
    <AppContext.Provider
      value={{
        regForm,
        handleRegChange,
        loader,
        register,
        showPassword,
        togglePassword,
        handleLoginChange,
        user,
        login,
        logout,
        showLogout,
        toggleLogoutOn,
        toggleLogoutOff,
        currentUserFromDb,
        userNotLoggedIn,
        accessDashboard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
