import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

const Sidebar = () => {
  const { currentPage } = useAppContext();
  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  //to close the dropdown after clicking a link
  const hideDropdown = () => {
    setOpenMenu(false);
  };

  return (
    <div>
      <div className="w-[20%] h-[100vh] py-8 fixed top-0 left-0 bg-white md:block hidden">
        <img
          alt=""
          src="/images/Travas Logo.png"
          className="w-1/3 h-auto ml-12 mb-8"
        />
        <ul className="w-full">
          <Link to="/admin">
            <li
              className={`w-[90%] mb-6 py-3 px-12 cursor-pointer ${
                currentPage === "/admin"
                  ? "bg-white border-slate-600"
                  : "bg-gray-200 border-gray-200"
              } hover:bg-white hover:border-slate-600 border rounded-r-2xl`}
            >
              Analytics
            </li>
          </Link>
          <Link to="/booking-times">
            <li
              className={`w-[90%] mb-6 py-3 px-12 cursor-pointer ${
                currentPage === "/booking-times"
                  ? "bg-white border-slate-600"
                  : "bg-gray-200 border-gray-200"
              } hover:bg-white hover:border-slate-600 border rounded-r-2xl`}
            >
              Booking Times
            </li>
          </Link>
          <Link to="/account">
            <li
              className={`w-[90%] mb-6 py-3 px-12 cursor-pointer ${
                currentPage === "/account"
                  ? "bg-white border-slate-600"
                  : "bg-gray-200 border-gray-200"
              } hover:bg-white hover:border-slate-600 border rounded-r-2xl`}
            >
              Account
            </li>
          </Link>

          <li
            className={`w-[90%] mb-8 py-3 px-12 cursor-pointer bg-gray-200 border-gray-200 hover:bg-white hover:border-slate-600 border rounded-r-2xl`}
          >
            Log out
          </li>
        </ul>
      </div>

      {/* mobile nav */}
      <div className="w-full h-[60px] fixed top-0 left-0 bg-white flex md:hidden justify-between items-center px-4 shadow-md z-50">
        <img alt="" src="/images/logo.png" className="w-10 h-auto" />
        <img
          alt=""
          src="/images/icons8-menu-black-30.png"
          className="w-8 h-8"
          onClick={handleClick}
        />

        {openMenu && (
          <ul className="w-full h-[100vh] slide bg-white pt-[60px] absolute top-0 left-0">
            <img
              alt=""
              src="/images/icons8-close-30.png"
              className="w-8 h-8 mb-8 absolute top-5 right-3"
              onClick={hideDropdown}
            />
            <Link to="/admin">
              <li
                className={`w-[70%] mb-8 py-3 px-12 cursor-pointer ${
                  currentPage === "/admin"
                    ? "bg-white border-slate-600"
                    : "bg-gray-200 border-gray-200"
                } hover:bg-white hover:border-slate-600 border rounded-r-2xl`}
              >
                Analytics
              </li>
            </Link>
            <Link to="/booking-times">
              <li
                className={`w-[70%] mb-8 py-3 px-12 cursor-pointer ${
                  currentPage === "/booking-times"
                    ? "bg-white border-slate-600"
                    : "bg-gray-200 border-gray-200"
                } hover:bg-white hover:border-slate-600 border rounded-r-2xl`}
              >
                Booking times
              </li>
            </Link>
            <Link to="/account">
              <li
                className={`w-[70%] mb-8 py-3 px-12 cursor-pointer ${
                  currentPage === "/account"
                    ? "bg-white border-slate-600"
                    : "bg-gray-200 border-gray-200"
                } hover:bg-white hover:border-slate-600 border rounded-r-2xl`}
              >
                Account
              </li>
            </Link>
            <li
              className={`w-[70%] mb-8 py-3 px-12 cursor-pointer bg-gray-200 border-gray-200" hover:bg-white hover:border-slate-600 border rounded-r-2xl`}
            >
              logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
