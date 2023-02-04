import { Link } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import ContactUS from "../components/ContactUs";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="w-full bg-slate-200">
        <section className="w-full h-[fit-content] sm:min-h-[105vh] bg-home bg-cover bg-right lg:bg-center bg-no-repeat relative">
          <div className="overlay w-full h-[fit-content] sm:min-h-[105vh] bg-zinc-700/40 block md:flex justify-between text-white px-[5%] sm:px-[10.5%] pt-[160px] md:pt-[200px] lg:pt-[15%] pb-40">
            <div className="absolute top-0 md:top-1 left-4 md:left-[10.5%] text-[0.9rem] text-slate-200 flex gap-2 items-center">
              <img
                alt=""
                src="/images/icons8-information-64.png"
                className="w-4 h-4"
              />
              <p className="underline">Contact us</p>
            </div>
            <div className="first-section-text">
              <p className="text-[0.95rem] tracking-widest">AVOID THE RUSH</p>
              <h1 className="text-[2rem] font-bold uppercase md:text-[2.5rem] lg:text-[3.5rem]">
                Beat The Queue!!
              </h1>
              <div className="pb-3 font-medium text-[0.95rem] md:text-[1.23rem] uppercase">
                <p>Get easy rides for as low as -- NGN 200</p>
                <p>From Oke-Odo to school park and vice versa</p>
              </div>
              <button className="text-sm bg-blue-500 px-10 py-3 uppercase hover:bg-transparent border-blue-500 border-2 rounded-md transition-all duration-300">
                <Link to="/login">Book Now</Link>
              </button>
            </div>
            <div className="w-full md:w-[40%] mt-8 md:mt-0">
              <div className="bg-white/30 px-4 py-3 w-[fit-content] rounded-t-md">
                Booking Times Today
              </div>
              <div className="w-full h-[fit-content] bg-white rounded-md p-3 text-slate-700">
                <div>
                  <h2 className="pb-1 border-b border-b-slate-400/80">
                    From Oke-odo - Morning Rides
                  </h2>
                  <div className="my-4 w-full flex gap-2 flex-wrap">
                    <button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                      6:55AM
                    </button>
                    <button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                      7:35AM
                    </button>
                    <button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                      8:15AM
                    </button>
                    <button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                      8:55AM
                    </button>
                    <button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                      9:35AM
                    </button>
                    <button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                      10:15AM
                    </button>
                    <button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 hover:text-white rounded-sm text-[0.85rem] transition-all duration-300">
                      10:55AM
                    </button>
                  </div>
                </div>

                {/* afternoon rides */}
                <div className="mt-8">
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
              <div>Click on an available time to book</div>
            </div>
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

        {/* Testimonial */}
        <section className="w-full py-[80px]">
          <h2 className="text-[2rem] font-bold text-center">
            Testimonial from our users
          </h2>
          <p className="font-light text-center text-[1rem] md:pb-24 w-[80%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            necessitatibus
          </p>
          <Testimonials />
        </section>

        {/* Contact form */}
        <section className="w-full">
          <ContactUs />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Homepage;
