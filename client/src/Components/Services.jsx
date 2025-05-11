import React from 'react'
import { FaCrown } from "react-icons/fa";
import SectionHead from './SectionHead';
import { services } from "../data";
import Card from '../UI/Card';
import {Link} from 'react-router-dom'
import{AiFillCaretRight} from 'react-icons/ai'




const Services = () => {
  return (
    <section className="services">
      <div className=" container services_container">
        <SectionHead icon={<FaCrown />} title="Our Services" />

        <div className="services_wrapper">
          {services.map(({ id, icon, title, desc, path }) => {
            const Icon = icon;
            return (
              <Card className="services_service" key={id}>
                <span>
                  <Icon />
                </span>
                <h4>{title}</h4>
                <small>{desc}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services