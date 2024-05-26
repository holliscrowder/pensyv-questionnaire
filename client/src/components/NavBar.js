import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect } from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/signup" className="nav-link">
        Signup
      </NavLink>
      <NavLink to="/survey" className="nav-link">
        Survey
      </NavLink>
    </nav>
  );
}

export default NavBar;
