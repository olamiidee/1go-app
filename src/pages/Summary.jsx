import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Summary = () => {
  const { morningBookingTimesFromDb, noonBookingTimesFromDb, priceFromDb } =
    useAppContext();
  let allTimes = [...morningBookingTimesFromDb, ...noonBookingTimesFromDb];

  const { id } = useParams();
  const eachTime = allTimes.filter((item) => item.id === id)[0];

  return (
    <>
      <Header />
      <section className="w-full min-h-screen py-28 md:py-40 bg-gradient-to-b from-zinc-500/70 to-blue-400/10 text-slate-700">
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
          <h2 className="text-[1rem] md:text-[1.5rem] font-medium w-[fit-content] bg-white py-2 px-5 rounded-t-lg">
            Summary
          </h2>
          <div className="w-full min-h-[340px] md:min-h-[260px] bg-white rounded-b-lg p-4 relative">
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
                  src="/images/icons8-qr-code-48.png"
                  className="w-6 h-6 mr-1"
                />
                <p>
                  Booking Code: <strong>8441</strong>
                </p>
              </div>
              <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md mr-auto">
                <img
                  alt=""
                  src="/images/icons8-cost-58.png"
                  className="w-6 h-6 mr-1"
                />
                <p>
                  Price: <strong>NGN {priceFromDb[0]?.price}</strong>
                </p>
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
                <p className="font-bold">7:55AM</p>
              </div>
              <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                <div className="mr-auto flex items-center">
                  <img
                    alt=""
                    src="/images/icons8-qr-code-48.png"
                    className="w-6 h-6 mr-1"
                  />
                  <p>Booking Code: </p>
                </div>
                <p className="font-bold">8441</p>
              </div>
              <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
                <div className="mr-auto flex items-center">
                  <img
                    alt=""
                    src="/images/icons8-cost-58.png"
                    className="w-6 h-6 mr-1"
                  />
                  <p>Price: </p>
                </div>
                <p className="font-bold">NGN 100</p>
              </div>
            </div>

            <p className="text-[0.75rem] text-slate-500 absolute bottom-4 p-1 bg-blue-400/10">
              PS: Prices may vary based on demand
            </p>
            <button className="w-full md:w-[fit-content] px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3">
              Proceed to payment
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Summary;
