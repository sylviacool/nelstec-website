import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header_bg_1.png'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        At NELSTEC, we specialize in providing cutting-edge technology
        solutions for businesses of all sizes. With a focus on innovation and
        reliability, we help companies streamline their operations and drive
        growth through our tailored software solutions
      </Header>
      <h1>About</h1>
    </>
  );
}

export default About