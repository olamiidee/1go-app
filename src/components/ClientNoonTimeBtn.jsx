import { Link } from "react-router-dom";

const ClientNoonTimeBtn = ({ item }) => {
  return (
    <Link to={`/book-ride/summary/${item.id}`}>
      <button className="px-3 py-1 bg-blue-300 hover:bg-blue-500 border border-slate-500 hover:text-white rounded-md text-[0.8rem] md:text-[0.85rem] transition-all duration-300">
        {item.time}
      </button>
    </Link>
  );
};

export default ClientNoonTimeBtn;
