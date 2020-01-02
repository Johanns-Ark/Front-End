import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../style/css/Nav.css";

const NavBar = () => {
  //SETS THE STATE OF THE SHOWN MENU
  const [showMenu, setShowMenu] = useState(false);
  //FUNCTION TO TOGGLE MENU
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const menuVis = showMenu ? "show" : "hide";

  return (
    <nav>
      <ul className="menu">
        <li className="navLogo">Header Goes Here</li>
        <li className={`navItem ${menuVis}`}>
          <NavLink to="#">Home</NavLink>
        </li>
        <li className={`navItem ${menuVis}`}>
          <NavLink to="#">Another</NavLink>
        </li>
        <li className={`navItem ${menuVis}`}>
          <NavLink to="/another">Where To</NavLink>
        </li>
        <li className={`navItem navButton ${menuVis}`}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className={`navItem navButton navSecondary ${menuVis}`}>
          <NavLink to="#">Sign Up</NavLink>
        </li>
        <span>
          <i onClick={toggleMenu} className={!showMenu ? `fas fa-bars toggle` : `fas fa-times toggle`} />
        </span>
      </ul>
    </nav>
  );
};

export default NavBar;
