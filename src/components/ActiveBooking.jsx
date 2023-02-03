const ActiveBooking = () => {
  return (
    <div className="w-full p-3 mb-4 bg-blue-400/10 text-[0.9rem] md:text-[1rem] rounded-md hidden md:flex flex-wrap md:flex-nowrap">
      <div className="flex items-center px-2 py-1 md:p-2 border-2 border-blue-400/50 rounded-md md:mr-4">
        <img alt="" src="/images/icons8-time-30.png" className="w-6 h-6 mr-1" />
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
        <img alt="" src="/images/icons8-cost-58.png" className="w-6 h-6 mr-1" />
        <p>
          Price: <strong>NGN 100</strong>
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
  );
};

export default ActiveBooking;
