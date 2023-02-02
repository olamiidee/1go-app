import { Link } from "react-router-dom";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="w-full bg-slate-200">
        <section className="w-full min-h-screen bg-home bg-center bg-no-repeat">
          <div className="overlay w-full h-screen bg-gray-800/30 flex flex-col justify-center items-start space-y-3 text-white px-[5%] sm:px-[10%]">
            <h1 className="text-[2.5rem] font-bold uppercase md:text-[3rem]">
              Beat The Queue!!
            </h1>
            <div className="pb-3">
              <p>Get easy rides for as low as ---</p>
              <p>From Oke-Odo to school park and vice versa</p>
            </div>

            <button className="text-sm bg-blue-500 px-8 py-2 uppercase hover:bg-transparent hover:border-blue-500 hover:border-2">
              <Link to="/login">Book Now</Link>
            </button>
          </div>
        </section>
        <section className="h-screen">
          <h1>Section two</h1>
        </section>
      </main>
    </>
  );
};

export default Homepage;
