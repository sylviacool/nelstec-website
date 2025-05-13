import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header_bg_1.png'
import aboutImg from "../../assets/images/about-img.jpg";
import aboutImage from "../../assets/images/vision.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        At NELSTEC, we specialize in providing cutting-edge technology solutions
        for businesses of all sizes. With a focus on innovation and reliability,
        we help companies streamline their operations and drive growth through
        our tailored software solutions
      </Header>
      
      {/* First section - Image on left, content on right */}
      <section className="about__section">
        <div className="about__image">
          <img src={aboutImage} alt="Our Vision" className="first-image" />
        </div>
        <div className="about__content">
          <h2>Our Vision</h2>
          <p>
            We aim to empower businesses with cutting-edge technology solutions
            that drive growth, efficiency, and innovation. With a team of
            passionate experts, we deliver exceptional IT services that solve
            real-world problems and help our clients succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Second section - Image on right, content on left */}
      <section className="about__section about__section-reverse second-section">
        <div className="about__image">
          <img src={aboutImg} alt="Our Mission" className="second-image" />
        </div>
        <div className="about__content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses by delivering innovative IT
            services including SAP solutions, cloud computing, and website
            development. We strive to help clients achieve their goals through
            reliable technology and expert consulting.
          </p>
        </div>
      </section>
    </>
  );
}

export default About