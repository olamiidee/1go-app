// import React from "react";
// import facebook from "../images/icon-facebook.svg";
// import twitter from "../images/icon-twitter.svg";
// import pinterest from "../images/icon-pinterest.svg";
// import insta from "../images/icon-instagram.svg";

export default function Footer() {
  const styles = {
    marginLeft: 0,
  };
  return (
    <footer>
      <div className="footer">
        <div className="logo--div">
          <h1 className="font-bold text-[2rem]">1go </h1>
          <div className="logo--cont">
            <img alt="" src="#" />
            <img alt="" src="#" />
            <img alt="" src="#" />
            <img alt="" src="#" />
          </div>
        </div>
        <div className="copy--div">
          <ul>
            <li style={styles}>About</li>
            <li>Prices</li>
            <li>Book rides</li>
            <li>Contact</li>
            <li>Register</li>
          </ul>
          <p>&copy; 2022 1go. All rights reserved</p>
        </div>
      </div>
      <div className="mob--footer">
        <div className="logo--div">
          <h1 className="font-bold text-[2rem]">1go</h1>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="copy--div">
          <div className="logo--cont">
            <img alt="" src="#" />
            <img alt="" src="#" />
            <img alt="" src="#" />
            <img alt="" src="#" />
          </div>
          <p>&copy; 2023 1go. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
