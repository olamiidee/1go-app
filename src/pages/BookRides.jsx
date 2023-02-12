import ActiveBooking from "../components/ActiveBooking";
import BookSuccessModal from "../components/BookSuccessModal";
import ClientMorningTimeBtn from "../components/ClientMorningTimeBtn";
import ClientNoonTimeBtn from "../components/ClientNoonTimeBtn";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RideHistory from "../components/RideHistory";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const BookRides = () => {
  const {
    currentUserFromDb,
    morningBookingTimesFromDb,
    noonBookingTimesFromDb,
    priceFromDb,
    bookingSuccess,
    activeRidesFromDb,
    rideHistoryFromDb,
  } = useAppContext();
  return (
    <>
      <Header />
      {bookingSuccess && <BookSuccessModal />}
      <section className="w-full min-h-screen pb-32 bg-slate-100 text-slate-700">
        <section className="w-full bg-reg1 bg-cover bg-right lg:bg-center bg-no-repeat">
          <section className="w-full bg-gradient-to-b from-zinc-900/70 to-zinc-700/40 py-[150px] px-[5%] sm:px-[10.5%]">
            <div className="absolute top-0 md:top-1 left-4 md:left-[10.5%] text-[0.9rem] text-slate-200 flex gap-2 items-center">
              <img
                alt=""
                src="/images/icons8-information-64.png"
                className="w-4 h-4"
              />
              <p className="underline">Contact us</p>
            </div>
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
            {activeRidesFromDb.length > 0 && (
              <section className="w-full mt-10">
                <h2 className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg">
                  Active booking
                </h2>
                <div className="w-full min-h-[300px] md:min-h-[200px] bg-white rounded-b-lg p-4 relative">
                  {/* each active booking */}
                  {activeRidesFromDb ? (
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
                  {/* <ActiveBooking /> */}
                  <p className="text-[0.75rem] text-slate-500 absolute bottom-4 p-1 bg-blue-400/10">
                    PS: You can only have one active booking at a time
                  </p>
                </div>
              </section>
            )}
            {/* if ride is active show this tab at the top */}

            {/* if ride is not active show booking times at the top */}
            {!activeRidesFromDb.length > 0 && (
              <section className="w-full border-b border-zinc-300 pb-16 pt-12">
                <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-center text-white">
                  Available booking times
                </h1>
                <div className="w-[fit-content] text-[1.1rem] font-medium text-white text-center mb-3 flex items-center gap-3 mx-auto">
                  <p> Click on a time to book now at</p>{" "}
                  <p className="bg-blue-400 px-2 py-[2px] rounded-lg">
                    NGN {priceFromDb[0]?.price}
                  </p>
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
                        <p className="text-[0.75rem] bg-blue-400/50 px-2 py-[2px] rounded-full">
                          Click on an available time to book a ride
                        </p>
                      </div>
                      <h2 className="pb-1 border-b border-b-slate-400/80">
                        From Oke-odo - Morning Rides
                      </h2>
                      <div className="my-4 w-full flex gap-3 md:gap-4 flex-wrap">
                        {morningBookingTimesFromDb.map((item, index) => {
                          return (
                            <ClientMorningTimeBtn key={index} item={item} />
                          );
                        })}
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
                        <p className="text-[0.75rem] bg-blue-400/50 px-2 py-[2px] rounded-full">
                          Click on an available time to book a ride
                        </p>
                      </div>
                      <h2 className="pb-1 border-b border-b-slate-400/80">
                        From School Park - Afternoon Rides
                      </h2>
                      <div className="my-4 w-full flex gap-3 md:gap-4 flex-wrap">
                        {noonBookingTimesFromDb.map((item, index) => {
                          return <ClientNoonTimeBtn key={index} item={item} />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* if ride is not active show booking times at the top */}
          </section>
        </section>

        {/* if ride is not active show this box at bottom */}
        {!activeRidesFromDb.length > 0 && (
          <section className="w-full mt-10 px-[5%] sm:px-[10.5%]">
            <h2 className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg">
              Active booking
            </h2>
            <div className="w-full min-h-[300px] md:min-h-[200px] bg-white rounded-b-lg p-4 relative">
              {/* each active booking */}
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
              {/* <ActiveBooking /> */}
              <p className="text-[0.75rem] text-slate-500 absolute bottom-4 p-1 bg-blue-400/10">
                PS: You can only have one active booking at a time
              </p>
            </div>
          </section>
        )}
        {/* if ride is not active show this box at bottom */}

        <section className="w-full mt-10 px-[5%] sm:px-[10.5%]">
          <h2 className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg">
            Ride history
          </h2>
          <div className="w-full min-h-[200px] bg-white rounded-b-lg p-4 flex flex-col items-center">
            {/* each ride history */}

            {rideHistoryFromDb.length > 0 ? (
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
                <p className="text-slate-400">No booking history yet...</p>
              </div>
            )}
            {/* <RideHistory priceFromDb={priceFromDb} />
            <RideHistory priceFromDb={priceFromDb} />
            <RideHistory priceFromDb={priceFromDb} /> */}
            <button className=" px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3">
              Load more
            </button>
          </div>
        </section>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BookRides;
