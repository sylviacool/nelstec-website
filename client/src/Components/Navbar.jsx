import { useState } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { HiBars3 } from 'react-icons/hi2';
import { MdOutlineClose } from 'react-icons/md';
import { links } from '../data';
import './navbar.css';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>


        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)} //get the prev state(false) and then return the opposite of the prev state
        >
          {isNavShowing ? <MdOutlineClose /> : <HiBars3 />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
