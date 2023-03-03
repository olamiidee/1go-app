import { useAppContext } from "../contexts/AppContext";

const ClientMorningTimeBtn = ({ item }) => {
  const { user, activeRidesFromDb, navigate } = useAppContext();

  function link() {
    if (user) {
      navigate(`/book-ride/summary/${item.id}`);
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      {item.slots > 0 && (
        <button
          onClick={link}
          className="px-3 py-1 bg-blue-300 hover:bg-blue-500 border border-slate-500 hover:text-white rounded-md text-[0.8rem] md:text-[0.85rem] transition-all duration-300"
        >
          {item.time}
        </button>
      )}
    </>
  );
};

export default ClientMorningTimeBtn;
