const AdminNoonBookingTimeBtn = ({ item, handleDeleteNoonTime }) => {
  return (
    <div className="px-3 py-1 bg-blue-300 rounded-md relative flex items-center">
      <div
        onClick={() => handleDeleteNoonTime(item.id)}
        className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full flex items-center justify-center bg-white border hover:border-blue-600 border-blue-400 hover:bg-blue-300 cursor-pointer"
      >
        <img alt="" src="/images/icons8-remove-32.png" className="w-3 h-3" />
      </div>
      <div className="text-[0.85rem] transition-all duration-300">
        {item?.time}
      </div>
    </div>
  );
};

export default AdminNoonBookingTimeBtn;
