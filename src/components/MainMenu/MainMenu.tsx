import React from "react";
import { NavLink } from "react-router-dom";

function MainMenu() {
return (
        <>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">{used()}</NavLink>
            </li>
            <li>
              <NavLink to="/projects">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/about">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Call CTA</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
                </>
  );
};

export default MainMenu;
