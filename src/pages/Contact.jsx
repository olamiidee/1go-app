import ContactUsPage from "../components/ContactUsPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="w-full h-full overlay bg-[#020d18]/90">
        <div className="flex justify-center items-center pt-[100px] px-[4%]">
          <ContactUsPage />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default Contact;
