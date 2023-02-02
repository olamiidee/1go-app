import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/HeaderContext";

const Header = () => {
  const { currentPage, scrollPosition } = useGlobalContext();

  return (
    <header>
      {/* desktop header */}
      <div
        className={`${
          scrollPosition > 224
            ? "sm:w-full md:w-full top-0 bg-[#252525]/80 lg:px-[15%]"
            : "sm:w-[80%] top-8 rounded-md bg-[#252525]/40 lg:px-10"
        } px-12 py-4 fixed left-[50%] translate-x-[-50%] border-b border-slate-600 md:flex items-center z-[100] hidden transition-all duration-500`}
      >
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
          <div className="flex items-center gap-5 lg:gap-8 mr-auto text-white">
            <Link
              to="/"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/about" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              About
            </Link>
            <Link
              to="/book-ride"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/book-ride" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              Bookings
            </Link>
            <Link
              to="/contact"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/contact" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/login" && "bg-blue-500"
              } rounded-md hover:bg-blue-400 hover:translate-y-[6px] transition-all duration-300`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/register" && "bg-blue-500"
              } rounded-md hover:bg-blue-400 hover:translate-y-[6px] transition-all duration-300`}
            >
              Register
            </Link>
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
        />

        {/* {openMenu && (
            <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0">
              <img
                className="w-[35px] h-[35px] cursor-pointer mr-[25px] absolute top-[30px] right-2"
                alt=""
                src={close}
                onClick={handleClick}
              />
              <div
                onClick={handleClick}
                className="w-[35%] h-screen float-left"
              ></div>
              <ul className="slide float-right w-[65%] h-full bg-[#252525] px-[30px] text-[1rem] text-white pt-[100px] text-center">
                {user && (
                  <li className="w-[fit-content] my-6 mx-auto flex items-center justify-center gap-2 border-2 border-rose-400 px-2 py-1 rounded-lg">
                    <div className="text-rose-400 font-bold text-[1.25rem]">
                      {currentUserFromDb.displayName}
                    </div>
                    <img alt="user" src={userImg} className="w-8 h-8" />
                  </li>
                )}
                <li className="my-4">
                  <Link to="/" onClick={hideDropdown}>
                    <div className="w-full">Home</div>
                  </Link>
                </li>
                <li className="my-4">
                  <Link to="/notes" onClick={hideDropdown}>
                    <div className="w-full">Notes</div>
                  </Link>
                </li>
                <li className="my-4">
                  <Link to="/create" onClick={hideDropdown}>
                    <div className="w-full">Add New</div>
                  </Link>
                </li>
                {!user && (
                  <li className="my-4">
                    <Link to="/register" onClick={hideDropdown}>
                      <div className="w-full">Sign Up</div>
                    </Link>
                  </li>
                )}
                {!user && (
                  <li className="my-4">
                    <Link to="/login" onClick={hideDropdown}>
                      <div className="w-full">Log In</div>
                    </Link>
                  </li>
                )}
                {user && (
                  <li
                    onClick={() => {
                      logout();
                      hideDropdown();
                    }}
                    className="my-4"
                  >
                    <div className="w-full">Log Out</div>
                  </li>
                )}
              </ul>
            </div>
          )} */}
      </div>
      {/*mobile header */}
    </header>
  );
};

export default Header;
