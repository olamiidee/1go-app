import ActiveBooking from "../components/ActiveBooking";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RideHistory from "../components/RideHistory";
import { useAppContext } from "../contexts/AppContext";

const BookRides = () => {
  const { currentUserFromDb } = useAppContext();
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-slate-100 text-slate-700">
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
            <section className="w-full border-b border-zinc-300 pb-4 text-white">
              <h2 className="text-[1.5rem] font-bold">
                Hello {currentUserFromDb.firstname}
              </h2>
              <p className="text-[1.1rem] font-medium">
                Welcome to your dashboard. You can book rides & view ride
                history here!
              </p>
            </section>
            <section className="w-full border-b border-zinc-300 py-16">
              <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-center text-white">
                Available booking times
              </h1>
              <div className="w-full block md:flex">
                <div className="w-full md:w-1/2 md:p-4 p-0">
                  <div className="w-full min-h-[200px] bg-white rounded-lg p-4">
                    <h2 className="pb-1 border-b border-b-slate-400/80">
                      From Oke-odo - Morning Rides
                    </h2>
                    <div className="my-4 w-full flex gap-2 flex-wrap">
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        6:55AM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        7:35AM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        8:15AM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        8:55AM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        9:35AM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        10:15AM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        10:55AM
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:p-4 p-0 mt-5 md:mt-0">
                  <div className="w-full min-h-[200px] bg-white rounded-lg p-4">
                    <h2 className="pb-1 border-b border-b-slate-400/80">
                      From School Park - Afternoon Rides
                    </h2>
                    <div className="my-4 w-full flex gap-2 flex-wrap">
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        1:55PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        2:35PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        3:15PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        3:55PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        4:35PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        5:15PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        5:55PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        6:35PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        7:15PM
                      </button>
                      <button className="px-3 py-1 bg-blue-300  hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                        7:55PM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section className="w-full mt-10 px-[5%] sm:px-[10.5%]">
          <h2 className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg">
            Active booking
          </h2>
          <div className="w-full min-h-[200px] bg-white rounded-b-lg p-4 relative">
            {/* each active booking */}
            <ActiveBooking />
            <p className="text-[0.75rem] text-slate-500 absolute bottom-4 p-1 bg-blue-400/10">
              PS: You can only have one active booking at a time
            </p>
          </div>
        </section>
        <section className="w-full mt-10 px-[5%] sm:px-[10.5%]">
          <h2 className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg">
            Ride history
          </h2>
          <div className="w-full min-h-[200px] bg-white rounded-b-lg p-4 flex flex-col items-center">
            {/* each ride history */}
            <RideHistory />
            <RideHistory />
            <RideHistory />
            <button className=" px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3">
              Load nore
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default BookRides;
