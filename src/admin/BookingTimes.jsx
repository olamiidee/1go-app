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
    handlePriceChange,
    handlePriceSubmit,
    priceFromDb,
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

  //to open price edit time modal
  const [openPriceEdit, setOpenPriceEdit] = useState(false);
  function handlePriceEdit() {
    setOpenPriceEdit((prev) => !prev);
  }

  return (
    <div className="w-full">
      {loader && <Loader />}
      <Sidebar />
      <div
        className={`w-full md:w-[80%] min-h-screen pb-24 float-right bg-sky-50 pt-[80px] md:pt-[60px] px-3 md:px-12 transition-all duration-500 text-slate-700`}
      >
        <h1 className="w-full font-bold text-[1.75rem]">Booking times</h1>
        <div className="w-full min-h-[200px] bg-white p-4 mt-8 rounded-lg shadow-xl shadow-slate-300/30 border border-sky-500 relative">
          <h2 className="pb-1 border-b border-b-slate-400/80">
            Manage booking times{" "}
            <strong>( From Outside school - Going to school park)</strong>
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
            <div className="w-full h-full sm:h-[77%] bg-blue-50 absolute bottom-0 left-0 rounded-lg">
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
                <form className="flex gap-2 sm:gap-4 flex-wrap">
                  <input
                    type="number"
                    id="morningHour"
                    onChange={handleMorningChange}
                    placeholder="7"
                    className="bg-blue-50 w-10 sm:w-16 px-[6px] sm:p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <p className="font-bold text-[2rem]">:</p>
                  <input
                    type="number"
                    id="morningMinute"
                    onChange={handleMorningChange}
                    placeholder="15"
                    className="bg-blue-50 w-10 sm:w-16 px-[6px] sm:p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="AM"
                      onChange={handleMorningChange}
                      value={morningForm.morningAmpm}
                      className="bg-blue-50 w-12 sm:w-16 px-[6px] sm:p-3 border-2 border-blue-400 rounded-md outline-none h-full"
                    />
                    <div className="absolute top-0 w-full h-full bg-blue-400/20"></div>
                  </div>
                  <div className="text-center">
                    <input
                      type="number"
                      id="slots"
                      onChange={handleMorningChange}
                      placeholder="14"
                      className="bg-blue-50 w-12 sm:w-16 px-[6px] sm:px-3 border-2 border-blue-400 rounded-md outline-none"
                      required
                    />
                    <p>Slots</p>
                  </div>
                  <div className="text-center">
                    <input
                      type="number"
                      id="price"
                      onChange={handleMorningChange}
                      placeholder="200"
                      className="bg-blue-50 w-16 sm:w-16 px-[6px] sm:px-3 border-2 border-blue-400 rounded-md outline-none"
                      required
                    />
                    <p>Price</p>
                  </div>
                  <button
                    onClick={handleMorningBookingTimeSubmit}
                    className="h-[fit-content] py-3 px-5 sm:px-8 bg-blue-400 rounded-md text-white hover:bg-blue-500"
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
            <strong>( From Inside school - Going off-campus )</strong>
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
            <div className="w-full h-full sm:h-[77%] bg-blue-50 absolute bottom-0 left-0 rounded-lg">
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
                <form className="flex gap-2 sm:gap-4 flex-wrap">
                  <input
                    type="number"
                    id="noonHour"
                    onChange={handlenoonChange}
                    placeholder="7"
                    className="bg-blue-50 w-10 sm:w-16 px-[6px] sm:p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <p className="font-bold text-[2rem]">:</p>
                  <input
                    type="number"
                    id="noonMinute"
                    onChange={handlenoonChange}
                    placeholder="15"
                    className="bg-blue-50 w-10 sm:w-16 px-[6px] sm:p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="PM"
                      value={noonForm.noonAmpm}
                      onChange={handlenoonChange}
                      className="bg-blue-50 w-12 sm:w-16 px-[6px] sm:p-3 border-2 border-blue-400 rounded-md outline-none h-full"
                    />
                    <div className="absolute top-0 w-full h-full bg-blue-400/20"></div>
                  </div>
                  <div className="text-center">
                    <input
                      type="number"
                      id="slots"
                      onChange={handlenoonChange}
                      placeholder="14"
                      className="bg-blue-50 w-12 sm:w-16 px-[6px] sm:px-3 border-2 border-blue-400 rounded-md outline-none"
                      required
                    />
                    <p>Slots</p>
                  </div>
                  <div className="text-center">
                    <input
                      type="number"
                      id="price"
                      onChange={handlenoonChange}
                      placeholder="200"
                      className="bg-blue-50 w-16 sm:w-16 px-[6px] sm:px-3 border-2 border-blue-400 rounded-md outline-none"
                      required
                    />
                    <p>Price</p>
                  </div>
                  <button
                    onClick={handleNoonBookingTimeSubmit}
                    className="h-[fit-content] py-3 px-5 sm:px-8 bg-blue-400 rounded-md text-white hover:bg-blue-500"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* <h1 className="w-full font-bold text-[1.75rem] mt-12">Price</h1>
        <div className="w-full min-h-[200px] bg-white p-4 mt-8 rounded-lg shadow-xl shadow-slate-300/30 border border-sky-500 relative">
          <h2 className="pb-1 border-b border-b-slate-400/80">Edit price</h2>
          <div className="my-4 w-full flex gap-4 flex-wrap">
            <div className="text-[1.5rem] font-bold">
              NGN {priceFromDb[0]?.price}.00
            </div>
            <button
              onClick={handlePriceEdit}
              className="px-8 py-1 bg-white border-2 border-blue-400  hover:bg-blue-500 hover:text-white rounded-md text-[0.85rem] transition-all duration-300"
            >
              <p>Change</p>
            </button>
          </div>
          {openPriceEdit && (
            <div className="w-full h-[77%] bg-blue-50 absolute bottom-0 left-0">
              <img
                alt=""
                src="/images/icons8-close-30.png"
                className="w-6 h-6 mb-8 absolute top-3 right-3 cursor-pointer"
                onClick={handlePriceEdit}
              />
              <div className="w-full p-2 flex flex-col items-center">
                <h2 className="pb-4 text-center font-medium">Change price</h2>
                <form className="flex gap-4">
                  <div className="text-[1.5rem] font-bold">NGN</div>
                  <input
                    type="number"
                    id="price"
                    onChange={handlePriceChange}
                    placeholder="100"
                    className="bg-blue-50 w-16 p-3 border-2 border-blue-400 rounded-md outline-none"
                    required
                  />
                  <button
                    onClick={handlePriceSubmit}
                    className="py-3 px-8 bg-blue-400 rounded-md text-white hover:bg-blue-500"
                  >
                    Change
                  </button>
                </form>
              </div>
            </div>
          )}
        </div> */}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default BookingTimes;
