import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen">
        <div className="overlay w-full h-[80vh] bg-sky-100 flex justify-center items-center">
          <h1 className="text-[3rem] font-bold text-black">Contact page</h1>
        </div>
        <div>
          <ContactUs />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default Contact;
