import Header from "../components/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="w-full bg-slate-200">
        <section className="w-full min-h-screen bg-home bg-center bg-no-repeat">
          <div className="overlay w-full h-screen bg-gray-800/30 flex justify-center items-center">
            <h1 className="text-[3rem] font-bold text-white">
              Homepage - Book a Ride
            </h1>
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
