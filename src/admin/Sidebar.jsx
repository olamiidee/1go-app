import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Sidebar = () => {
  const navigate = useNavigate();

  //to log out admin
  const logoutAdmin = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };

  const location = useLocation();
  let currentPage = location.pathname;
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
                  ? "bg-sky-50 border-sky-600"
                  : "bg-gray-200 border-gray-200"
              } hover:bg-sky-50 hover:border-sky-600 border rounded-r-2xl`}
            >
              Dashboard
            </li>
          </Link>
          <Link to="/admin/booking-times">
            <li
              className={`w-[90%] mb-6 py-3 px-12 cursor-pointer ${
                currentPage === "/admin/booking-times"
                  ? "bg-sky-50 border-sky-600"
                  : "bg-gray-200 border-gray-200"
              } hover:bg-sky-50 hover:border-sky-600 border rounded-r-2xl`}
            >
              Departure Times
            </li>
          </Link>
          <li
            onClick={logoutAdmin}
            className={`w-[90%] mb-8 py-3 px-12 cursor-pointer bg-gray-200 border-gray-200 hover:bg-sky-50 hover:border-sky-600 border rounded-r-2xl`}
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
                    ? "bg-sky-50 border-sky-600"
                    : "bg-gray-200 border-gray-200"
                } hover:bg-sky-50 hover:border-slate-600 border rounded-r-2xl`}
              >
                Dashboard
              </li>
            </Link>
            <Link to="/admin/booking-times">
              <li
                className={`w-[70%] mb-8 py-3 px-12 cursor-pointer ${
                  currentPage === "/admin/booking-times"
                    ? "bg-sky-50 border-slate-600"
                    : "bg-gray-200 border-gray-200"
                } hover:bg-sky-50 hover:border-slate-600 border rounded-r-2xl`}
              >
                Departure times
              </li>
            </Link>
            <li
              onClick={logoutAdmin}
              className={`w-[70%] mb-8 py-3 px-12 cursor-pointer bg-gray-200 border-gray-200" hover:bg-sky-50 hover:border-slate-600 border rounded-r-2xl`}
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
