import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen">
        <div className="overlay w-full h-screen bg-sky-100 flex justify-center items-center">
          <h1 className="text-[3rem] font-bold text-black">About page</h1>
        </div>
      </section>
    </>
  );
};

export default About;
