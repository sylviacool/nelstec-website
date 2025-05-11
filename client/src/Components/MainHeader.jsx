import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/main_header.jpg";

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>Empowering Businesses with Technology</h4>
          <h1>Transform Your Business with NELSTEC</h1>
          <p>
            At NELSTEC, we specialize in providing top-notch IT solutions
            including SAP, ERP, Web Development, and Cloud Computing services.
            Our expert training programs empower your team to fully leverage the
            capabilities of SAP and other enterprise systems. Let us help you
            scale your business to new heights with innovative, reliable, and
            efficient technology.
          </p>
          <Link to="/services" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
