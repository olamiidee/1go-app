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

  const [errorMessage, setErrorMessage] = useState("");

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
      error.message && setErrorMessage("Bad network connection");
      setTimeout(() => {
        setErrorMessage("");
      }, 7000);
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
    setuserNotLoggedIn(true);
    if (user) {
      navigate("/book-ride");
      setuserNotLoggedIn(false);
    } else {
      navigate("/login");
      setuserNotLoggedIn(true);
      setTimeout(() => {
        setuserNotLoggedIn(false);
      }, 7000);
    }
  }

  //to save morning time form input
  const [morningForm, setMorningForm] = useState({
    morningHour: "",
    morningMinute: "",
    morningAmpm: "AM",
  });

  //to save morning time form input
  function handleMorningChange(event) {
    const { id, value } = event.target;
    setMorningForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  //to save noon time form input
  const [noonForm, setNoonForm] = useState({
    noonHour: "",
    noonMinute: "",
    noonAmpm: "PM",
  });

  //to save noon time form input
  function handlenoonChange(event) {
    const { id, value } = event.target;
    setNoonForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  let added = false;

  //function to save morning booking time doc on sign up
  //function to save morning booking time doc on sign up
  //function to save morning booking time doc on sign up
  //function to save morning booking time doc on sign up

  const createMorningBookingTimeDocument = async (time, createdAt) => {
    try {
      const docRef = await addDoc(collection(db, "morningBookingTimes"), {
        time: time,
        id: morningBookingTimesFromDb.length + 1,
        hover: false,
        createdAt: createdAt,
      });
      console.log("Document written with ID: ", docRef.id);
      added = true;
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  //to save booking time from db
  const [morningBookingTimesFromDb, setMorningBookingTimesFromDb] = useState(
    JSON.parse(localStorage.getItem("morningTimes")) || []
  );

  useEffect(() => {
    getMorningBookingTime();
  }, [added]);

  //to get users saved in db
  const getMorningBookingTime = async () => {
    setLoader(true);

    try {
      const querySnapshot = await getDocs(
        collection(db, "morningBookingTimes")
      );
      let times = [];
      querySnapshot.forEach((doc) => {
        times.push(doc.data());
      });
      localStorage.setItem("morningTimes", JSON.stringify(times));
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoader(false);
    }
  };

  //to handle booking time form data submit to firebase
  const handleMorningBookingTimeSubmit = async (e) => {
    e.preventDefault();
    let morningTime = `${morningForm.morningHour}:${morningForm.morningMinute} ${morningForm.morningAmpm}`;
    setLoader(true);

    try {
      await createMorningBookingTimeDocument(morningTime, formattedDate);
      await getMorningBookingTime();
      added = false;
      setLoader(false);
      window.location.reload();
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  //function to save noon booking time doc on sign up
  //function to save noon booking time doc on sign up
  //function to save noon booking time doc on sign up
  //function to save noon booking time doc on sign up

  const createNoonBookingTimeDocument = async (time, createdAt) => {
    try {
      const docRef = await addDoc(collection(db, "noonBookingTimes"), {
        time: time,
        id: noonBookingTimesFromDb.length + 1,
        hover: false,
        createdAt: createdAt,
      });
      console.log("Document written with ID: ", docRef.id);
      added = true;
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  //to save booking time from db
  const [noonBookingTimesFromDb, setnoonBookingTimesFromDb] = useState(
    JSON.parse(localStorage.getItem("noonTimes")) || []
  );

  useEffect(() => {
    getNoonBookingTime();
  }, [added]);

  //to get users saved in db
  const getNoonBookingTime = async () => {
    setLoader(true);

    try {
      const querySnapshot = await getDocs(collection(db, "noonBookingTimes"));
      let times = [];
      querySnapshot.forEach((doc) => {
        times.push(doc.data());
      });
      localStorage.setItem("noonTimes", JSON.stringify(times));
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoader(false);
    }
  };

  //to handle booking time form data submit to firebase
  const handleNoonBookingTimeSubmit = async (e) => {
    e.preventDefault();
    let noonTime = `${noonForm.noonHour}:${noonForm.noonMinute} ${noonForm.noonAmpm}`;
    setLoader(true);

    try {
      await createNoonBookingTimeDocument(noonTime, formattedDate);
      await getNoonBookingTime();
      added = false;
      setLoader(false);
      window.location.reload();
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  //  //to delete  from db
  //  const deleteDocument = async (userName, id, title) => {
  //   await deleteDoc(
  //     doc(db, "notes", `${userName}_${id}_${title.replace(/ /g, "_")}`)
  //   );
  //   console.log("note deleted");
  // };

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
        errorMessage,
        morningForm,
        handleMorningChange,
        noonForm,
        handlenoonChange,
        handleMorningBookingTimeSubmit,
        morningBookingTimesFromDb,
        noonBookingTimesFromDb,
        handleNoonBookingTimeSubmit,
        noonBookingTimesFromDb,
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
