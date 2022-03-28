import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="brand">
       APPMOM
      </Link>

      <nav>
        <ul>
          <li>
            <Link className="link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/service">
              Service
            </Link>
          </li>
          <li>
            <Link className="link" to="/features">
              Features
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
