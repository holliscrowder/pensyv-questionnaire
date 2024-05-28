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
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/survey" className="nav-link">
        Survey
      </NavLink>
      <NavLink to="/leave" className="nav-link">
        Leave
      </NavLink>

    </nav>
  );
}

export default NavBar;
