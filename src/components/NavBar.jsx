import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./../styles/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Challenge</div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className="navbar-link"
            activeclassname="active"
            exact="true"
          >
            Login
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/screens"
            className="navbar-link"
            activeclassname="active"
          >
            Screens
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
