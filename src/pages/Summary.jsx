import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { usePaystackPayment } from "react-paystack";
import {
  collection,
  query,
  where,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { useState } from "react";
import Loader from "../components/Loader";

const Summary = () => {
  const {
    morningBookingTimesFromDb,
    noonBookingTimesFromDb,
    loader,
    currentUserFromDb,
    setActiveRideChange,
    setBookingSuccess,
    navigate,
    createRideDoc,
    formattedDate,
    setLoader,
    createdAt,
    ridesToday,
    freeRideBanner,
    cancelBookFreeRide,
    bookFreeRide,
  } = useAppContext();

  let allTimes = [...morningBookingTimesFromDb, ...noonBookingTimesFromDb];

  const { id } = useParams();
  const eachTime = allTimes.filter((item) => item.id === id)[0];
  // console.log(eachTime);

  //to control details form
  const [detailsForm, setDetailsForm] = useState({
    terminal: "",
    seats: "",
  });
  function handleChange(event) {
    setDetailsError("");
    const { id, value } = event.target;
    setDetailsForm((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  //to update slots   //to update slots   //to update slots
  //to update slots   //to update slots   //to update slots
  const morningTimeRef = morningBookingTimesFromDb?.filter(
    (item) => item.time === eachTime.time
  )[0];
  const noonTimeRef = noonBookingTimesFromDb?.filter(
    (item) => item.time === eachTime.time
  )[0];

  //to reduce slot count by 1
  async function updateSlotsCount() {
    setLoader(true);
    try {
      if (morningTimeRef) {
        const timeQuery = doc(
          db,
          "morningBookingTimes",
          `${morningTimeRef.id}`
        );
        const docSnap = await getDoc(timeQuery);
        let timeData = docSnap.data();
        await updateDoc(timeQuery, {
          slots: Number(timeData?.slots) - Number(detailsForm?.seats),
        });
      }
      if (noonTimeRef) {
        const timeQuery = doc(db, "noonBookingTimes", `${noonTimeRef.id}`);
        const docSnap = await getDoc(timeQuery);
        let timeData = docSnap.data();
        await updateDoc(timeQuery, {
          slots: Number(timeData?.slots) - Number(detailsForm?.seats),
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  }

  // paystack integration
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: `${currentUserFromDb?.email}`, //their mail
    amount: `${
      detailsForm?.seats
        ? eachTime?.price * detailsForm?.seats
        : eachTime?.price
    }00`, //amount is in Kobo
    publicKey: "pk_live_4ec101f882797185958e8fd5ef0fb5e3907622b1", //pk_test_e56146887f0492a4016277927d6b67d19843cb32 //pk_live_4ec101f882797185958e8fd5ef0fb5e3907622b1
  };

  //to init paystack
  const initializePayment = usePaystackPayment(paystackConfig);

  //paystack functions
  const onSuccess = (transaction) => {
    setLoader(true);
    setActiveRideChange((prev) => !prev);
    createRideDoc(
      currentUserFromDb.email,
      eachTime.time,
      eachTime.price,
      transaction.reference,
      formattedDate,
      detailsForm.terminal,
      detailsForm.seats
    );
    updateSlotsCount();
    navigate("/book-ride");
  };
  const onClose = () => {
    alert("Transaction was not completed, window closed.");
  };

  const freeRideSucceed = (free) => {
    setLoader(true);
    setActiveRideChange((prev) => !prev);
    createRideDoc(
      currentUserFromDb.email,
      eachTime.time,
      eachTime.price,
      free,
      formattedDate,
      detailsForm.terminal,
      detailsForm.seats
    );
    updateSlotsCount();
    navigate("/book-ride");
  };

  const PaystackHook = () => {
    return (
      <div>
        <button
          type="submit"
          className="w-full md:w-[fit-content] px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
          onClick={() => {
            ridesToday > 200
              ? initializePayment(onSuccess, onClose)
              : freeRideSucceed("free");
          }}
        >
          {ridesToday > 200 ? "Proceed to payment" : "Book for free"}
        </button>
      </div>
    );
  };

  //to control booking and summary sub-pages
  const [summaryPage, setSummaryPage] = useState(false);
  function gotoSummary() {
    setSummaryPage(true);
  }
  function gotoDetails() {
    setSummaryPage(false);
  }

  // console.log(Number(detailsForm.seats));
  // console.log(Number(eachTime?.slots));

  //to proceed to summary
  const [detailsError, setDetailsError] = useState("");

  function proceedToSummary(e) {
    e.preventDefault();
    if (
      detailsForm.terminal &&
      detailsForm.seats &&
      detailsForm.seats <= eachTime.slots
    ) {
      gotoSummary();
    } else if (!detailsForm.terminal || !detailsForm.seats) {
      setDetailsError("Please fill all fields");
    } else if (Number(detailsForm?.seats) > Number(eachTime?.slots)) {
      setDetailsError("Number of seats cannot be more than available seats");
    } else {
      gotoSummary();
    }
  }
  return (
    <>
      {loader && <Loader />}
      <Header />
      <section className="w-full min-h-screen py-40 bg-gradient-to-b from-zinc-500/70 to-blue-400/10 text-slate-700">
        <div className="absolute top-0 md:top-1 left-4 md:left-[10.5%] text-[0.9rem] text-slate-200 flex gap-2 items-center">
          <img
            alt=""
            src="/images/icons8-information-64.png"
            className="w-4 h-4"
          />
          <p className="underline">Contact us</p>
        </div>
        <div className="w-full px-[5%] sm:px-[10.5%]">
          {/* <Link onClick={() => window.location.reload()} to="/book-ride">
            <div className="w-[fit-content] text-[0.75rem] text-slate-700 py-1 px-4 mb-16 bg-white rounded-md">
              Back to dashboard
            </div>
          </Link> */}
          <div className="flex">
            <h2
              onClick={gotoDetails}
              className={` ${
                !summaryPage ? "bg-white text-black" : "bg-white/30 text-white"
              } text-[.9rem] md:text-[1.2rem] font-medium w-[fit-content] py-2 px-5 rounded-t-lg border-none relative bottom-[-2px]`}
            >
              Set details
            </h2>
            <h2
              onClick={proceedToSummary}
              className={` ${
                summaryPage ? "bg-white text-black" : "bg-white/30 text-white"
              } text-[.9rem] md:text-[1.2rem] font-medium w-[fit-content] py-2 px-5 rounded-t-lg border-none relative bottom-[-2px]`}
            >
              Summary
            </h2>
          </div>
          {/* the details page */}
          {!summaryPage && (
            <div className="w-full min-h-[340px] md:min-h-[260px] bg-white rounded-b-lg rounded-tr-lg p-4 relative">
              <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md hidden md:flex flex-wrap md:flex-nowrap">
                <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                  <img
                    alt=""
                    src="/images/icons8-time-30.png"
                    className="w-6 h-6 mr-1"
                  />
                  <p>
                    Time: <strong>{eachTime?.time}</strong>
                  </p>
                </div>
                <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                  <img
                    alt=""
                    src="/images/icons8-calendar-50.png"
                    className="w-6 h-6 mr-1"
                  />
                  <p>
                    Date: <strong>{formattedDate}</strong>
                  </p>
                </div>
                <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md mr-auto">
                  <img
                    alt=""
                    src="/images/icons8-cost-58.png"
                    className="w-6 h-6 mr-1"
                  />
                  {ridesToday.length > 200 ? (
                    <p>
                      Price:{" "}
                      <strong>
                        NGN{" "}
                        {detailsForm?.seats
                          ? eachTime?.price * detailsForm?.seats
                          : eachTime?.price}
                      </strong>
                    </p>
                  ) : (
                    <p>
                      Price: <strong className="text-green-500">FREE</strong>
                    </p>
                  )}
                </div>
              </div>

              {/* mobile ui */}

              <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md flex md:hidden flex-wrap md:flex-nowrap">
                <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                  <div className="mr-auto flex items-center">
                    <img
                      alt=""
                      src="/images/icons8-time-30.png"
                      className="w-6 h-6 mr-1"
                    />
                    <p>Time: </p>
                  </div>
                  <p className="font-bold">{eachTime?.time}</p>
                </div>
                <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                  <div className="mr-auto flex items-center">
                    <img
                      alt=""
                      src="/images/icons8-calendar-50.png"
                      className="w-6 h-6 mr-1"
                    />
                    <p>Date: </p>
                  </div>
                  <p className="font-bold">{formattedDate}</p>
                </div>
                {ridesToday > 200 ? (
                  <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                    <div className="mr-auto flex items-center">
                      <img
                        alt=""
                        src="/images/icons8-cost-58.png"
                        className="w-6 h-6 mr-1"
                      />
                      <p>Price: </p>
                    </div>
                    <p className="font-bold">
                      NGN
                      {detailsForm?.seats
                        ? eachTime?.price * detailsForm?.seats
                        : eachTime?.price}
                    </p>
                  </div>
                ) : (
                  <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                    <div className="mr-auto flex items-center">
                      <img
                        alt=""
                        src="/images/icons8-cost-58.png"
                        className="w-6 h-6 mr-1"
                      />
                      <p>Price: </p>
                    </div>
                    <p className="font-bold text-green-500">FREE</p>
                  </div>
                )}
              </div>

              <form className="max-w-[400px]">
                <label htmlFor="terminal" className="font-bold text-[1.1rem]">
                  Choose a Pick-up terminal{" "}
                  <span className="text-red-600">*</span>
                </label>{" "}
                <br />
                <select
                  id="terminal"
                  onChange={handleChange}
                  defaultValue={"DEFAULT"}
                  className="w-full bg-blue-400/10 mt-2 py-1 px-3 mb-4 rounded-md cursor-pointer outline-none border border-blue-400/50"
                >
                  <option value="DEFAULT" disabled hidden>
                    Select terminal
                  </option>
                  {eachTime.from === "inside" ? (
                    <option value="School park">School park</option>
                  ) : (
                    <>
                      <option value="Terminus">Terminus</option>
                      <option value="Mark">Mark</option>
                      <option value="Ilesanmi">Ilesanmi</option>
                      <option value="Sanrab">Sanrab</option>
                      <option value="Chapel">Chapel</option>
                      <option value="Okeodo">Okeodo</option>
                      <option value="Stella maris">Stella maris</option>
                    </>
                  )}
                </select>
                <label htmlFor="terminal" className="font-bold text-[1.1rem]">
                  Select number of seats <span className="text-red-600">*</span>
                </label>
                <br />
                <p className="text-[.8rem] text-blue-400">
                  Number of available seats:{" "}
                  <span className="font-bold">{eachTime.slots}</span>
                </p>
                <input
                  id="seats"
                  type="number"
                  onChange={handleChange}
                  value={detailsForm.seats}
                  className="w-full bg-blue-400/10 mt-2 py-1 px-3 mb-4 rounded-md outline-none border border-blue-400/50"
                />
                {detailsError !== "" && (
                  <div className="w-full flex gap-4 items-center py-3 px-10 my-2 bg-red-400/20 text-[0.85rem] rounded-lg border border-red-400">
                    <p>{detailsError}</p>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full md:w-[fit-content] px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
                  onClick={proceedToSummary}
                >
                  Proceed
                </button>
              </form>
            </div>
          )}

          {/* the summary page */}
          {summaryPage && (
            <div className="w-full min-h-[430px] md:min-h-[350px] bg-white rounded-b-lg rounded-tr-lg p-4 relative">
              {/* each active booking */}
              <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md hidden md:flex flex-wrap md:flex-nowrap">
                <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                  <img
                    alt=""
                    src="/images/icons8-time-30.png"
                    className="w-6 h-6 mr-1"
                  />
                  <p>
                    Time: <strong>{eachTime?.time}</strong>
                  </p>
                </div>
                <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                  <img
                    alt=""
                    src="/images/icons8-calendar-50.png"
                    className="w-6 h-6 mr-1"
                  />
                  <p>
                    Date: <strong>{formattedDate}</strong>
                  </p>
                </div>
                <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md mr-auto">
                  <img
                    alt=""
                    src="/images/icons8-cost-58.png"
                    className="w-6 h-6 mr-1"
                  />
                  {ridesToday.length > 200 ? (
                    <p>
                      Price:{" "}
                      <strong>
                        NGN{" "}
                        {detailsForm?.seats
                          ? eachTime?.price * detailsForm?.seats
                          : eachTime?.price}
                      </strong>
                    </p>
                  ) : (
                    <p>
                      Price: <strong className="text-green-500">FREE</strong>
                    </p>
                  )}
                </div>
              </div>

              {/* mobile ui */}

              <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md flex md:hidden flex-wrap md:flex-nowrap">
                <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                  <div className="mr-auto flex items-center">
                    <img
                      alt=""
                      src="/images/icons8-time-30.png"
                      className="w-6 h-6 mr-1"
                    />
                    <p>Time: </p>
                  </div>
                  <p className="font-bold">{eachTime?.time}</p>
                </div>
                <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                  <div className="mr-auto flex items-center">
                    <img
                      alt=""
                      src="/images/icons8-calendar-50.png"
                      className="w-6 h-6 mr-1"
                    />
                    <p>Date: </p>
                  </div>
                  <p className="font-bold">{formattedDate}</p>
                </div>
                {ridesToday > 200 ? (
                  <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                    <div className="mr-auto flex items-center">
                      <img
                        alt=""
                        src="/images/icons8-cost-58.png"
                        className="w-6 h-6 mr-1"
                      />
                      <p>Price: </p>
                    </div>
                    <p className="font-bold">
                      NGN
                      {detailsForm?.seats
                        ? eachTime?.price * detailsForm?.seats
                        : eachTime?.price}
                    </p>
                  </div>
                ) : (
                  <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                    <div className="mr-auto flex items-center">
                      <img
                        alt=""
                        src="/images/icons8-cost-58.png"
                        className="w-6 h-6 mr-1"
                      />
                      <p>Price: </p>
                    </div>
                    <p className="font-bold text-green-500">FREE</p>
                  </div>
                )}
              </div>

              <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md flex flex-wrap gap-2 border sm:border-none border-blue-400/50">
                <p>Pick-up Terminal:</p>
                <p className="font-bold"> {detailsForm?.terminal}</p>
              </div>
              <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md flex flex-wrap gap-2 border sm:border-none border-blue-400/50">
                <p>Number of seats:</p>
                <p className="font-bold"> {detailsForm?.seats}</p>
              </div>

              <p className="text-[0.75rem] text-slate-500 absolute bottom-4 p-1 bg-blue-400/10">
                PS: Prices may vary based on demand
              </p>
              <PaystackHook />
            </div>
          )}
        </div>
      </section>
      <Footer />
      <ScrollToTop />
      {freeRideBanner && (
        <div className="w-full bg-white px-2 md:px-5 py-[6px] md:py-3 fixed bottom-0 left-0 flex items-center z-10">
          <div className="flex items-center gap-2 md:gap-4 mr-auto">
            <img
              alt=""
              src="/images/icons8-discount-50.png"
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <p className="text-[.75rem] md:text-[1rem]">
              Limited time offer: Free rides today for first 200 users! Book
              now!
            </p>
          </div>
          <div
            onClick={cancelBookFreeRide}
            className="w-8 h-7 bg-white flex items-center justify-center rounded-full border border-blue-500 cursor-pointer"
          >
            <img alt="" src="/images/icons8-close-30.png" className="w-3 h-3" />
          </div>
          {/* <div className="md:flex gap-3 hidden">
            <button
              onClick={cancelBookFreeRide}
              className="h-fit text-sm text-blue-500 text-[.75rem] bg-blue-500/20 px-6 py-1 md:py-2 uppercase hover:bg-blue-400 hover:text-white border-blue-500 border-2 rounded-md transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={bookFreeRide}
              className="h-fit text-sm text-white text-[.75rem] bg-blue-500 px-6 py-1 md:py-2 uppercase hover:bg-blue-400 border-blue-500 border-2 rounded-md transition-all duration-300"
            >
              Book now
            </button>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Summary;
