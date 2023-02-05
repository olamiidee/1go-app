const AdminBookingTimeBtn = ({ item }) => {
  return (
    <div className="px-3 py-1 bg-blue-300 rounded-md hover:bg-blue-500 hover:text-white relative">
      <div className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full flex items-center justify-center bg-white border border-blue-400">
        <img alt="" src="/images/icons8-remove-32.png" className="w-3 h-3" />
      </div>
      <button className="text-[0.85rem] transition-all duration-300">
        {item?.time}
      </button>
    </div>
  );
};

export default AdminBookingTimeBtn;
