import { useState, useEffect } from 'react';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { HiBars3 } from 'react-icons/hi2';
import { MdOutlineClose } from 'react-icons/md';
import { links } from '../data';
import './navbar.css';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const location = useLocation();

  // Function to scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle navigation clicks - close menu and scroll to top if on home page
  const handleNavClick = (path) => {
    setIsNavShowing(false);
    
    // If clicking on home link or already on the same page, scroll to top
    if (path === '/' || path === location.pathname) {
      scrollToTop();
    }
  };

  // Scroll to top when route changes to home
  useEffect(() => {
    if (location.pathname === '/') {
      scrollToTop();
    }
  }, [location.pathname]);

  return (
    <nav>
      <div className="container nav_container">
        <Link 
          to="/" 
          className="logo" 
          onClick={() => handleNavClick('/')}
        >
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => handleNavClick(path)}
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
