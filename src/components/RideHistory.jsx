const RideHistory = () => {
  return (
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
          Price: <strong>NGN 100</strong>
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
  );
};

export default RideHistory;
