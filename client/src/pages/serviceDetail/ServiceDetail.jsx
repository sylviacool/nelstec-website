import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../../data';
import './serviceDetail.css';
import Header from '../../Components/Header';
import HeaderImage from '../../assets/images/header_bg_2.jpg';
import { FaArrowLeft } from 'react-icons/fa';

const ServiceDetail = () => {
  const { id } = useParams();
  
  // Find the service that matches the URL parameter
  const service = services.find(service => service.path === `/services/${id}`);
  
  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service not found</h2>
        <p>The service you're looking for doesn't exist or has been removed.</p>
        <Link to="/services" className="btn">Back to Services</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Header title={service.title} image={HeaderImage}>
        Detailed information about our {service.title} services
      </Header>
      
      <section className="service-detail">
        <div className="container service-detail__container">
          <div className="service-detail__header">
            <div className="service-detail__icon">
              <Icon />
            </div>
            <h2>{service.title}</h2>
          </div>
          
          <div className="service-detail__content">
            <div className="service-detail__description">
              <h3>Overview</h3>
              <p>{service.desc}</p>
              
              {id === 'sap' && (
                <>
                  <h3>SAP Services We Offer</h3>
                  <ul>
                    <li>
                      <strong>SAP Implementation</strong>
                      <p>We provide end-to-end SAP implementation services tailored to your business needs. Our team of experts will guide you through the entire process, from planning and design to deployment and support.</p>
                    </li>
                    <li>
                      <strong>SAP Integration</strong>
                      <p>Seamlessly integrate SAP with your existing systems and applications to ensure smooth data flow and process automation across your organization.</p>
                    </li>
                    <li>
                      <strong>SAP Support and Maintenance</strong>
                      <p>Our dedicated support team provides ongoing maintenance and troubleshooting to ensure your SAP systems run efficiently and effectively.</p>
                    </li>
                    <li>
                      <strong>SAP Upgrades and Migrations</strong>
                      <p>Stay up-to-date with the latest SAP technologies through our upgrade and migration services, minimizing disruption to your business operations.</p>
                    </li>
                  </ul>
                </>
              )}
              
              {id === 'cloud-computing' && (
                <>
                  <h3>Cloud Computing Services We Offer</h3>
                  <ul>
                    <li>
                      <strong>Infrastructure as a Service (IaaS)</strong>
                      <p>Our IaaS solutions provide virtualized computing resources over the internet, allowing you to scale your infrastructure as needed without investing in physical hardware.</p>
                    </li>
                    <li>
                      <strong>Platform as a Service (PaaS)</strong>
                      <p>Our PaaS offerings provide a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure.</p>
                    </li>
                    <li>
                      <strong>Software as a Service (SaaS)</strong>
                      <p>Access software applications over the internet on a subscription basis with our SaaS solutions, eliminating the need for complex software and hardware management.</p>
                    </li>
                    <li>
                      <strong>Cloud Migration</strong>
                      <p>We help businesses migrate their existing applications and data to the cloud securely and efficiently, minimizing downtime and risk.</p>
                    </li>
                  </ul>
                </>
              )}
              
              {id === 'it-consulting' && (
                <>
                  <h3>IT Consulting Services We Offer</h3>
                  <ul>
                    <li>
                      <strong>IT Strategy Development</strong>
                      <p>We help you develop a comprehensive IT strategy aligned with your business goals, ensuring technology investments deliver maximum value.</p>
                    </li>
                    <li>
                      <strong>Business Process Optimization</strong>
                      <p>Our experts analyze and optimize your business processes to improve efficiency, reduce costs, and enhance customer satisfaction.</p>
                    </li>
                    <li>
                      <strong>Digital Transformation</strong>
                      <p>We guide organizations through digital transformation initiatives, helping them leverage new technologies to stay competitive in the digital age.</p>
                    </li>
                    <li>
                      <strong>IT Governance and Compliance</strong>
                      <p>Ensure your IT operations comply with relevant regulations and industry standards with our governance and compliance consulting services.</p>
                    </li>
                  </ul>
                </>
              )}
              
              {id === 'website-development' && (
                <>
                  <h3>Website Development Services We Offer</h3>
                  <ul>
                    <li>
                      <strong>Custom Website Development</strong>
                      <p>We create tailor-made websites that reflect your brand identity and meet your specific business requirements, ensuring a unique online presence.</p>
                    </li>
                    <li>
                      <strong>E-Commerce Solutions</strong>
                      <p>Our e-commerce development services help you build robust online stores with secure payment gateways, inventory management, and customer relationship management features.</p>
                    </li>
                    <li>
                      <strong>Web Application Development</strong>
                      <p>We develop sophisticated web applications that automate business processes, improve productivity, and enhance user experience.</p>
                    </li>
                    <li>
                      <strong>Responsive Web Design</strong>
                      <p>Our responsive web design ensures your website looks and functions perfectly across all devices, providing an optimal user experience regardless of screen size.</p>
                    </li>
                  </ul>
                </>
              )}
              
              <h3>Why Choose Us</h3>
              <ul className="service-detail__benefits">
                <li>Experienced team of professionals</li>
                <li>Customized solutions tailored to your business needs</li>
                <li>Proven track record of successful implementations</li>
                <li>Ongoing support and maintenance</li>
                <li>Competitive pricing and flexible engagement models</li>
              </ul>
            </div>
            
            <div className="service-detail__cta">
              <h3>Ready to get started?</h3>
              <p>Contact us today to discuss how our {service.title} services can benefit your business.</p>
              <Link to="/contact" className="btn lg">Contact Us</Link>
            </div>
          </div>
          
          <div className="service-detail__back">
            <Link to="/services" className="btn sm">
              <FaArrowLeft /> Back to Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;