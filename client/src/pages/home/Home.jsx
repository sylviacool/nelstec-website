import React from 'react'
import MainHeader from '../../Components/MainHeader';
import Services from '../../Components/Services';
import "./home.css";
import "./home2.css";
import Values from '../../Components/Values';
import FAQs from '../../Components/FAQs';
import Footer from '../../Components/Footer';

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Services/>
    <Values/>
    <FAQs/>
    <Footer/>
    </>
  )
}

export default Home