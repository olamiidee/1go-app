import Sidebar from "./Sidebar";
import ScrollToTop from "../ScrollToTop";
import RideHistory from "../components/RideHistory";

const AdminDashboard = () => {
  return (
    <div className="w-full">
      <Sidebar />
      <div
        className={`w-full md:w-[80%] min-h-screen mb-16 float-right bg-sky-50 pt-[80px] md:pt-[60px] px-3 md:px-12 transition-all duration-500 text-slate-700`}
      >
        <h1 className="w-full font-bold text-[1.75rem]">Admin dashboard</h1>
        <div className="w-full block md:flex mt-8">
          <div className="w-full md:w-1/2 md:pr-3">
            <div className="p-3 bg-white rounded-lg shadow-xl shadow-slate-300/30 border border-sky-500 flex gap-4">
              <div className="w-[80px] rounded-lg bg-blue-400 flex justify-center items-center">
                <img
                  alt=""
                  src="/images/icons8-user-64.png"
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="text-[0.9rem] md:text-[1.2rem]">Total users</h3>
                <h3 className="font-bold text-[1.5rem]">20</h3>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 md:mt-0 md:w-1/2 md:pl-3">
            <div className="p-3 bg-white rounded-lg shadow-xl shadow-slate-300/30 border border-sky-500 flex gap-4">
              <div className="w-[80px] rounded-lg bg-green-500 flex justify-center items-center">
                <img
                  alt=""
                  src="/images/icons8-purchase-order-50.png"
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="text-[0.9rem] md:text-[1.2rem]">
                  Total bookings
                </h3>
                <h3 className="font-bold text-[1.5rem]">43</h3>
              </div>
              <div className="border-l border-sky-500 pl-3">
                <h3 className="text-[0.9rem] md:text-[1.2rem]">Total today</h3>
                <h3 className="font-bold text-[1.5rem]">5</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 bg-white rounded-lg shadow-xl shadow-slate-300/30 border border-sky-500 mt-8">
          <h3 className="text-[1.1rem] font-medium pb-2 mb-4 border-b border-slate-300">
            Booking history today
          </h3>
          <RideHistory />
          <RideHistory />
          <RideHistory />
          <RideHistory />
          <RideHistory />
          <div className="w-full text-center">
            <button className="px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3">
              Load nore
            </button>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default AdminDashboard;
