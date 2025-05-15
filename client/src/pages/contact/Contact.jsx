import React from 'react'
import { useState } from "react";
import axios from "axios"; 
import './contact.css'
import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };


  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Do you have a project in mind? Let’s make it happen.
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <div className="social_icons">
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
            
            <form className="contact_form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact