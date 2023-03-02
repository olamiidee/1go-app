import { useAppContext } from "../contexts/AppContext";

const ActiveBooking = ({ item }) => {
  const { markCompleted } = useAppContext();

  return (
    <>
      <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.85rem] md:text-[.9rem] rounded-md hidden md:flex flex-wrap md:flex-nowrap gap-2">
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md">
          <img
            alt=""
            src="/images/icons8-calendar-50.png"
            className="w-4 h-4 mr-1"
          />
          <p>
            Date: <strong>{item?.createdAt}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md">
          <img
            alt=""
            src="/images/icons8-time-30.png"
            className="w-4 h-4 mr-1"
          />
          <p>
            Time: <strong>{item?.time}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md">
          <img
            alt=""
            src="/images/icons8-seat-64.png"
            className="w-4 h-4 mr-1"
          />
          <p>
            Seats: <strong>{item?.seats}</strong>
          </p>
        </div>
        {/* <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md">
          <img
            alt=""
            src="/images/icons8-cost-58.png"
            className="w-4 h-4 mr-1"
          />
          <p>
            Price: <strong>#{item?.price}</strong>
          </p>
        </div> */}
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md">
          <img
            alt=""
            src="/images/icons8-shuttle-bus-50.png"
            className="w-4 h-4 mr-1"
          />
          <p>
            Pick-up: <strong>{item?.terminal}</strong>
          </p>
        </div>
        <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md mr-auto">
          <img
            alt=""
            src="/images/icons8-qr-code-48.png"
            className="w-4 h-4 mr-1"
          />
          <p>
            Code: <strong>{item?.bookingCode}</strong>
          </p>
        </div>
        <div
          // onClick={markCompleted}
          className="flex items-center gap-2 px-2 py-1 md:p-2 border-2 border-green-500/50 rounded-md cursor-pointer hover:bg-green-400/20 transition-all duration-300"
        >
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-4 h-4 mr-1"
          />
          <p>
            Price: <strong>#{item?.price}</strong>
          </p>
        </div>
      </div>

      {/* mobile ui */}

      <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md flex md:hidden flex-wrap md:flex-nowrap">
        <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-calendar-50.png"
              className="w-4 h-4 mr-1"
            />
            <p>Date: </p>
          </div>
          <p className="font-bold">{item?.createdAt}</p>
        </div>
        <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-time-30.png"
              className="w-4 h-4 mr-1"
            />
            <p>Time: </p>
          </div>
          <p className="font-bold">{item?.time}</p>
        </div>
        <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-seat-64.png"
              className="w-4 h-4 mr-1"
            />
            <p>Seats: </p>
          </div>
          <p className="font-bold">{item?.seats} </p>
        </div>
        <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-shuttle-bus-50.png"
              className="w-4 h-4 mr-1"
            />
            <p>Pick-up: </p>
          </div>
          <p className="font-bold">{item?.terminal} </p>
        </div>
        <div className="w-full flex items-center px-2 py-1 mb-2 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-qr-code-48.png"
              className="w-4 h-4 mr-1"
            />
            <p>Booking Code: </p>
          </div>
          <p className="font-bold">{item?.bookingCode}</p>
        </div>

        <div className="w-full flex items-center mt-4 px-2 py-1 mb-2 md:p-2 border-2 border-green-400/70 rounded-md md:mr-4">
          <div className="mr-auto flex items-center">
            <img
              alt=""
              src="/images/icons8-checkmark-64.png"
              className="w-4 h-4 mr-1"
            />
            <p>Price: </p>
          </div>
          <p className="font-bold">#{item?.price}</p>
        </div>
      </div>
    </>
  );
};

export default ActiveBooking;
