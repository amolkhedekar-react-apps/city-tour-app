import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="header">
      <h3 className="header__brand">Vega Tours</h3>
      <ul className="header__nav">
        <li>
          <a href="" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
