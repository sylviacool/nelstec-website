import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo" onClick={scrollToTop}>
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            <p>
              At Nelstec GmbH, we deliver secure, scalable IT solutions tailored
              for growing businesses. Our passion for technology drives us to
              simplify complex systems, helping our clients thrive in a digital
              world.
            </p>
          </p>
          <div className="footer_socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </article>

        <article>
          <h4>Registergericht</h4>
          <p>Amtsgericht Berlin Charlottenburg</p>
          <p>Registernummer: HRB 240268B</p>
        </article>

        <article>
          <h4>Contact Us</h4>
          <address>
            <strong>NELSTEC GmbH</strong>
            <br />
            Pichelfsdorferstr. 61, 13595 Berlin
            <br />
            Tel: <a href="tel:+493035305602">+49 30 35305602</a>
            <br />
            Tel: <a href="tel:+493035305604">+49 30 35305604</a>
            <br />
            Email: <a href="mailto:info@NELSTEC.com">info@NELSTEC.com</a>
          </address>
        </article>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2025 Nelstec GmbH. All Rights Reserved.</small>
      </div>
      
      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
