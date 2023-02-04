import Sidebar from "./Sidebar";
import ScrollToTop from "../ScrollToTop";

const AdminDashboard = () => {
  return (
    <div className="w-full">
      <Sidebar />
      <div
        className={`w-full md:w-[80%] float-right bg-white pt-[80px] md:pt-[50px] px-0 md:px-12 transition-all duration-500`}
      >
        <div className="w-full min-h-screen mb-16 px-3 font-bold text-[3rem]">
          The admin analytics dashboard
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default AdminDashboard;
