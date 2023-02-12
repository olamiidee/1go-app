import { useAppContext } from "../contexts/AppContext";

const RideHistory = ({ item }) => {
  // const { priceFromDb } = useAppContext();
  return (
    <>
      <div className="w-full p-3 mb-4 bg-slate-400/10 text-[0.9rem] md:text-[1rem] rounded-md hidden md:flex flex-wrap md:flex-nowrap">
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-slate-400/50 rounded-md md:mr-4">
          <p>
            Time: <strong>{item?.time}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-slate-400/50 rounded-md md:mr-4">
          <p>
            Booking Code: <strong>{item?.bookingCode}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-slate-400/50 rounded-md mr-auto">
          <p>
            Price: <strong>NGN {item?.price}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-slate-400/50 rounded-md">
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-6 h-6 mr-1"
          />
          <p>Booking successful</p>
        </div>
      </div>

      {/* mobile ui */}

      <div className="w-full p-3 mb-4 bg-slate-400/10 text-[0.75rem] md:text-[1rem] rounded-md flex md:hidden flex-wrap md:flex-nowrap items-center">
        <div className="mr-2">
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-6 h-6"
          />
        </div>
        <div className=" px-2 md:p-2 border-x-2 border-slate-400/50 md:mr-4">
          <div>Time:</div>
          <div>{item?.time}</div>
        </div>
        <div className="px-2 md:p-2 border-r-2 border-slate-400/50">
          <div>Code:</div>
          <div>{item?.bookingCode}</div>
        </div>
        <div className="pl-2">
          <div>Price:</div>
          <div>NGN {item?.price}</div>
        </div>
      </div>
    </>
  );
};

export default RideHistory;
