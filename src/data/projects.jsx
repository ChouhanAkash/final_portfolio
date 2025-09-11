const projects = [
  {
    id: 1,
    title: "Book Management System",
    desc: "The Library Management System is a full-stack web application designed to manage books, track borrowings, and maintain an organized record of book transactions. It allows users to register, log in, search for books, borrow, and return them while providing administrators with tools to manage the library database.",
    tech: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    image: [
      `${import.meta.env.BASE_URL}images/booknest1.png`,
      `${import.meta.env.BASE_URL}images/booknest2.png`,
      `${import.meta.env.BASE_URL}images/booknest3.png`,
      `${import.meta.env.BASE_URL}images/booknest4.png`
    ],
    github: "https://github.com/ChouhanAkash/Book_Nest.git",
    live: "https://book-nest-eosin-psi.vercel.app/"
  },
  {
    id: 2,
    title: "FleetManagerPro_Logistics-and-Transportation",
    desc: "FleetManagerPro is an all-in-one fleet management system designed to help logistics companies track vehicles, monitor trip statuses, and manage drivers efficiently. It provides real-time location tracking using geocoding and Firebase integration.",
    tech: ["React", "Firebase", "GoogleApis"],
    image: [
      `${import.meta.env.BASE_URL}images/fleetmanager.png`,
      `${import.meta.env.BASE_URL}images/fleet1.png`
    ],
    github: "https://github.com/ChouhanAkash/FleetManagerPro_Logistics-and-Transportation.git",
    live: "https://fastidious-muffin-38f3a9.netlify.app/"
  },
  {
    id: 3,
    title: "Gupio Smart Parking App",
    desc: "A React Native based mobile application for smart parking management. This app allows users to book parking spots, manage active bookings, and view availability in real-time.",
    tech: ["React Native", "TypeScript","Zod"],
    image: [
      `${import.meta.env.BASE_URL}images/gupio1.jpg`,
      `${import.meta.env.BASE_URL}images/gupio2.jpg`,
      `${import.meta.env.BASE_URL}images/gupio3.jpg`,
      `${import.meta.env.BASE_URL}images/gupio5.jpg`
    ],
    github: "https://github.com/ChouhanAkash/GupioSmartParking.git"
  },
  {
    id: 4,
    title: "Civic Routes",
    desc: "CivicRoutes is a modern web application that allows citizens to report civic problems (like water leakage, potholes, etc.) in their area and helps authorities manage and resolve them efficiently.",
    tech: ["React","Firebase"],
    image: [
      `${import.meta.env.BASE_URL}images/civic1.png`,
      `${import.meta.env.BASE_URL}images/civic2.png`,
      `${import.meta.env.BASE_URL}images/civic3.png`
    ],
    github: "https://github.com/ChouhanAkash/civic_routes.git",
    live: "https://civicroute.netlify.app/"
  },
  {
    id: 5,
    title: "Medium Blogs",
    desc: "The Medium website is an online publishing platform where users can read, write, and share articles on various topics. It combines elements of blogging, social media, and content discovery, allowing writers to publish their work and engage with readers.",
    tech: ["Html","Css","JavaScript","Firebase"],
    image: [
      `${import.meta.env.BASE_URL}images/medium1.png`,
      `${import.meta.env.BASE_URL}images/medium2.png`,
      `${import.meta.env.BASE_URL}images/medium3.png`,
      `${import.meta.env.BASE_URL}images/medium4.png`,
      `${import.meta.env.BASE_URL}images/medium5.png`
    ],
    github: "https://github.com/ChouhanAkash/Medium_Clone.git",
    live: "https://fabulous-begonia-c98fec.netlify.app/"
  }
];

export default projects;
