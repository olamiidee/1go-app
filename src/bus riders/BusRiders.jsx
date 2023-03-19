import { Link } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import ContactUS from "../components/ContactUs";
import ScrollToTop from "../ScrollToTop";
import { useAppContext } from "../contexts/AppContext";
import ClientMorningTimeBtn from "../components/ClientMorningTimeBtn";
import ClientNoonTimeBtn from "../components/ClientNoonTimeBtn";
import Loader from "../components/Loader";

const BusRiders = () => {
  //   const {
  //     accessDashboard,
  //     morningBookingTimesFromDb,
  //     noonBookingTimesFromDb,
  //     formattedDate,
  //   } = useAppContext();
  return (
    <>
      {/* <Header /> */}

      <main className="w-full bg-slate-200">
        <section className="w-full h-[fit-content] sm:min-h-[105vh] bg-bus bg-cover bg-left lg:bg-center bg-no-repeat relative">
          <div className="overlay w-full h-[fit-content] sm:min-h-[105vh] bg-zinc-700/40 block md:flex text-white px-[5%] sm:px-[10.5%] pt-[130px] md:pt-[200px] lg:pt-[15%] pb-40">
            <img
              alt=""
              src="/images/logo.png"
              className="w-12 h-12 md:w-16 md:h-16 absolute top-3 md:top-4 left-2 md:left-[10.5%]"
            />

            <div className="first-section-text mr-auto">
              <p className="text-[0.95rem] tracking-widest uppercase">
                Earn good money with your bus
              </p>
              <h1 className="text-[2rem] font-bold uppercase md:text-[2.5rem] lg:text-[3.5rem]">
                sign up as a 1go driver
              </h1>
              <div className="pb-3 font-medium text-[0.95rem] md:text-[1.23rem] uppercase">
                <p>Tap into the immense transport opportunities</p>
                <p>in the University of Ilorin with 1go</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a href="https://wa.me/message/SNGRGZABOB7TI1">
                  <button className="text-sm w-fit flex items-center gap-2 bg-blue-500 px-10 py-3 uppercase hover:bg-transparent border-blue-500 border-2 rounded-md transition-all duration-300">
                    <img
                      alt=""
                      src="/images/icons8-whatsapp-24.png"
                      className="w-6 h-6 cursor-pointer hover:translate-y-[6px] transition-all duration-300"
                    />
                    <p>Apply on whatsapp</p>
                  </button>
                </a>
                <a href="https://forms.gle/tNpmW7KYHfWFxXfe9">
                  <button className="text-sm w-fit flex items-center gap-2 bg-blue-500 px-10 py-3 uppercase hover:bg-transparent border-blue-500 border-2 rounded-md transition-all duration-300">
                    <img
                      alt=""
                      src="/images/icons8-form-24.png"
                      className="w-6 h-6 cursor-pointer hover:translate-y-[6px] transition-all duration-300"
                    />
                    <p>Apply with form</p>
                  </button>
                </a>
              </div>
            </div>
            {/* <div className="w-full md:w-[40%] mt-8 md:mt-0">
              <div className="bg-white/30 px-4 py-1 md:py-3 w-[fit-content] rounded-t-md text-[0.85rem] md:text-[1rem]">
                Departure Times Today:{" "}
                <span className="font-bold first-section-text">
                  {formattedDate}
                </span>
              </div>
              <div className="w-full h-[fit-content] bg-white rounded-md px-3 py-2 md:py-3 text-slate-700">
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
                <div>
                  <h2 className="pb-1 border-b border-b-slate-400/80 text-[0.75rem] md:text-[1rem]">
                    From Outside school - Going to school park
                  </h2>
                  <div className="my-4 w-full flex gap-3 md:gap-4 flex-wrap">
                    {morningBookingTimesFromDb?.length > 0 ? (
                      morningBookingTimesFromDb.map((item, index) => {
                        return <ClientMorningTimeBtn key={index} item={item} />;
                      })
                    ) : (
                      <div className="w-[35px] h-[35px] bg-gradient-to-b from-blue-500 to-white rounded-full relative rotate mx-auto">
                        <div className="w-1/2 h-1/2 bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 md:mt-8">
                  <h2 className="pb-1 border-b border-b-slate-400/80 text-[0.75rem] md:text-[1rem]">
                    From Inside school - Going off-campus
                  </h2>
                  <div className="my-4 w-full flex gap-3 md:gap-4 flex-wrap">
                    {noonBookingTimesFromDb?.length > 0 ? (
                      noonBookingTimesFromDb.map((item, index) => {
                        return <ClientNoonTimeBtn key={index} item={item} />;
                      })
                    ) : (
                      <div className="w-[35px] h-[35px] bg-gradient-to-b from-blue-500 to-white rounded-full relative rotate mx-auto">
                        <div className="w-1/2 h-1/2 bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <svg
            className="w-full absolute bottom-[-1px] left-0 z-[0] hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#e2e8f0"
              fillOpacity="1"
              d="M0,128L60,149.3C120,171,240,213,360,218.7C480,224,600,192,720,176C840,160,960,160,1080,170.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>

          {/* mobile wave */}
          <svg
            className="w-full absolute bottom-[-1px] left-0 z-[0] block md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#e2e8f0"
              fillOpacity="1"
              d="M0,0L60,0C120,0,240,0,360,16C480,32,600,64,720,101.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </section>

        <section className="w-full min-h-[300px] pb-10 text-slate-700 lg:px-[10%] px-5 font-light">
          <div className="w-fit mx-auto mb-10">
            <h2 className="text-[1.65rem] md:text-[3rem] font-bold text-center uppercase">
              About 1go
            </h2>
            <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 to-white/10"></div>
          </div>
          <div className="w-full mb-10 ">
            <p className="text-center">
              1go is a bus-hailing platform designed specifically for university
              and polytechnic campuses across Nigeria. 1go assist students in
              getting cheap and stress-free rides at the time they desire. 1go
              also assist coaster bus drivers/operators to earn massive income
              with ease.
            </p>
          </div>
          <h2 className="text-[1.2rem] md:text-[1.5rem] mb-8 sm:mb-8 font-bold text-center uppercase">
            Why choose 1go?
          </h2>
          <div className="block sm:flex gap-10 justify-between items-start">
            <div className="w-full sm:w-1/3 block gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-money-80.png"
                className="w-10 h-10 mx-auto"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-blue-500 text-[1.1rem] uppercase text-center">
                  Earn massive income
                </h2>
                <p className=" mt-3 text-center mb-5 text-[.9rem]">
                  Income for a 25 - 30 seater bus ranges from NGN 45,000 to NGN
                  55,000 per day. Driving with 1go is a good way for a coaster
                  bus driver/operator to generate massive revenue
                </p>
                {/* <button className="py-1 px-6 bg-blue-500/20 text-blue-500 border border-blue-500 hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
            <div className="w-full sm:w-1/3 block gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-easy-50.png"
                className="w-10 h-10 mx-auto"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-blue-500 text-[1.1rem] uppercase text-center">
                  Easy
                </h2>
                <p className=" mt-3 text-center mb-5 text-[.9rem]">
                  Guess what? You don't need a mobile app or website to pick up
                  passengers. Pick up and drop off are done at few designated
                  terminals every day. Passengers would always be at the
                  terminal waiting for you.
                </p>
                {/* <button className="py-1 px-6 bg-blue-500/20 text-blue-500 border border-blue-500 hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
            <div className="w-full sm:w-1/3 block gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-lazy-50.png"
                className="w-10 h-10 mx-auto"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-blue-500 text-[1.1rem] uppercase text-center">
                  No extra work
                </h2>
                <p className=" mt-3 text-center mb-5 text-[.9rem]">
                  All you have to do is drive, our personnels at the terminal
                  help in checking in passengers
                </p>
                {/* <button className="py-1 px-6 bg-blue-500/20 text-blue-500 border border-blue-500 hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
            <div className="w-full sm:w-1/3 block gap-3 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-parking-50.png"
                className="w-10 h-10 mx-auto"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-blue-500 text-[1.1rem] uppercase text-center">
                  Free parking space
                </h2>
                <p className=" mt-3 text-center mb-5 text-[.9rem]">
                  Worried about where to park your bus at night or when you're
                  not working? Well worry no more, because 1go provides you with
                  a free and secure parking space.
                </p>
                {/* <button className="py-1 px-6 bg-blue-500/20 text-blue-500 border border-blue-500 hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] py-20 bg-slate-600 text-white lg:px-[15%] px-5 font-light">
          <div className="w-fit mx-auto mb-16 sm:mb-10">
            <h2 className="text-[1.2rem] md:text-[1.5rem] mb-2 sm:mb-0 font-bold text-center uppercase">
              how it works
            </h2>
            <div className="w-full h-[1px] bg-gradient-to-r from-blue-500 to-white/10"></div>
          </div>

          <div className="block sm:flex gap-10 justify-between items-start">
            <div className="w-full sm:w-1/3 block gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-shuttle-bus-50.png"
                className="w-10 h-10 mx-auto"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-blue-500 text-[1.1rem] uppercase text-center">
                  Proceed to the terminal
                </h2>
                <p className=" mt-3 text-center mb-5 text-[.9rem]">
                  You would be given a timetable showing, which terminal
                  passengers would be at and time. The two main terminals are;
                  The University of Ilorin school park and The University of
                  Ilorin bus terminus which are about 9.1km apart.
                </p>
                {/* <button className="py-1 px-6 bg-blue-500/20 text-blue-500 border border-blue-500 hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
            <div className="w-full sm:w-1/3 block gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-region-50.png"
                className="w-10 h-10 mx-auto"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-blue-500 text-[1.1rem] uppercase text-center">
                  Pick up and drop off
                </h2>
                <p className=" mt-3 text-center mb-5 text-[.9rem]">
                  Pick up and drop off of passengers are done mainly at two
                  terminals ( The University of Ilorin school park and The
                  University of Ilorin bus terminus) The pickup process made
                  super easy by the 1go personnels at the terminal.
                </p>
                {/* <button className="py-1 px-6 bg-blue-500/20 text-blue-500 border border-blue-500 hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
            <div className="w-full sm:w-1/3 block gap-3 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-money-80.png"
                className="w-10 h-10 mx-auto"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-blue-500 text-[1.1rem] uppercase text-center">
                  Payment
                </h2>
                <p className=" mt-3 text-center mb-5 text-[.9rem]">
                  Payments are made directly to the bus driver's/operator's bank
                  account. Payments are made at the end of each day.
                </p>
                {/* <button className="py-1 px-6 bg-blue-500/20 text-blue-500 border border-blue-500 hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-slate-600 py-6 text-center text-slate-300 text-[.8rem] text-light border-t border-slate-500">
          <p>&copy; 2023 1go. All rights reserved</p>
        </section>
      </main>
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default BusRiders;
