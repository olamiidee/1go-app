import { useAppContext } from "../contexts/AppContext";

const RideHistory = ({ priceFromDb }) => {
  return (
    <>
      <div className="w-full p-3 mb-4 bg-slate-400/10 text-[0.9rem] md:text-[1rem] rounded-md hidden md:flex flex-wrap md:flex-nowrap">
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-slate-400/50 rounded-md md:mr-4">
          <p>
            Time: <strong>7:55AM</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-slate-400/50 rounded-md md:mr-4">
          <p>
            Booking Code: <strong>8441</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-slate-400/50 rounded-md mr-auto">
          <p>
            Price: <strong>NGN {priceFromDb[0]?.price}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-slate-400/50 rounded-md">
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-6 h-6 mr-1"
          />
          <p>Trip Completed</p>
        </div>
      </div>

      {/* mobile ui */}

      <div className="w-full p-3 mb-4 bg-slate-400/10 text-[0.9rem] md:text-[1rem] rounded-md flex md:hidden flex-wrap md:flex-nowrap gap-3 items-center">
        <div className="">
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-8 h-8 mr-1"
          />
        </div>
        <div className="px-3 md:p-2 border-x-2 border-slate-400/50 md:mr-4">
          <div>Time:</div>
          <div>7:55AM</div>
        </div>
        <div className="px-3 md:p-2 border-r-2 border-slate-400/50 md:mr-4">
          <div>Code:</div>
          <div>8441</div>
        </div>
        <div className="px-3 md:p-2 md:mr-4">
          <div>Price:</div>
          <div>NGN {priceFromDb[0]?.price}</div>
        </div>
      </div>
    </>
  );
};

export default RideHistory;
