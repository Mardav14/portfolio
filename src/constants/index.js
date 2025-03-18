import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  django,
  flask,
  git,
  figma,
  docker,
  herbsMagic,
  AAI,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  ddos,
  blogDog,
  aptiQuiz,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flsk",
    icon: flask,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "Airport Authority of India, Govt. of India",
    icon: AAI,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "Developed the Airport Module for AAI's Pradipti internship portal, integrating intern onboarding, performance tracking, and certification processes.",
      "Focused on security, scalability, and seamless API interactions for efficient module functionality.",
    ],
    link:"https://pradipti-frontend.netlify.app/"
  },
  {
    title: "Frontend Developer",
    company_name: "Herbs Magic",
    icon: herbsMagic,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Developed and integrated a responsive frontend interface for an Image Scanning feature, enabling real-time skin and hair disease detection through live camera capture and image file upload.",
      "Developed and integrated a frontend solution for an AI-powered chatbot assistant, facilitating dynamic interaction and query resolution related to company offerings and products.",
      "Developed Flask backend, creating new API endpoints and webhooks to handle image processing and chatbot requests.",
    ],
    link:"https://www.theherbsmagic.com/"
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AptiQuiz",
    description:
      "Web application that hepls the user to prepare for cogmitive aptitude questions of various exams and interviews. User can appear for the test of their choice an a proper exam interface with countdown timer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: aptiQuiz,
    source_code_link: "https://aptiquiz.onrender.com/",
  },
  {
    name: "Blog Dog",
    description:
      "Website for posting and editing blogs with login based admin panel. User have to register and login to post blogs, everyone can read the posted blogs. MySQLite database for storage.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: blogDog,
    source_code_link: "https://github.com/Mardav14/BlogDog",
  },
  {
    name: "DDoS Attack Protection System",
    description:
      "An Ensemble learning model using Random Forest and Artificial Neural Network (ANN) which can predict Distributed Denial of Service attacks with accuracy of 95.4%.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: ddos,
    source_code_link: "https://github.com/Mardav14/DDoS_Protection_System",
  },
];

export { services, technologies, experiences, testimonials, projects };
