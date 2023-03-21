import { useAppContext } from "../contexts/AppContext";

const BookSuccessModal = ({ eachTime, detailsForm }) => {
  const { cloaseSuccessModal, activeRidesFromDb } = useAppContext();
  return (
    <div className="w-full h-[100vh] py-16 px-4 md:px-8 fixed top-0 left-0 bg-blue-50 flex justify-center z-[100]">
      <div className="w-full text-[.9rem] text-slate-600 md:text-[1.2rem] rounded-2xl flex justify-center">
        <div className="w-full sm:max-w-[550px] sm:h-fit scale flex flex-col gap-4 items-center bg-blue-50 sm:p-8 sm:shadow-md rounded-lg relative">
          {/* <img
            alt=""
            src="/images/icons8-close-30.png"
            className="w-5 h-5 absolute top-3 right-3 cursor-pointer"
            onClick={cloaseSuccessModal}
          /> */}
          <img
            alt=""
            src="/images/icons8-checkmark-64.png"
            className="w-16 sm:w-20 h-16 sm:h-20 mr-1"
          />
          {detailsForm?.terminal === "School park" && (
            <p className="text-center">
              Successful booking! Please proceed promptly to the{" "}
              <span className="font-bold">{detailsForm?.terminal}</span> , as
              your bus will depart school park at{" "}
              <span className="font-bold">{eachTime?.time}</span>
            </p>
          )}

          {detailsForm?.terminal !== "School park" && (
            <p className="text-center">
              Successful booking! Please proceed promptly to your pickup
              terminal -{" "}
              <span className="font-bold">{detailsForm?.terminal}</span> , as
              your bus will depart terminus at{" "}
              <span className="font-bold">{eachTime?.time}</span>
            </p>
          )}

          <div className="p-3 rounded-md bg-blue-300/10 mt-5">
            <p className="font-bold text-[1.1rem] ">Terminal description</p>
            <p>
              Okeodo terminal is just before the Okeodo junction after Dola
              Abimbola filling station
            </p>
          </div>

          <button
            type="submit"
            className="w-full md:w-[fit-content] px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
            onClick={cloaseSuccessModal}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSuccessModal;
