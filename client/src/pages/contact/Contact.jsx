import React from 'react'
import './contact.css'
import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Do you have a project in mind? Let’s make it happen.
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a
              href="mailto:info@nelstec.com"
              target="blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://m.me/nelstec"
              target="blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/2347031234567"
              target="blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact