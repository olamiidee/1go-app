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
  getDoc,
  addDoc,
  collection,
  query,
  where,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

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
    setErrorMessage("");
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
      const docRef = await setDoc(doc(db, "users", `${email}`), {
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
  useEffect(() => {
    setErrorMessage("");
  }, [currentPage]);

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
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        setErrorMessage("Invalid login details");
      } else if (
        error.message === "Firebase: Error (auth/network-request-failed)."
      ) {
        setErrorMessage("Bad network connection");
      }
    }
  };

  //to log out users
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
    localStorage.removeItem("userDetails");
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
  const [currentUserFromDb, setCurrentUserFromDb] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || {}
  );

  const [takingLong, setTakingLong] = useState(false);

  //to get users saved in db
  useEffect(() => {
    if (user) {
      const getUserDetails = async () => {
        setLoader(true);
        setTimeout(() => {
          loader ? setTakingLong(true) : setTakingLong(false);
        }, 5000);
        const userQuery = query(
          collection(db, "users"),
          where("email", "==", user?.email)
        );
        try {
          const querySnapshot = await getDocs(userQuery);
          let me;
          querySnapshot.forEach((doc) => {
            me = doc.data();
          });
          me && localStorage.setItem("userDetails", JSON.stringify(me));
          // me && setCurrentUserFromDb(me);

          setLoader(false);
        } catch (err) {
          console.log(err.message);
          setLoader(false);
        } finally {
          setLoader(false);
          setTakingLong(false);
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
  //function to save morning booking time doc on sign up
  //function to save morning booking time doc on sign up
  //function to save morning booking time doc on sign up
  //function to save morning booking time doc on sign up
  const [updatedTime, setUpdatedTime] = useState(false);

  //to save booking time from db
  const [morningBookingTimesFromDb, setMorningBookingTimesFromDb] = useState(
    JSON.parse(localStorage.getItem("morningTimes")) || []
  );

  //to get users saved in db
  useEffect(() => {
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
        let arranged = times?.sort(function (a, b) {
          return a.id.slice(-2) - b.id.slice(-2);
        });
        times.length > 0 &&
          localStorage.setItem("morningTimes", JSON.stringify(arranged));
        times.length > 0 && setMorningBookingTimesFromDb(arranged);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getMorningBookingTime();
  }, [updatedTime]);

  //to send created notes to db
  const createMorningBookingTimeDocument = async (time, createdAt) => {
    setLoader(true);

    try {
      const querySnapshot = await getDocs(
        collection(db, "morningBookingTimes")
      );
      let times = [];
      querySnapshot.forEach((doc) => {
        times.push(doc.data());
      });
      times.length > 0 &&
        localStorage.setItem("morningTimes", JSON.stringify(times));
      await setDoc(
        doc(
          db,
          "morningBookingTimes",
          `${time.replace(/ /g, "_")}_${createdAt}_0${
            morningBookingTimesFromDb.length + 1
          }`
        ),
        {
          time: time,
          id: `${time.replace(/ /g, "_")}_${createdAt}_0${
            morningBookingTimesFromDb.length + 1
          }`,
          createdAt: createdAt,
        }
      );
      console.log("morning booking time created");
      setUpdatedTime((prev) => !prev);
      window.location.reload();
    } catch (err) {
      console.error("Error creating morning time: ", err);
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
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  //function to save noon booking time doc on sign up
  //function to save noon booking time doc on sign up
  //function to save noon booking time doc on sign up
  //function to save noon booking time doc on sign up

  //to save booking time from db
  const [noonBookingTimesFromDb, setNoonBookingTimesFromDb] = useState(
    JSON.parse(localStorage.getItem("noonTimes")) || []
  );

  //to get noon booking timesaved in db
  useEffect(() => {
    const getNoonBookingTime = async () => {
      setLoader(true);

      try {
        const querySnapshot = await getDocs(collection(db, "noonBookingTimes"));
        let times = [];
        querySnapshot.forEach((doc) => {
          times.push(doc.data());
        });
        let arranged = times?.sort(function (a, b) {
          return a.id.slice(-2) - b.id.slice(-2);
        });
        times.length > 0 &&
          localStorage.setItem("noonTimes", JSON.stringify(arranged));
        times.length > 0 && setNoonBookingTimesFromDb(arranged);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getNoonBookingTime();
  }, [updatedTime]);

  //to send created notes to db
  const createNoonBookingTimeDocument = async (time, createdAt) => {
    setLoader(true);

    try {
      const querySnapshot = await getDocs(collection(db, "noonBookingTimes"));
      let times = [];
      querySnapshot.forEach((doc) => {
        times.push(doc.data());
      });
      times.length > 0 &&
        localStorage.setItem("noonTimes", JSON.stringify(times));
      await setDoc(
        doc(
          db,
          "noonBookingTimes",
          `${time.replace(/ /g, "_")}_${createdAt}_0${
            noonBookingTimesFromDb.length + 1
          }`
        ),
        {
          time: time,
          id: `${time.replace(/ /g, "_")}_${createdAt}_0${
            noonBookingTimesFromDb.length + 1
          }`,
          createdAt: createdAt,
        }
      );
      console.log("noon booking time created");
      setUpdatedTime((prev) => !prev);
      window.location.reload();
    } catch (err) {
      console.error("Error creating noon time: ", err);
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

  //to delete time from db
  const deleteMorningTimeDoc = async (id) => {
    try {
      await deleteDoc(doc(db, "morningBookingTimes", id));
      console.log("morning time deleted");
    } catch (err) {
      console.log("error deleting morning time: ", err);
    }
  };

  //to delete morning time
  function handleDeleteMorningTime(id) {
    deleteMorningTimeDoc(id);
    setUpdatedTime((prev) => !prev);
  }

  //to delete time from db
  const deleteNoonTimeDoc = async (id) => {
    try {
      await deleteDoc(doc(db, "noonBookingTimes", id));
      console.log("Noon time deleted");
    } catch (err) {
      console.log("error deleting Noon time: ", err);
    }
  };

  //to delete time
  function handleDeleteNoonTime(id) {
    deleteNoonTimeDoc(id);
    setUpdatedTime((prev) => !prev);
  }

  //to get number of users
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      setLoader(true);

      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        let users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        setAllUsers(users);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    }
    getUsers();
  }, []);

  //to save nprice form input
  const [priceForm, setPriceForm] = useState({
    price: "",
  });

  //to save noon time form input
  function handlePriceChange(event) {
    const { id, value } = event.target;
    setPriceForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  //to save price from db
  const [priceFromDb, setpriceFromDb] = useState(
    JSON.parse(localStorage.getItem("price")) || []
  );

  //to get noon booking timesaved in db
  useEffect(() => {
    const getPrice = async () => {
      setLoader(true);

      try {
        const querySnapshot = await getDocs(collection(db, "pricing"));
        let price = [];
        querySnapshot.forEach((doc) => {
          price.push(doc.data());
        });

        price.length > 0 &&
          localStorage.setItem("price", JSON.stringify(price));
        price.length > 0 && setpriceFromDb(price);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getPrice();
  }, [updatedTime]);

  //to send changed time to db
  const createPriceDocument = async (price) => {
    setLoader(true);

    try {
      await setDoc(doc(db, "pricing", "price"), {
        price: price,
      });
      console.log("price changed");
      setUpdatedTime((prev) => !prev);
    } catch (err) {
      console.error("Error changing ", err);
    } finally {
      setLoader(false);
    }
  };

  //to handle price form data submit to firebase
  const handlePriceSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await deleteDoc(doc(db, "pricing", "price"));
      await createPriceDocument(priceForm.price);
      setLoader(false);
      window.location.reload();
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  //admin login logic  //admin login logic  //admin login logic
  //admin login logic  //admin login logic  //admin login logic
  //admin login logic  //admin login logic  //admin login logic
  //96C0Zb&6rkh!

  //to save nprice form input
  const [adminLoginData, setAdminLoginData] = useState({
    email: "",
    password: "",
  });

  //to save noon time form input
  function handleAdminChange(event) {
    const { id, value } = event.target;
    setAdminLoginData((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || {}
  );
  const [trackAdmin, setTrackAdmin] = useState(false);
  useEffect(() => {
    setAdmin(JSON.parse(localStorage.getItem("admin")));
  }, [trackAdmin]);

  const loginAdmin = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const docRef = doc(db, "users", "admin1cx@gmail.com");
      const docSnap = await getDoc(docRef);
      let adminData = docSnap.data();
      if (
        adminLoginData.email === adminData.email &&
        adminLoginData.password === adminData.lastname
      ) {
        localStorage.setItem("admin", JSON.stringify(adminData));
        setAdmin(adminData);
        navigate("/admin");
        setTrackAdmin((prev) => !prev);
      } else if (
        adminLoginData.email === "" ||
        adminLoginData.password === ""
      ) {
        setErrorMessage("email & password required!");
      } else {
        setErrorMessage("Invalid admin details");
      }
    } catch (err) {
      err.message === "Failed to get document because the client is offline." &&
        setErrorMessage("Bad network connection");
    } finally {
      setLoader(false);
    }
  };

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
        handleDeleteMorningTime,
        handleDeleteNoonTime,
        allUsers,
        handlePriceChange,
        handlePriceSubmit,
        priceFromDb,
        admin,
        loginAdmin,
        handleAdminChange,
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
