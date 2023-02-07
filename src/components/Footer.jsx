import React from "react";
import whatsapp from "/images/icon-whatsapp.svg";
import telephone from "/images/icon-telephone.png";
// import pinterest from "/images/icon-pinterest.svg";
// import insta from "/images/icon-instagram.svg";

import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export default function Footer() {
  const { accessDashboard } = useAppContext();
  const styles = {
    marginLeft: 0,
  };
  return (
    <footer>
      <div className="footer">
        <div className="logo--div">
          <h1 className="font-bold text-[2rem]">1go </h1>
          <div className="logo--cont flex space-x-3">
            {/* telephone */}
            <div className="cursor-pointer hover:translate-y-[6px] transition-all duration-300">
              <a
                href="tel:+2349125921624"
                className="flex items-center justify-between space-x-2 "
              >
                <img alt="" src={telephone} className="w-[25px] h-[25px]" />
                <p>Telephone</p>
              </a>
            </div>
            {/* whatsapp */}
            <div className="cursor-pointer hover:translate-y-[6px] transition-all duration-300">
              <a
                href="https://wa.me/+2349125921624"
                target="_blank"
                className="flex items-center justify-between space-x-2 "
              >
                <img alt="" src={whatsapp} className="w-[25px] h-[25px]" />
                <p>Whatsapp</p>
              </a>
            </div>
          </div>
        </div>
        <div className="copy--div">
          <ul>
            <li style={styles}>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="#">Prices</Link>
            </li>
            <li onClick={accessDashboard}>Book rides</li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <p>&copy; 2022 1go. All rights reserved</p>
        </div>
      </div>
      <div className="mob--footer">
        <div className="logo--div">
          <h1 className="font-bold text-[2rem]">1go</h1>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Events</Link>
            </li>
            <li>
              <Link to="#">Products</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
          </ul>
        </div>
        <div className="copy--div">
          <div className="logo--cont flex space-x-4 justify-center mb-8">
            <a href="tel:+2349125921624">
              <img
                alt=""
                src={telephone}
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
            <a href="https://wa.me/+2349125921624" target="_blank">
              <img
                alt=""
                src={whatsapp}
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
          </div>
          <p>&copy; 2023 1go. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
