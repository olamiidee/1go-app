import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import ActiveBooking from "../components/ActiveBooking";
import BookSuccessModal from "../components/BookSuccessModal";
import ClientMorningTimeBtn from "../components/ClientMorningTimeBtn";
import ClientNoonTimeBtn from "../components/ClientNoonTimeBtn";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import RideHistory from "../components/RideHistory";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const BookRides = () => {
  const {
    currentUserFromDb,
    morningBookingTimesFromDb,
    noonBookingTimesFromDb,
    bookingSuccess,
    rideHistoryFromDb,
    formattedDate,
    toggleActive,
    active,
    loader,
    freeRideMod,
    bookFreeRide,
    ridesToday,
    cancelBookFreeRide,
    freeRideBanner,
    cancelFreeRideMod,
  } = useAppContext();

  let firstFive = rideHistoryFromDb?.slice(0, 5);
  const [displayAll, setDisplayAll] = useState(false);
  function showAll() {
    setDisplayAll((prev) => !prev);
  }

  let sortedArrMorn = morningBookingTimesFromDb.slice().sort((a, b) => {
    const timeA = moment(a.time, ["h:mm A"]).format("HH:mm");
    const timeB = moment(b.time, ["h:mm A"]).format("HH:mm");
    return Number(timeA.replace(/:/g, "")) - Number(timeB.replace(/:/g, ""));
  });

  let sortedArrNoon = noonBookingTimesFromDb.slice().sort((a, b) => {
    const timeA = moment(a.time, ["h:mm A"]).format("HH:mm");
    const timeB = moment(b.time, ["h:mm A"]).format("HH:mm");
    return Number(timeA.replace(/:/g, "")) - Number(timeB.replace(/:/g, ""));
  });

  // console.log(active);
  return (
    <>
      {loader && <Loader />}
      <Header />

      {freeRideMod && (
        <div className="w-full h-screen text-center p-4 flex justify-center items-center bg-black/90 fixed top-0 left-0 z-[999] scale">
          <div className="w-full sm:w-[500px] h-fit bg-white px-5 pt-10 pb-5 border border-blue-400 rounded-lg relative">
            <img
              alt=""
              src="/images/icons8-discount-50.png"
              className="w-20 h-20 absolute top-[-40px] left-[50%] translate-x-[-50%]"
            />
            <h1 className="text-[1.4rem] font-bold mb-3">Get free rides!</h1>
            <div>
              Limited time offer: Free rides today for first 100 users! Book
              now!
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={cancelFreeRideMod}
                className="h-fit text-sm text-blue-500 text-[.75rem] bg-blue-500/20 px-8 py-1 md:py-2 uppercase hover:bg-blue-400 hover:text-white border-blue-500 border-2 rounded-md transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={bookFreeRide}
                className="h-fit text-sm text-white text-[.75rem] bg-blue-500 px-6 py-1 md:py-2 uppercase hover:bg-blue-400 border-blue-500 border-2 rounded-md transition-all duration-300"
              >
                Book now
              </button>
            </div>
            {/* <button
              onClick={bookFreeRide}
              className="text-sm text-white text-[.85rem] bg-blue-500 px-10 py-2 mt-8 uppercase hover:bg-blue-400 border-blue-500 border-2 rounded-md transition-all duration-300"
            >
              Book now
            </button> */}
          </div>
        </div>
      )}

      <section className="w-full min-h-screen pb-32 bg-slate-100 text-slate-700">
        <section className="w-full bg-reg1 bg-cover bg-right lg:bg-center bg-no-repeat">
          <section className="w-full bg-gradient-to-b from-zinc-900/70 to-zinc-700/40 py-[150px] px-[5%] sm:px-[10.5%]">
            <Link to="/contact">
              <div className="absolute top-0 md:top-1 left-4 md:left-[10.5%] text-[0.9rem] text-slate-200 flex gap-2 items-center">
                <img
                  alt=""
                  src="/images/icons8-information-64.png"
                  className="w-4 h-4"
                />
                <p className="underline">Contact us</p>
              </div>
            </Link>
            <section className="w-full border-b border-zinc-300 pb-4 text-white flex">
              <div className="w-2/3 mr-auto">
                <h2 className="text-[1.5rem] font-bold flex gap-2 items-center">
                  <p> Hello</p>{" "}
                  {currentUserFromDb ? (
                    currentUserFromDb?.firstname?.charAt(0).toUpperCase() +
                    currentUserFromDb?.firstname?.slice(1)
                  ) : (
                    <div className="w-[25px] h-[25px] bg-gradient-to-b from-blue-500 to-white rounded-full relative rotate">
                      {/* <div className="w-1/3 h-full bg-white"></div> */}
                      <div className="w-1/2 h-1/2 bg-slate-600/90 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                    </div>
                  )}
                </h2>
                <p className="text-[0.9rem] md:text-[1.1rem] font-medium">
                  Welcome to your dashboard. You can book rides & view ride
                  history here!
                </p>
              </div>
              <div className="h-[fit-content] px-4 md:px-8 p-2 rounded-lg bg-white/40">
                <img
                  alt=""
                  src="/images/icons8-user-64.png"
                  className="md:w-16 w-10 md:h-16 h-10"
                />
              </div>
            </section>

            {/* if ride is active show this tab at the top */}
            {active && (
              <section className="w-full mt-10 text-center sm:text-start">
                <div className="text-[.9rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg border-none relative bottom-[-2px] flex items-center gap-2">
                  <h2>Successful bookings</h2>
                  {rideHistoryFromDb?.length > 0 && (
                    <div className="w-4 h-4 p-[7px] text-[.75rem] flex justify-center items-center border-2 border-blue-400/60 bg-blue-400/80 text-white rounded-full">
                      {rideHistoryFromDb?.length}
                    </div>
                  )}
                </div>
                <div className="w-full min-h-[200px] bg-white rounded-b-lg rounded-tr-lg px-4 py-6 flex flex-col items-center transition-all duration-300 relative">
                  {/* each ride history */}

                  {rideHistoryFromDb?.length > 0 && !displayAll ? (
                    firstFive?.map((item, index) => {
                      return (
                        <RideHistory
                          key={index}
                          item={item}
                          rideHistoryFromDb={rideHistoryFromDb}
                        />
                      );
                    })
                  ) : rideHistoryFromDb?.length > 0 && displayAll ? (
                    rideHistoryFromDb?.map((item, index) => {
                      return (
                        <RideHistory
                          key={index}
                          item={item}
                          rideHistoryFromDb={rideHistoryFromDb}
                        />
                      );
                    })
                  ) : (
                    <div className="w-full py-12 bg-sky-50 flex flex-col items-center">
                      <img
                        alt=""
                        src="/images/empty.png"
                        className="w-20 h-20 mb-8"
                      />
                      <p className="text-slate-400">No bookings yet...</p>
                    </div>
                  )}
                  {/* <RideHistory priceFromDb={priceFromDb} />
            <RideHistory priceFromDb={priceFromDb} />
            <RideHistory priceFromDb={priceFromDb} /> */}
                  {rideHistoryFromDb?.length > 5 && (
                    <button
                      onClick={showAll}
                      className=" px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
                    >
                      {displayAll ? "Show less" : "Show more"}
                    </button>
                  )}
                  <div className=" mt-1 flex gap-1 items-center absolute bottom-[8px] left-[10px]">
                    <div className="bg-blue-400 rounded-full flex justify-center items-center">
                      <img
                        alt=""
                        src="/images/icons8-information-64.png"
                        className="w-4 h-4"
                      />
                    </div>
                    <p className="text-[0.75rem] bg-blue-400/30 px-2 py-[1px] rounded-full">
                      Click a booking for more details
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-fit p-1 md:px-4 bg-transparent rounded-md mt-3 text-[0.85rem] text-white text-start font-mediun">
                  Scroll down to book another ride.
                </div>
              </section>
            )}
            {/* {active && activeRidesFromDb?.length > 0 && (
              <section className="w-full mt-10 text-center sm:text-start">
                <div className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg border-none relative bottom-[-2px] flex items-center gap-2">
                  <h2>Active bookings</h2>
                  {activeRidesFromDb?.length > 0 && (
                    <div className="w-4 h-4 p-[10px] text-[.85rem] flex justify-center items-center border-2 border-blue-400/50 rounded-full">
                      {activeRidesFromDb?.length}
                    </div>
                  )}
                </div>
                <div className="w-full min-h-[300px] md:min-h-[200px] bg-white border-none rounded-b-lg rounded-tr-lg p-4 relative">
                  {activeRidesFromDb.length > 0 ? (
                    activeRidesFromDb?.map((item, index) => {
                      return (
                        <ActiveBooking
                          key={index}
                          item={item}
                          activeRidesFromDb={activeRidesFromDb}
                        />
                      );
                    })
                  ) : (
                    <div className="w-full py-12 bg-sky-50 flex flex-col items-center">
                      <img
                        alt=""
                        src="/images/empty.png"
                        className="w-20 h-20 mb-8"
                      />
                      <p className="text-slate-400">
                        Your active booking will show here...
                      </p>
                    </div>
                  )}

                  <button
                    onClick={toggleActive}
                    className="mx-auto md:mx-0 px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
                  >
                    Book another ride
                  </button>
                  <div className=" mt-4 flex gap-1 items-center mb-3">
                    <div className="bg-blue-400 rounded-full flex justify-center items-center">
                      <img
                        alt=""
                        src="/images/icons8-information-64.png"
                        className="w-4 h-4"
                      />
                    </div>
                    <p className="text-[0.65rem] bg-blue-400/30 px-2 py-[1px] rounded-full text-start">
                      Rides expire 20 mins past booked time.
                    </p>
                  </div>
                </div>
              </section>
            )} */}
            {/* if ride is active show this tab at the top */}

            {/* if ride is not active show Departure times at the top */}
            {!active && (
              <section className="w-full border-b border-zinc-300 pb-16 pt-12">
                <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-center text-white">
                  Departure times
                </h1>
                <div className="w-[fit-content] text-[.9rem] sm:text-[1.1rem] font-medium text-white text-center mb-3 flex items-center gap-3 mx-auto">
                  <p> Click on an available time to book now</p>
                  {/* <p className="bg-blue-400 px-2 py-[2px] rounded-lg text-[0.9rem] sm:text-[1rem]">
                    NGN {priceFromDb[0]?.price}
                  </p> */}
                </div>
                <div className="w-full block md:flex">
                  <div className="w-full md:w-1/2 md:p-4 p-0">
                    <div className="w-full min-h-[200px] bg-white rounded-lg p-4">
                      <div className=" mt-1 flex gap-1 items-center mb-3">
                        <div className="bg-blue-400 rounded-full flex justify-center items-center">
                          <img
                            alt=""
                            src="/images/icons8-information-64.png"
                            className="w-4 h-4"
                          />
                        </div>
                        <p className="text-[0.75rem] bg-blue-400/30 px-2 py-[1px] rounded-full">
                          Click on an available time to book a ride
                        </p>
                      </div>
                      <p className="font-medium text-[.8rem] md:text-[.9rem]">
                        Today: {formattedDate}
                      </p>
                      <h2 className="pb-1 border-b border-b-slate-400/80 text-[0.85rem] md:text-[1rem]">
                        From Outside school - Going to school park
                      </h2>
                      <div className="my-4 w-full flex gap-3 md:gap-4 flex-wrap">
                        {morningBookingTimesFromDb?.length > 0 ? (
                          sortedArrMorn.map((item, index) => {
                            return (
                              <ClientMorningTimeBtn key={index} item={item} />
                            );
                          })
                        ) : (
                          <div className="w-[35px] h-[35px] bg-gradient-to-b from-blue-500 to-white rounded-full relative rotate mx-auto">
                            {/* <div className="w-1/3 h-full bg-white"></div> */}
                            <div className="w-1/2 h-1/2 bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 md:p-4 p-0 mt-5 md:mt-0">
                    <div className="w-full min-h-[200px] bg-white rounded-lg p-4">
                      <div className=" mt-1 flex gap-1 items-center mb-3">
                        <div className="bg-blue-400 rounded-full flex justify-center items-center">
                          <img
                            alt=""
                            src="/images/icons8-information-64.png"
                            className="w-4 h-4"
                          />
                        </div>
                        <p className="text-[0.75rem] bg-blue-400/30 px-2 py-[1px] rounded-full">
                          Click on an available time to book a ride
                        </p>
                      </div>
                      <p className="font-medium text-[.8rem] md:text-[.9rem]">
                        Today: {formattedDate}
                      </p>
                      <h2 className="pb-1 border-b border-b-slate-400/80 text-[0.85rem] md:text-[1rem]">
                        From Inside school - Going off-campus
                      </h2>
                      <div className="my-4 w-full flex gap-3 md:gap-4 flex-wrap">
                        {noonBookingTimesFromDb?.length > 0 ? (
                          sortedArrNoon?.map((item, index) => {
                            return (
                              <ClientNoonTimeBtn key={index} item={item} />
                            );
                          })
                        ) : (
                          <div className="w-[35px] h-[35px] bg-gradient-to-b from-blue-500 to-white rounded-full relative rotate mx-auto">
                            {/* <div className="w-1/3 h-full bg-white"></div> */}
                            <div className="w-1/2 h-1/2 bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* if ride is not active show Departure times at the top */}
          </section>
        </section>

        {/* if ride is not active show this box at bottom */}
        {/* {(!active || activeRidesFromDb?.length === 0) && (
          <section className="w-full mt-10 px-[5%] sm:px-[10.5%]">
            <div className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg border-none relative bottom-[-2px] flex items-center gap-2">
              <h2>Active bookings</h2>
              {activeRidesFromDb?.length > 0 && (
                <div className="w-4 h-4 p-[10px] text-[.85rem] flex justify-center items-center border-2 border-blue-400/50 rounded-full">
                  {activeRidesFromDb?.length}
                </div>
              )}
            </div>
            <div className="w-full min-h-[300px] md:min-h-[200px] bg-white rounded-b-lg rounded-tr-lg p-4 relative">
              {activeRidesFromDb?.length > 0 ? (
                activeRidesFromDb?.map((item, index) => {
                  return (
                    <ActiveBooking
                      key={index}
                      item={item}
                      activeRidesFromDb={activeRidesFromDb}
                    />
                  );
                })
              ) : (
                <div className="w-full py-12 bg-sky-50 flex flex-col items-center">
                  <img
                    alt=""
                    src="/images/empty.png"
                    className="w-20 h-20 mb-8"
                  />
                  <p className="text-slate-400">
                    Your active booking will show here...
                  </p>
                </div>
              )}
              <div className=" mt-4 flex gap-1 items-center mb-3">
                <div className="bg-blue-400 rounded-full flex justify-center items-center">
                  <img
                    alt=""
                    src="/images/icons8-information-64.png"
                    className="w-4 h-4"
                  />
                </div>
                <p className="text-[0.65rem] bg-blue-400/30 px-2 py-[1px] rounded-full text-start">
                  Rides expire 20 mins past booked time.
                </p>
              </div>
            </div>
          </section>
        )} */}
        {/* if ride is not active show this box at bottom */}

        {!active && (
          <section className="w-full mt-10 px-[5%] sm:px-[10.5%]">
            <div className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg border-none relative bottom-[-2px] flex items-center gap-2">
              <h2>Successful bookings</h2>
              {rideHistoryFromDb?.length > 0 && (
                <div className="w-4 h-4 p-[10px] text-[.85rem] flex justify-center items-center border-2 border-slate-400/50 rounded-full">
                  {rideHistoryFromDb?.length}
                </div>
              )}
            </div>
            <div className="w-full min-h-[200px] bg-white rounded-b-lg p-4 flex flex-col items-center transition-all duration-300">
              {/* each ride history */}

              {rideHistoryFromDb?.length > 0 && !displayAll ? (
                firstFive?.map((item, index) => {
                  return (
                    <RideHistory
                      key={index}
                      item={item}
                      rideHistoryFromDb={rideHistoryFromDb}
                    />
                  );
                })
              ) : rideHistoryFromDb?.length > 0 && displayAll ? (
                rideHistoryFromDb?.map((item, index) => {
                  return (
                    <RideHistory
                      key={index}
                      item={item}
                      rideHistoryFromDb={rideHistoryFromDb}
                    />
                  );
                })
              ) : (
                <div className="w-full py-12 bg-sky-50 flex flex-col items-center">
                  <img
                    alt=""
                    src="/images/empty.png"
                    className="w-20 h-20 mb-8"
                  />
                  <p className="text-slate-400">No bookings yet...</p>
                </div>
              )}
              {/* <RideHistory priceFromDb={priceFromDb} />
            <RideHistory priceFromDb={priceFromDb} />
            <RideHistory priceFromDb={priceFromDb} /> */}
              {rideHistoryFromDb?.length > 5 && (
                <button
                  onClick={showAll}
                  className=" px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
                >
                  {displayAll ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </section>
        )}

        {active && (
          <section className="w-full mt-10 px-[5%] sm:px-[10.5%]">
            <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-center text-slate-700">
              Departure times
            </h1>
            <div className="w-[fit-content] text-[.9rem] sm:text-[1.1rem] font-medium text-slate-700 text-center mb-3 flex items-center gap-3 mx-auto">
              <p> Click on an available time to book now</p>
              {/* <p className="bg-blue-400 px-2 py-[2px] rounded-lg text-[0.9rem] sm:text-[1rem]">
                    NGN {priceFromDb[0]?.price}
                  </p> */}
            </div>
            <div className="w-full block md:flex">
              <div className="w-full md:w-1/2 md:p-4 p-0">
                <div className="w-full min-h-[200px] bg-white rounded-lg p-4">
                  <div className=" mt-1 flex gap-1 items-center mb-3">
                    <div className="bg-blue-400 rounded-full flex justify-center items-center">
                      <img
                        alt=""
                        src="/images/icons8-information-64.png"
                        className="w-4 h-4"
                      />
                    </div>
                    <p className="text-[0.75rem] bg-blue-400/30 px-2 py-[1px] rounded-full">
                      Click on an available time to book a ride
                    </p>
                  </div>
                  <p className="font-medium text-[.8rem] md:text-[.9rem]">
                    Today: {formattedDate}
                  </p>
                  <h2 className="pb-1 border-b border-b-slate-400/80 text-[0.85rem] md:text-[1rem]">
                    From Outside school - Going to school park
                  </h2>
                  <div className="my-4 w-full flex gap-3 md:gap-4 flex-wrap">
                    {morningBookingTimesFromDb?.length > 0 ? (
                      sortedArrMorn.map((item, index) => {
                        return <ClientMorningTimeBtn key={index} item={item} />;
                      })
                    ) : (
                      <div className="w-[35px] h-[35px] bg-gradient-to-b from-blue-500 to-white rounded-full relative rotate mx-auto">
                        {/* <div className="w-1/3 h-full bg-white"></div> */}
                        <div className="w-1/2 h-1/2 bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:p-4 p-0 mt-5 md:mt-0">
                <div className="w-full min-h-[200px] bg-white rounded-lg p-4">
                  <div className=" mt-1 flex gap-1 items-center mb-3">
                    <div className="bg-blue-400 rounded-full flex justify-center items-center">
                      <img
                        alt=""
                        src="/images/icons8-information-64.png"
                        className="w-4 h-4"
                      />
                    </div>
                    <p className="text-[0.75rem] bg-blue-400/30 px-2 py-[1px] rounded-full">
                      Click on an available time to book a ride
                    </p>
                  </div>
                  <p className="font-medium text-[.8rem] md:text-[.9rem]">
                    Today: {formattedDate}
                  </p>
                  <h2 className="pb-1 border-b border-b-slate-400/80 text-[0.85rem] md:text-[1rem]">
                    From Inside school - Going off-campus
                  </h2>
                  <div className="my-4 w-full flex gap-3 md:gap-4 flex-wrap">
                    {noonBookingTimesFromDb?.length > 0 ? (
                      sortedArrNoon?.map((item, index) => {
                        return <ClientNoonTimeBtn key={index} item={item} />;
                      })
                    ) : (
                      <div className="w-[35px] h-[35px] bg-gradient-to-b from-blue-500 to-white rounded-full relative rotate mx-auto">
                        {/* <div className="w-1/3 h-full bg-white"></div> */}
                        <div className="w-1/2 h-1/2 bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
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
              Limited time offer: Free rides today for first 100 users! Book
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

export default BookRides;
