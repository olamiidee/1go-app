import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen">
        <div className="overlay w-full h-screen bg-sky-100 flex justify-center items-center">
          <h1 className="text-[3rem] font-bold text-black">Contact page</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
