import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen overlay bg-[#020d18]/80">
        <div className="px-[2%] sm:px-[6%] flex justify-center items-center pt-[100px]">
          <ContactUs />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default Contact;
