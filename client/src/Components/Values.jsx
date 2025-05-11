import React from 'react'
import Image from '../assets/images/value.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values_right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            At NELSTEC, we are driven by a commitment to empowering
            businesses and professionals through innovative technology and
            expert training. Our core values—excellence, reliability, and
            knowledge sharing—shape our approach to SAP consulting, SAP HANA
            implementation, and IT training services.
          </p>
          <div className="values_wrapper">
            {values.map(({ id, icon, title, desc }) => {
              const Icon = icon;
              return (
                <Card className="values_value" key={id}>
                  <span>
                    <Icon />
                  </span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values