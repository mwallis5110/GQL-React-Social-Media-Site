import React, { useState } from "react";

import "./navbar.css";

export default function TopNavbar() {
  const [active, setActive] = useState("navMenu");

  const [toggleIcon, setToggleIcon] = useState("navToggler");

  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");

    toggleIcon === "navToggler" ? setToggleIcon("navToggler toggle") : setToggleIcon("navToggler")
  };
  return (
    <nav className="navWrapper">
      <p className="hero">Main Content</p>
      <ul className={active}>
        <li className="homeButton">Home</li>
        <li className="loginButton">Login</li>
        <li className="registerButton">Register</li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
