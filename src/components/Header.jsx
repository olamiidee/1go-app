import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { useHeaderContext } from "../contexts/HeaderContext";

const Header = () => {
  const { currentPage, scrollPosition } = useHeaderContext();
  const {
    user,
    logout,
    toggleLogoutOn,
    toggleLogoutOff,
    showLogout,
    currentUserFromDb,
    accessDashboard,
    userNotLoggedIn,
  } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  //to close the dropdown after clicking a link
  const hideDropdown = () => {
    setOpenMenu(false);
  };

  return (
    <header>
      {/* desktop header */}
      <div
        className={`${
          scrollPosition > 224
            ? "sm:w-full md:w-full top-0 bg-[#252525]/80 lg:px-[15%]"
            : "sm:w-[80%] top-8 rounded-md bg-[#252525]/40 lg:px-10"
        } px-12 py-4 fixed left-[50%] translate-x-[-50%] border-b border-slate-600 md:flex items-center z-[50] hidden transition-all duration-500`}
      >
        {userNotLoggedIn && currentPage === "/login" && (
          <div className="w-[fit-content] scale flex gap-4 items-center py-4 px-10 bg-blue-400/20 rounded-lg border border-blue-400 absolute top-24 left-0">
            <img
              alt=""
              src="/images/icons8-info-black-64.png"
              className="w-10 h-10 mr-1"
            />
            <p>
              Login or register to book rides. <br /> It will only take a
              minute!
            </p>
          </div>
        )}
        <Link to="/" className="mr-auto">
          <div className="flex items-center gap-[0px] ml-[-10px] cursor-pointer">
            <div className="w-10 h-10 border-4 border-blue-500 rounded-full mr-3"></div>
            {/* <img alt="logo" src="/images/vite.svg" className="w-12 h-12" /> */}
            <p className="font-dyna text-[1.5rem] text-white tracking-widest">
              1go
            </p>
          </div>
        </Link>
        <nav className="flex items-center">
          <div className="flex items-center gap-3 lg:gap-8 mr-auto text-white text-[0.9rem] lg:text-[1rem]">
            <Link
              to="/"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              Home
            </Link>

            <div
              onClick={accessDashboard}
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/book-ride" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              Bookings
            </div>
            <Link
              to="/about"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/about" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/contact" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              Contact
            </Link>
            {!user && (
              <Link
                to="/login"
                className={`cursor-pointer px-2 py-1 ${
                  currentPage === "/login" && "bg-blue-500"
                } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
              >
                Login
              </Link>
            )}
            {!user && (
              <Link
                to="/register"
                className={`cursor-pointer px-2 py-1 ${
                  currentPage === "/register" && "bg-blue-500"
                } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
              >
                Register
              </Link>
            )}

            {user && (
              <div
                onMouseOver={toggleLogoutOn}
                className={`cursor-pointer px-2 py-1 rounded-md flex items-center gap-2 border-2 border-blue-500 hover:bg-blue-500/50 hover:translate-y-[6px] transition-all duration-300 relative`}
              >
                <p>{currentUserFromDb.firstname}</p>
                <img
                  alt=""
                  src="/images/icons8-user-64.png"
                  className="w-6 h-6"
                />
                <img
                  alt=""
                  src="/images/icons8-expand-arrow-50.png"
                  className="w-3 h-3"
                />
                {showLogout && (
                  <div
                    onMouseOut={toggleLogoutOff}
                    className={` ${
                      scrollPosition > 224
                        ? "bg-[#252525]/70 "
                        : "bg-[#252525]/40 "
                    } w-[fit-content] px-2 py-3 absolute top-[54px] right-[-44px] transition-all duration-500`}
                  >
                    <button
                      onClick={logout}
                      className="text-white px-10 py-2 hover:bg-blue-500/50 border-y border-white/60"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* mobile header */}
      <div
        className={` ${
          scrollPosition > 224
            ? "top-0 bg-[#252525]/70 "
            : "top-6 bg-[#252525]/50 "
        } md:hidden w-full h-[65px] px-6 fixed left-0 z-[100] border-b-[0px] border-b-[#47a3b3] flex justify-between items-center shadow-md transition-all duration-500`}
      >
        <Link to="/" className="mr-auto">
          <div className="flex items-center gap-[0px] ml-[-10px] cursor-pointer">
            <div className="w-8 h-8 border-4 border-blue-500 rounded-full mr-2"></div>
            {/* <img alt="logo" src="/images/vite.svg" className="w-12 h-12" /> */}
            <p className="text-[1.5rem] text-white font-bold">1go</p>
          </div>
        </Link>
        <img
          alt="hamburger"
          src="/images/icons8-menu-rounded-30.png"
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={handleClick}
        />
        {openMenu && (
          <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
            <img
              className="w-[30px] h-[30px] cursor-pointer mr-[25px] absolute top-[30px] right-[10px]"
              alt=""
              src="/images/icons8-close-30.png"
              onClick={handleClick}
            />
            <ul className="slide float-right w-[65%] h-full bg-white px-[30px] text-[1.25rem] text-[#3F3D56] pt-[100px]">
              <li className="my-4">
                <Link to="/" onClick={hideDropdown}>
                  <div className="w-full">Home</div>
                </Link>
              </li>
              <li className="my-4">
                <Link to="/bookings" onClick={hideDropdown}>
                  <div className="w-full">Bookings</div>
                </Link>
              </li>
              <li className="my-4">
                <Link to="/about" onClick={hideDropdown}>
                  <div className="w-full">About</div>
                </Link>
              </li>
              <li className="my-4">
                <Link to="/contact" onClick={hideDropdown}>
                  <div className="w-full">Contact</div>
                </Link>
              </li>
              <li className="my-4">
                <Link to="/login" onClick={hideDropdown}>
                  <div className="w-full">Login</div>
                </Link>
              </li>
              <li className="my-4">
                <Link to="/register" onClick={hideDropdown}>
                  <div className="w-full">Register</div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/*mobile header */}
    </header>
  );
};

export default Header;
