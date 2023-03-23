import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const BookingSuccess = ({ eachTime, detailsForm }) => {
  const { cloaseSuccessModal, rideHistoryFromDb } = useAppContext();
  let ride = rideHistoryFromDb[0];
  //   console.log(ride);
  return (
    <div className="w-full h-[100vh] py-16 px-4 md:px-8 bg-blue-50 flex justify-center">
      <div className="w-full text-[.9rem] text-slate-600 md:text-[1.2rem] rounded-2xl flex justify-center">
        <div className="w-full sm:max-w-[550px] sm:h-fit scale flex flex-col gap-2 items-center bg-blue-50 sm:p-8 sm:shadow-md rounded-lg relative">
          <div className="px-3 pb-3 pt-12 rounded-md bg-blue-300/10">
            <div className="w-fit h-fit rounded-full bg-white mx-auto absolute top-[-30px] md:top-[-15px] left-[50%] translate-x-[-50%]">
              <img
                alt=""
                src="/images/icons8-checkmark-64.png"
                className="w-16 sm:w-20 h-16 sm:h-20"
              />
            </div>
            {ride?.terminal === "School park" && (
              <p className="text-center">
                Successful booking!
                <br /> Please proceed promptly to the{" "}
                <span className="font-bold">{ride?.terminal}</span> , as your
                bus will depart school park at{" "}
                <span className="font-bold">{ride?.time}</span>
              </p>
            )}

            {ride?.terminal !== "School park" && (
              <p className="text-center">
                <span className="text-[1.2rem] font-bold">
                  Successful booking!
                </span>
                <br /> Please proceed promptly to your pickup terminal -{" "}
                <span className="font-bold">{ride?.terminal}</span> , as your
                bus will depart terminus at{" "}
                <span className="font-bold">{ride?.time}</span>
              </p>
            )}
          </div>

          <div className="p-3 rounded-md bg-blue-300/10 mt-3 text-[.8rem]">
            <div className="w-full p-2 border-b border-slate-400/30 flex justify-between items-center">
              <p>Date:</p>
              <p className="font-medium">{ride?.createdAt}</p>
            </div>
            <div className="w-full p-2 border-b border-slate-400/30 flex justify-between items-center">
              <p>Departure time:</p>
              <p className="font-medium">{ride?.time}</p>
            </div>
            <div className="w-full p-2 border-b border-slate-400/30 flex justify-between items-center">
              <p>Seats:</p>
              <p className="font-medium">{ride?.seats}</p>
            </div>
            <div className="w-full p-2 border-b border-slate-400/30 flex justify-between items-center">
              <p>Pickup terminal:</p>
              <p className="font-medium">{ride?.terminal}</p>
            </div>
            <div className="w-full p-2 border-b border-slate-400/30 flex justify-between items-center">
              <p>Booking code:</p>
              <p className="font-medium">{ride?.bookingCode}</p>
            </div>
            <div className="w-full p-2 border-b border-slate-400/30 flex justify-between items-center">
              <p>Price:</p>
              <p
                className={`${
                  ride?.price === "free" ? "uppercase text-green-500" : ""
                } font-medium`}
              >
                {ride?.price !== "free" && "NGN"} {ride?.price}
              </p>
            </div>
            <div className="w-full p-2 border-b border-slate-400/30 flex justify-between items-center">
              <p>Ride coordinator contact:</p>
              <p className="font-medium">08166864740</p>
            </div>
            <div className="w-full p-2 border-b border-slate-400/30 flex justify-between items-center">
              <p>Vehicle description::</p>
              <p className="font-medium">White coaster bus</p>
            </div>
            <div className="w-full p-2 border-b border-slate-400/30 flex flex-col justify-between items-start">
              <p className="font-medium">Terminal description::</p>
              <p>
                Okeodo terminal is just before the Okeodo junction after Dola
                Abimbola filling station
              </p>
            </div>
          </div>

          <div className="w-full flex gap-3">
            <Link to="/book-ride" className="w-1/2">
              <button
                type="submit"
                className="w-full px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
              >
                Close
              </button>
            </Link>
            <button
              type="submit"
              className="w-1/2 px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
