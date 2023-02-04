import React from "react";
import facebook from "/images/icon-facebook.svg";
import twitter from "/images/icon-twitter.svg";
import pinterest from "/images/icon-pinterest.svg";
import insta from "/images/icon-instagram.svg";

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
          <div className="logo--cont flex">
            <img alt="" src={facebook} />
            <img alt="" src={insta} />
            <img alt="" src={twitter} />
            <img alt="" src={pinterest} />
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
          <div className="logo--cont flex justify-center">
            <img alt="" src={facebook} />
            <img alt="" src={insta} />
            <img alt="" src={twitter} />
            <img alt="" src={pinterest} />
          </div>
          <p>&copy; 2023 1go. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
