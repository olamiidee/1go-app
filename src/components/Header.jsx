import { Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../contexts/HeaderContext";

const Header = () => {
  const { currentPage } = useGlobalContext();
  //   const [openMenu, setOpenMenu] = useState(false);
  //   function handleClick() {
  //     setOpenMenu((prevState) => !prevState);
  //   }

  //   //to close the dropdown after clicking a link
  //   const hideDropdown = () => {
  //     setOpenMenu(false);
  //   };

  return (
    <header>
      {/* desktop header */}
      <div className="w-[80%] bg-[#252525]/50 px-12 py-4 lg:px-10 fixed top-8 left-[50%] translate-x-[-50%] border-b border-slate-600 sm:flex items-center z-[100] hidden rounded-md">
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
              Book rides
            </Link>
            <Link
              to="/price"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/price" && "bg-blue-500"
              } rounded-md hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300`}
            >
              Prices
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

          {/* <div className="flex">
            <Link to="/login">
              <button className="bg-[#ffab91] font-bold text-[0.90rem] mr-5 px-5 py-1 rounded-md hover:bg-rose-500 hover:translate-y-[6px] transition-all duration-300">
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-rose-400 font-bold text-[0.90rem] px-5 py-1 rounded-md hover:bg-rose-500 hover:translate-y-[6px] transition-all duration-300">
                Sign Up
              </button>
            </Link>
          </div> */}

          {/* {user && (
            <div className="flex gap-3 items-center">
              <div className="px-5 py-[4px] border-2 border-[#ffab91] rounded-lg flex items-center gap-2">
                <h2 className="">Hi {currentUserFromDb.displayName}</h2>
                <img alt="user" src={userImg} className="w-6 h-6" />
              </div>
              <button
                onClick={logout}
                className="bg-rose-500 font-bold text-[0.90rem] px-5 py-1 rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300"
              >
                logout
              </button>
            </div>
          )} */}
        </nav>
      </div>

      {/* mobile header */}
      {/* <div
        className={`sm:hidden w-full h-[70px] px-5 bg-[#252525] fixed top-0 left-0 z-[100] border-b-[0px] border-b-[#47a3b3] flex justify-between items-center shadow-md`}
      >
        <Link to="/" className="mr-auto">
          <div className="flex items-center gap-[0px] ml-[-10px] cursor-pointer">
            <img alt="logo" src={logo} className="w-16 h-16" />
            <p className="font-dyna text-[1.5rem] text-rose-300 tracking-widest">
              Note app
            </p>
          </div>
        </Link>
        <img
          alt="hamburger"
          src={menu}
          onClick={handleClick}
          className="w-[30px] h-[30px] cursor-pointer"
        />

        {openMenu && (
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
        )}
      </div> */}
      {/*mobile header */}
    </header>
  );
};

export default Header;
