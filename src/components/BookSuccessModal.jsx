import { useAppContext } from "../contexts/AppContext";

const BookSuccessModal = () => {
  const { cloaseSuccessModal, activeRidesFromDb } = useAppContext();
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-black/90 flex justify-center items-center z-[100]">
      <div className="w-full text-[1.2rem] md:text-[2rem] font-medium p-[25px] md:py-[20px] rounded-2xl flex justify-center items-center">
        <div className="w-full sm:w-[fit-content] scale flex sm:flex-row flex-col gap-4 items-center py-4 px-10 md:px-24 md:py-12 bg-blue-100 rounded-lg border border-green-400 relative">
          <img
            alt=""
            src="/images/icons8-close-30.png"
            className="w-5 h-5 absolute top-3 right-3 cursor-pointer"
            onClick={cloaseSuccessModal}
          />
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-16 sm:w-20 h-16 sm:h-20 mr-1"
          />
          <p>
            Ride booked successfully! Vehicle will arrive at selected time:{" "}
            {activeRidesFromDb?.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookSuccessModal;
