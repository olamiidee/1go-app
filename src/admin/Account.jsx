import Sidebar from "./Sidebar";
import ScrollToTop from "../ScrollToTop";

const Account = () => {
  return (
    <div className="w-full">
      <Sidebar />
      <div
        className={`w-full md:w-[80%] float-right bg-sky-50 pt-[80px] md:pt-[60px] px-0 md:px-12 transition-all duration-500 text-slate-700`}
      >
        <div className="w-full min-h-screen mb-16 px-3 font-bold text-[1.75rem]">
          Admin Account
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Account;
