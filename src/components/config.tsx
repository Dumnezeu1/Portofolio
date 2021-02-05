import {
  faLinkedinIn,
  faGithub,
  faGithubAlt,
  faAppStore,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import connectPromotional from "./assets/projectsImages/connect/promotional.png";

import easyRentPromotional from "./assets/projectsImages/easyrent/promotional.png";

import letsEatPromotional from "./assets/projectsImages/letsEat/promotional.png";

import todoListPromotional from "./assets/projectsImages/todoList/promotional.png";
import servicePromotional from "./assets/projectsImages/service/promotional.png";

export const brandIcons = [
  {
    id: 1,
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/cosmin-alexandru-dumitrescu-547180172/",
  },
  {
    id: 2,
    icon: faGithub,
    link: "https://github.com/Dumnezeu1",
  },
  {
    id: 3,
    icon: faEnvelope,
    link: "mailto:alexdumitrescu12@yahoo.com",
  },
];

export const mobileProjects = [
  {
    id: 1,
    name: "E-TWOW Connect",
    details: "Mobile Front-End (React native)",
    description: "News, bluetooth and product showcase",
    imageUrl: connectPromotional,
    workingTime: "2020 - Current",
    liveData: [
      {
        id: 2,
        icon: faAppStore,
        link:
          "https://apps.apple.com/ro/app/e-twow-connect/id1524191048?ign-itsct=apps_box&ign-itscg=30200",
      },
      {
        id: 3,
        icon: faGooglePlay,
        link: "https://play.google.com/store/apps/details?id=com.etwowconnect",
      },
    ],
    projectMoreDetails: {
      detailedDescription: [
        "An app created for bluetooth kick scooters in React Native. The user will need to register and login to acces the bluetooth part of the app. ",
        "The app contain a news feed screen and some product placements witch can be accessed without an account.",
        `The user can connect to a scooter via bluetooth and send different commands to it (with Polidea library).`,
        "RN Reanimated is used for the animations within  the app and control some lottie animations. ",
        "OneSignal is user for push notifications.",
      ],
      role: "UI/UX design, React Native developer",
      features: "News, Bluetooth, Product placement",
      languages: "Typescript, React Native",
      libraries:
        "React Navigation, Redux, RN Reanimated, RN Ble-Plx (Polidea), OneSignal, Lottie",
      videoLink: "https://www.youtube.com/watch?v=7RJbsbSF4jA",
    },
  },
  {
    id: 2,
    name: "E-TWOW EasyRental",
    details: "Mobile Front-End (React native)",
    description: "Renting electric scooters",
    imageUrl: easyRentPromotional,
    workingTime: "2020 - Current",
    liveData: [
      {
        id: 2,
        icon: faAppStore,
        link:
          "https://apps.apple.com/ro/app/e-twow-easyrental/id1505721539?itsct=apps_box&itscg=30200",
      },
      {
        id: 3,
        icon: faGooglePlay,
        link:
          "https://play.google.com/store/apps/details?id=com.etwoweasyrental",
      },
    ],
    projectMoreDetails: {
      detailedDescription: [
        "Renting kick scooter.",
        "The user will create an account with his phone number (it will validate the number by the code sent by sms) and then will be redirected to home",
        "Then he can chose the day, the hour and the number of days he will rent the scooter.",
        "He can see the booking history at any time and the status of each booking",
      ],
      role: "UI/UX design, React Native developer, Deployment",
      features: "Renting kick scooters",
      languages: "React Native",
      libraries: "React Navigation, Redux, Animated Api, OneSignal, Lottie",
      videoLink: "https://www.youtube.com/watch?v=7RJbsbSF4jA",
    },
  },
];

export const webProjects = [
  {
    id: 1,
    name: "Dashboard",
    details: "Web Front-End (React)",
    description: "Electric scooters service dashboard",
    imageUrl: servicePromotional,
    workingTime: "2020 - Current",
    liveData: [],
    projectMoreDetails: {
      detailedDescription: [
        "Administration panel for scooter service",
        "Users will have different roles like office (for adding client data), service (for service details) and super user",
        "You can generate an pdf to print the sheet details or delete the sheet (delete is only for super user.)",
        "The table has pagination, the user can change the pages or choose the number of display rows, they can search for certain sheets by certain data and filter them.",
        "The super user can add new parts or defects and modify them and can generate reports depending on the desired time period.",
      ],
      role: "UI/UX design, React developer",
      features: "Service Dashboard",
      languages: "React",
      videoLink: "https://www.youtube.com/watch?v=7RJbsbSF4jA",
      libraries: "React Router, Redux, Material UI",
    },
  },
  {
    id: 2,
    name: "Let's Eat",
    details: "Web Front-End (React)",
    description: "Food order service",
    imageUrl: letsEatPromotional,
    workingTime: "2019 - 2020",
    liveData: [
      {
        id: 1,
        icon: faGithubAlt,
        link: "https://github.com/Dumnezeu1/Let-s-Eat-REACT",
      },
      {
        id: 2,
        icon: faAppStore,
        link: "https://www.google.ro",
      },
    ],
    projectMoreDetails: {
      detailedDescription: [
        "My second project with React. It's like foodpanda, website for ordering food.",
        "An slider that is chaging at some time.",
        "Every reataurant will have his own page with his own products and shopping cart.",
        "You can add products in the shopping cart, delete them and then complete with an adress and that's it.",
      ],
      role: "UI/UX design, React developer",
      features: "Website for ordering food",
      languages: "React ",
      videoLink: "https://www.youtube.com/watch?v=7RJbsbSF4jA",
    },
  },
  {
    id: 3,
    name: "Todo List",
    details: "Web Front-End (React)",
    description: "Basic todo list with local crud and filter.",
    imageUrl: todoListPromotional,
    workingTime: "2019",
    liveData: [
      {
        id: 1,
        icon: faGithubAlt,
        link: "https://github.com/Dumnezeu1/todoList-useReducer-useContext",
      },
      {
        id: 2,
        icon: faAppStore,
        link: "https://www.google.ro",
      },
    ],
    projectMoreDetails: {
      detailedDescription: ["Basic todo list with context api, filter, crud."],
      role: "UI/UX design, React ",
      features: "News, Bluetooth, Product placement",
      languages: "React",
      videoLink: "https://www.youtube.com/watch?v=7RJbsbSF4jA",
    },
  },
];

// education

export const educationData = [
  {
    id: 1,
    name: "Studying E-Business (master degree)",
    descriptions: [
      {
        id: 1,
        name: "Faculty of Automation, Computers and Electronics — Craiova",
      },
    ],
    date: "Oct 2020 — Current",
  },
  {
    id: 2,
    name: "Bachelor degree in robotics",
    descriptions: [
      {
        id: 1,
        name: "Faculty of Automation, Computers and Electronics — Craiova",
      },
    ],
    date: "Oct 2016 — July 2020",
  },
  {
    id: 3,
    name: "Mathematical informatics",
    descriptions: [{ id: 1, name: "'Tudor Arghezi' High School — Craiova" }],
    date: "Sep 2012 — Jun 2016",
  },
];

export const experienceData = [
  {
    id: 1,
    name: "E-TWOW",
    descriptions: [
      { id: 1, name: "E-TWOW Connect - Mobile Front-End" },
      { id: 2, name: "E-TWOW EasyRental - Mobile Front-End" },
    ],
    date: "Jan 2020 — Current",
    technologies: [{ id: 1, name: "React Native" }],
  },
  {
    id: 2,
    name: "OSF Global Services Academy (Back-End)",
    descriptions: [
      {
        id: 1,
        name: "Backend for a shopping cart (Express.js)",
      },
    ],
    date: "Oct 2019 — Nov 2019",
    technologies: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "Express.js" },
    ],
  },
  {
    id: 3,
    name: "iQuest University",
    descriptions: [
      {
        id: 1,
        name:
          "Intro to Web-Dev: I created an e-commerce single page application to order food (like foodpanda)",
      },
      {
        id: 2,
        name:
          "Advanced Frameworks: Same concept as the first application (React",
      },
    ],
    date: "Feb 2019 — Aug 2019",
    technologies: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Vanilla JS" },
      { id: 3, name: "SCSS" },
    ],
  },

  {
    id: 4,
    name: "Roweb summer practive",
    descriptions: [
      {
        id: 1,
        name:
          "Creating a CR,D(createV readV updateVdelete) in LaravelV then transforming it into Lumen(removing the ,I part) and then combining Lumen(back-end) with React(front-end). ",
      },
    ],
    date: "Jun 2019 — Aug 2019",
    technologies: [
      { id: 1, name: "Laravel" },
      { id: 2, name: "Lumen" },
      { id: 3, name: "React.js" },
    ],
  },

  {
    id: 5,
    name: "Robomaniacs",
    descriptions: [
      {
        id: 1,
        name: "I participated in the line follower competition",
      },
    ],
    date: "Mar 2019",
    technologies: [
      { id: 1, name: "Microcontrollers" },
      { id: 2, name: "Arduino" },
    ],
  },
  {
    id: 6,
    name: "Robotics Championship",
    descriptions: [
      {
        id: 1,
        name: "I participated in the Sumo robot competition",
      },
    ],
    date: "Apr 2019",
    technologies: [
      { id: 1, name: "Microcontrollers" },
      { id: 2, name: "Arduino" },
    ],
  },
  {
    id: 7,
    name: "OSF Global Services Academy (Front-End)",
    descriptions: [
      {
        id: 1,
        name: "I created an e-commerce single page application to sell shoes",
      },
    ],
    date: "Oct 2018 — Nov 2018",
    technologies: [
      { id: 1, name: "SASS" },
      { id: 2, name: "jQuery" },
      { id: 3, name: "JS Vanilla" },
    ],
  },
  {
    id: 8,
    name: "Incesa Internship",
    descriptions: [
      {
        id: 1,
        name:
          "An application made in JA3A that  used MariaDBV we could update, delete or insert data into JTable  or JTree and export into GML.",
      },
    ],
    date: "Apr 2018 — Sep 2018",
    technologies: [
      { id: 1, name: "JAVA" },
      { id: 2, name: "MariaDB" },
      { id: 3, name: "XML" },
    ],
  },
];
