import { useAppContext } from "../contexts/AppContext";

const ActiveBooking = ({ item }) => {
  const { markCompleted } = useAppContext();

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
            Time: <strong>{item?.time}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <img
            alt=""
            src="/images/icons8-qr-code-48.png"
            className="w-6 h-6 mr-1"
          />
          <p>
            Booking Code: <strong>{item?.bookingCode}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md mr-auto">
          <img
            alt=""
            src="/images/icons8-cost-58.png"
            className="w-6 h-6 mr-1"
          />
          <p>
            Price: <strong>NGN {item?.price}</strong>
          </p>
        </div>
        <div
          onClick={markCompleted}
          className="flex items-center gap-2 px-2 py-1 md:p-2 border-2 border-green-500/50 rounded-md cursor-pointer hover:bg-green-400/20 transition-all duration-300"
        >
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-6 h-6 mr-1"
          />
          <p>Mark as completed</p>
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
          <p className="font-bold">{item?.time}</p>
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
          <p className="font-bold">{item?.bookingCode}</p>
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
          <p className="font-bold">NGN {item?.price} </p>
        </div>

        <div
          onClick={markCompleted}
          className="flex items-center mt-4 md:mt-0 px-2 py-1 md:p-2 border-2 border-green-500/50 rounded-md cursor-pointer hover:bg-green-400/20 transition-all duration-300"
        >
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-6 h-6 mr-1"
          />
          <p>Mark as completed</p>
        </div>
      </div>
    </>
  );
};

export default ActiveBooking;
