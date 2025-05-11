// React Icons
import { SiOpenaigym } from "react-icons/si";

import {
  FaHeadset,
  FaCloud,
  FaHandshake,
  FaLightbulb,
  FaServer,
  FaUsers,
  FaQuestionCircle,
  FaInfoCircle,
  FaLaptopCode,
} from "react-icons/fa";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const services = [
  {
    id: 1,
    icon: FaServer,
    title: "SAP",
    desc: "Comprehensive SAP services including implementation, integration, and support.",
    path: "/services/sap",
  },
  {
    id: 2,
    icon: FaCloud,
    title: "Cloud Computing",
    desc: "Scalable and secure cloud solutions including IaaS, PaaS, and SaaS.",
    path: "/services/cloud-computing",
  },
  {
    id: 3,
    icon: FaUsers,
    title: "IT Consulting",
    desc: "Strategic IT consulting to optimize your business processes and technology usage.",
    path: "/services/it-consulting",
  },
  {
    id: 4,
    icon: FaLaptopCode,
    title: "Website Development",
    desc: "Custom website development including eCommerce, web apps, and responsive design.",
    path: "/services/website-development",
  },
];


export const values = [
  {
    id: 1,
    icon: FaHandshake,
    title: "Reliability",
    desc: "We are committed to providing trustworthy and dependable services.",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Collaboration",
    desc: "We believe in the power of teamwork to achieve our goals.",
  },
  {
    id: 3,
    icon: FaLightbulb,
    title: "Innovation",
    desc: "We constantly innovate to deliver cutting-edge solutions.",
  },
  {
    id: 4,
    icon: FaCloud,
    title: "Cloud Solutions",
    desc: "We offer scalable cloud computing services that can grow with your business.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is ERP?",
    answer:
      "ERP (Enterprise Resource Planning) is a software solution to manage and integrate your business processes.",
  },
  {
    id: 2,
    question: "What cloud computing services do you offer?",
    answer:
      "We offer infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS), and software-as-a-service (SaaS).",
  },
  {
    id: 3,
    question: "What are the benefits of cloud hosting?",
    answer:
      "Cloud hosting provides scalability, flexibility, and reduced costs, as well as improved uptime and security.",
  },
  {
    id: 4,
    question: "Do you provide support for SAP installations?",
    answer:
      "Yes, we provide full SAP implementation and ongoing support for businesses.",
  },
  {
    id: 5,
    question: "What kind of web development services do you offer?",
    answer:
      "We offer full-stack web development services, including custom websites, eCommerce platforms, and web applications. Our team specializes in building scalable, responsive, and secure websites that meet your business goals. Whether you need a simple website or a complex web app, we've got you covered.",
  },
  {
    id: 6,
    question: "Do you offer ongoing support after the implementation?",
    answer:
      "Yes, we offer ongoing support after the implementation of ERP systems, SAP, and web development projects. Our support services include troubleshooting, system updates, training, and consulting to ensure your business continues to run smoothly and adapt to any changes.",
  },
];
