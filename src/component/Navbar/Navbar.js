import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <img src="./assets/logo.png" className="logo" />

      <ul className="nav-menu">
        <li>Home</li>
        <li>Product</li>
        <li>Promo</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <GiHamburgerMenu className="icon" />
        ) : (
          <AiOutlineClose className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>Products</li>
          <li>Promo</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
