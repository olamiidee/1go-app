import Sidebar from "./Sidebar";
import ScrollToTop from "../ScrollToTop";
import { useAppContext } from "../contexts/AppContext";
import { useState } from "react";
import Loader from "../components/Loader";
import AdminMorningBookingTimeBtn from "./AdminMorningBookingTimeBtn";
import AdminNoonBookingTimeBtn from "./AdminNoonBookingTimeBtn";
// import { useAdminContext } from "../contexts/AdminContext";

const BookingTimes = () => {
  const {
    handleMorningChange,
    morningForm,
    handlenoonChange,
    noonForm,
    loader,
    handleMorningBookingTimeSubmit,
    morningBookingTimesFromDb,
    handleNoonBookingTimeSubmit,
    noonBookingTimesFromDb,
    handleDeleteMorningTime,
    handleDeleteNoonTime,
  } = useAppContext();

  //to open morning edit time modal
  const [openMorningEdit, setOpenMorningEdit] = useState(false);
  function handleMorningEdit() {
    setOpenMorningEdit((prev) => !prev);
  }

  //to open noon edit time modal
  const [openNoonEdit, setOpenNoonEdit] = useState(false);
  function handleNoonEdit() {
    setOpenNoonEdit((prev) => !prev);
  }

  return (
    <div className="w-full">
      {loader && <Loader />}
      <Sidebar />
      <div
        className={`w-full md:w-[80%] min-h-screen mb-16 float-right bg-sky-50 pt-[80px] md:pt-[60px] px-3 md:px-12 transition-all duration-500 text-slate-700`}
      >
        <h1 className="w-full font-bold text-[1.75rem]">Booking times</h1>
        <div className="w-full min-h-[200px] bg-white p-4 mt-8 rounded-lg shadow-xl shadow-slate-300/30 border border-sky-500 relative">
          <h2 className="pb-1 border-b border-b-slate-400/80">
            Manage booking times <strong>(From Oke-odo - Morning Rides)</strong>
          </h2>
          <div className="my-4 w-full flex gap-4 flex-wrap">
            {morningBookingTimesFromDb &&
              morningBookingTimesFromDb?.map((item, index) => {
                return (
                  <AdminMorningBookingTimeBtn
                    key={index}
                    item={item}
                    handleDeleteMorningTime={handleDeleteMorningTime}
                  />
                );
              })}
            <button
              onClick={handleMorningEdit}
              className="px-8 py-1 bg-white flex gap-3 items-center border-2 border-blue-400  hover:bg-blue-500 hover:text-white rounded-md text-[0.85rem] transition-all duration-300"
            >
              <img
                alt=""
                src="/images/icons8-plus-30.png"
                className="w-6 h-6"
              />
              <p>Add</p>
            </button>
          </div>
          {openMorningEdit && (
            <div className="w-full h-[77%] bg-blue-50 absolute bottom-0 left-0">
              <img
                alt=""
                src="/images/icons8-close-30.png"
                className="w-6 h-6 mb-8 absolute top-3 right-3 cursor-pointer"
                onClick={handleMorningEdit}
              />
              <div className="w-full p-2 flex flex-col items-center">
                <h2 className="pb-4 text-center font-medium">
                  Add booking time
                </h2>
                <form className="flex gap-4">
                  <input
                    type="number"
                    id="morningHour"
                    onChange={handleMorningChange}
                    placeholder="7"
                    className="bg-blue-50 w-16 p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <p className="font-bold text-[2rem]">:</p>
                  <input
                    type="number"
                    id="morningMinute"
                    onChange={handleMorningChange}
                    placeholder="15"
                    className="bg-blue-50 w-16 p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="AM"
                      onChange={handleMorningChange}
                      value={morningForm.morningAmpm}
                      className="bg-blue-50 w-16 p-3 border-2 border-blue-400 rounded-md outline-none"
                    />
                    <div className="absolute top-0 w-full h-full bg-blue-400/20"></div>
                  </div>
                  <button
                    onClick={handleMorningBookingTimeSubmit}
                    className="py-3 px-8 bg-blue-400 rounded-md text-white hover:bg-blue-500"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="w-full min-h-[200px] bg-white p-4 mt-8 rounded-lg shadow-xl shadow-slate-300/30 border border-sky-500 relative">
          <h2 className="pb-1 border-b border-b-slate-400/80">
            Manage booking times{" "}
            <strong>( From School Park - Afternoon Rides )</strong>
          </h2>
          <div className="my-4 w-full flex gap-4 flex-wrap">
            {noonBookingTimesFromDb &&
              noonBookingTimesFromDb?.map((item, index) => {
                return (
                  <AdminNoonBookingTimeBtn
                    key={index}
                    item={item}
                    handleDeleteNoonTime={handleDeleteNoonTime}
                  />
                );
              })}
            <button
              onClick={handleNoonEdit}
              className="px-8 py-1 bg-white flex gap-3 items-center border-2 border-blue-400  hover:bg-blue-500 hover:text-white rounded-md text-[0.85rem] transition-all duration-300"
            >
              <img
                alt=""
                src="/images/icons8-plus-30.png"
                className="w-6 h-6"
              />
              <p>Add</p>
            </button>
          </div>
          {openNoonEdit && (
            <div className="w-full h-[77%] bg-blue-50 absolute bottom-0 left-0">
              <img
                alt=""
                src="/images/icons8-close-30.png"
                className="w-6 h-6 mb-8 absolute top-3 right-3 cursor-pointer"
                onClick={handleNoonEdit}
              />
              <div className="w-full p-2 flex flex-col items-center">
                <h2 className="pb-4 text-center font-medium">
                  Add booking time
                </h2>
                <form className="flex gap-4">
                  <input
                    type="number"
                    id="noonHour"
                    onChange={handlenoonChange}
                    placeholder="7"
                    className="bg-blue-50 w-16 p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <p className="font-bold text-[2rem]">:</p>
                  <input
                    type="number"
                    id="noonMinute"
                    onChange={handlenoonChange}
                    placeholder="15"
                    className="bg-blue-50 w-16 p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="PM"
                      value={noonForm.noonAmpm}
                      onChange={handlenoonChange}
                      className="bg-blue-50 w-16 p-3 border-2 border-blue-400 rounded-md outline-none"
                    />
                    <div className="absolute top-0 w-full h-full bg-blue-400/20"></div>
                  </div>
                  <button
                    onClick={handleNoonBookingTimeSubmit}
                    className="py-3 px-8 bg-blue-400 rounded-md text-white hover:bg-blue-500"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default BookingTimes;
