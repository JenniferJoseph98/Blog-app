import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <div id="header">
      <div className="headerright">
        <h4 id="channel">News Tamil</h4>
        <img
          className="headerlogo"
          src="https://th.bing.com/th/id/R.5b2b65c390263761e8089fe42c617512?rik=Krk%2bsJW%2baIUIWw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f28000000%2frandomised-random-28065165-1024-819.jpg&ehk=5EwtKjhNaCpv2WoxrGQ6hQfUGbEnlkAb3g5OZSIKIhc%3d&risl=&pid=ImgRaw&r=0"
          alt="hi"
        />
      </div>
      <div id="headerleft">
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/home");
            }}
          >
            Services
          </li>
          <li
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact us
          </li>

          <li
            onClick={() => {
              navigate("/more");
            }}
          >
            More
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
