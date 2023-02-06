import { useAppContext } from "../contexts/AppContext";

const ActiveBooking = ({}) => {
  const { priceFromDb } = useAppContext();
  return (
    <>
      <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md hidden md:flex flex-wrap md:flex-nowrap">
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <img
            alt=""
            src="/images/icons8-time-30.png"
            className="w-6 h-6 mr-1"
          />
          <p>
            Time: <strong>7:55AM</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <img
            alt=""
            src="/images/icons8-qr-code-48.png"
            className="w-6 h-6 mr-1"
          />
          <p>
            Booking Code: <strong>8441</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md mr-auto">
          <img
            alt=""
            src="/images/icons8-cost-58.png"
            className="w-6 h-6 mr-1"
          />
          <p>
            Price: <strong>NGN {priceFromDb[0]?.price}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-red-400/50 rounded-md cursor-pointer hover:bg-red-400/20 transition-all duration-300">
          <img
            alt=""
            src="/images/icons8-remove-32.png"
            className="w-6 h-6 mr-1"
          />
          <p>Cancel ride</p>
        </div>
      </div>

      {/* mobile ui */}

      <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md flex md:hidden flex-wrap md:flex-nowrap">
        <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-time-30.png"
              className="w-6 h-6 mr-1"
            />
            <p>Time: </p>
          </div>
          <p className="font-bold">7:55AM</p>
        </div>
        <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-qr-code-48.png"
              className="w-6 h-6 mr-1"
            />
            <p>Booking Code: </p>
          </div>
          <p className="font-bold">8441</p>
        </div>
        <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-cost-58.png"
              className="w-6 h-6 mr-1"
            />
            <p>Price: </p>
          </div>
          <p className="font-bold">NGN {priceFromDb[0]?.price}</p>
        </div>

        <div className="flex items-center mt-4 md:mt-0 px-2 py-1 md:p-2 border-2 border-red-400/50 rounded-md cursor-pointer hover:bg-red-400/20 transition-all duration-300">
          <img
            alt=""
            src="/images/icons8-remove-32.png"
            className="w-6 h-6 mr-1"
          />
          <p>Cancel</p>
        </div>
      </div>
    </>
  );
};

export default ActiveBooking;
