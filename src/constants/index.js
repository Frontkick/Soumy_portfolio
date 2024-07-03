import { color } from "framer-motion";
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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flask,
  python,
  mysql,
  cpp,
  solidity
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: 'python',
    icon: python
  },
  {
    name:'C++',
    icon:cpp
  },
  {
    name:"Solidity",
    icon:solidity
  },
  {
    name:"MySQL",
    icon:mysql
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
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
    name: "Ortus",
    description:
      "Developed a programming language, 'Ortus' using C++ from scratch, Designed and implemented core features, syntax, and semantics, parser, generator, etc of Ortus",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name:"Cmake",
        color:"orange-text-gradient",
      }
    ],
    image: "https://cdn1.vectorstock.com/i/1000x1000/64/70/compiler-concept-icon-software-development-vector-29166470.jpg",
    source_code_link: "https://github.com/Frontkick/Ortus-Compiler-",
    link:"https://ortus-frontend.vercel.app/"
  },
  {
    name: "Article Extractor and Summarizer",
    description:
      "Developed a GenAI and NLP model for article extraction from the Web using Flask,React Created a system to generate summaries from extracted articles",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GenAI",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: "https://gdoc.io/uploads/Newspaper-article-template-for-students-web-712x984.webp",
    source_code_link: "https://github.com/Frontkick/Article_Extractor",
    link:"https://article-search-two.vercel.app/"
  },
  {
    name: "FullStack Ecommerce Website",
    description:
      "Developed a full stack e-commerce website Implemented an admin panel to track and manage data, orders, and details Utilized React for frontend development and Express for backend development Leverage MongoDB for database",
    tags: [
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhv65puRhll2tfqtwi5NubgzMwaqSLthRafwHYxeWuz5WuQuN5awzJ8uXdF9oyPem_xo&usqp=CAU",
    source_code_link: "https://github.com/",
    link:""
  },
  {
    name: "Transacting through Aave Smart Contacts",
    description:
      "Built an simple frontend interface to connect metamask and get address of the user.Integrated Aavee smart contract which deposits ERC20 token to the Aaveâ€TMs smart contract by calling the deposit/supply method.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name:"Aave",
        color:"pink-text-gradient"
      }
    ],
    image: "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/07/blockchain.jpg",
    source_code_link: "https://github.com/Frontkick/Aave_SmartContract_deposit",
    link:"https://article-search-two.vercel.app/"
  },
  {
    name: "Movie Database Management System",
    description:
      "Developed a Movie Database Management System using MySQL to store and manage movie details like cast, ratings, and other relevant information Utilized XAMPP to run MySQL server locally and React for the frontend development Implemented Python (Flask) for the backend functionality",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name:"Xammp",
        color:"pink-text-gradient"
      },
      {
        name:"flask",
        color:"orange-text-gradient"
      }
    ],
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5923698/og_image/optimized/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png",
    source_code_link: "https://github.com/",
    link:""
  },
  {
    name: "Static Frontend Websites 1",
    description:
      "Built with react and Tailwind css and integrated cool animations and transitions in it",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/8497786/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png",
    source_code_link: "https://github.com/Frontkick/frontend",
    link:"https://frontend-ui-chi.vercel.app/"
  },
  {
    name: "Static Frontend Websites 2",
    description:
      "Built with react and Tailwind css and integrated cool animations and transitions in it",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/8497786/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png",
    source_code_link: "https://github.com/Frontkick/Animated_UI_Project",
    link:"https://animated-ui-project.vercel.app/Home"
  },
];

export { services, technologies, experiences, testimonials, projects };
