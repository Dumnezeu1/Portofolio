"use strict";
exports.__esModule = true;
exports.experienceData = exports.educationData = exports.webProjects = exports.mobileProjects = exports.brandIcons = void 0;
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
var promotional_png_1 = require("./assets/projectsImages/connect/promotional.png");
var promotional_png_2 = require("./assets/projectsImages/easyrent/promotional.png");
var promotional_png_3 = require("./assets/projectsImages/letsEat/promotional.png");
var promotional_png_4 = require("./assets/projectsImages/todoList/promotional.png");
var promotional_png_5 = require("./assets/projectsImages/service/promotional.png");
exports.brandIcons = [
    {
        id: 1,
        icon: free_brands_svg_icons_1.faLinkedinIn,
        link: "https://www.linkedin.com/in/cosmin-alexandru-dumitrescu-547180172/"
    },
    {
        id: 2,
        icon: free_brands_svg_icons_1.faGithub,
        link: "https://github.com/Dumnezeu1"
    },
    {
        id: 3,
        icon: free_regular_svg_icons_1.faEnvelope,
        link: "mailto:alexdumitrescu12@yahoo.com"
    },
];
exports.mobileProjects = [
    {
        id: 1,
        name: "E-TWOW Connect",
        details: "Mobile Front-End (React native)",
        description: "News, bluetooth and product showcase app",
        imageUrl: promotional_png_1["default"],
        workingTime: "2020 - Current",
        liveData: [
            {
                id: 2,
                icon: free_brands_svg_icons_1.faAppStore,
                link: "https://www.google.ro"
            },
            {
                id: 3,
                icon: free_brands_svg_icons_1.faGooglePlay,
                link: "https://www.google.ro"
            },
        ],
        projectMoreDetails: {
            detailedDescription: "DADADA",
            languages: [
                { id: 1, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
                { id: 2, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
            ]
        }
    },
    {
        id: 2,
        name: "E-TWOW EasyRental",
        details: "Mobile Front-End (React native)",
        description: "Renting electric scooters app",
        imageUrl: promotional_png_2["default"],
        workingTime: "2020 - Current",
        liveData: [
            {
                id: 2,
                icon: free_brands_svg_icons_1.faAppStore,
                link: "https://www.google.ro"
            },
            {
                id: 3,
                icon: free_brands_svg_icons_1.faGooglePlay,
                link: "https://www.google.ro"
            },
        ],
        projectMoreDetails: {
            detailedDescription: "DADADA",
            languages: [
                { id: 1, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
                { id: 2, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
            ]
        }
    },
];
exports.webProjects = [
    {
        id: 1,
        name: "Let's Eat",
        details: "Web Front-End (React)",
        description: "Food order service",
        imageUrl: promotional_png_3["default"],
        workingTime: "2019 - 2020",
        liveData: [
            {
                id: 1,
                icon: free_brands_svg_icons_1.faGithubAlt,
                link: "https://github.com/Dumnezeu1/Let-s-Eat-REACT"
            },
            {
                id: 2,
                icon: free_brands_svg_icons_1.faAppStore,
                link: "https://www.google.ro"
            },
        ],
        projectMoreDetails: {
            detailedDescription: "DADADA",
            languages: [
                { id: 1, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
                { id: 2, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
            ]
        }
    },
    {
        id: 2,
        name: "Service",
        details: "Web Front-End (React native)",
        description: "Service management",
        imageUrl: promotional_png_5["default"],
        workingTime: "2020 - Current",
        liveData: [],
        projectMoreDetails: {
            detailedDescription: "DADADA",
            languages: [
                { id: 1, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
                { id: 2, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
            ]
        }
    },
    {
        id: 3,
        name: "Todo List",
        details: "Web Front-End (React native)",
        description: "Basic todo list with local crud and filter.",
        imageUrl: promotional_png_4["default"],
        workingTime: "2019",
        liveData: [
            {
                id: 1,
                icon: free_brands_svg_icons_1.faGithubAlt,
                link: "https://github.com/Dumnezeu1/todoList-useReducer-useContext"
            },
            {
                id: 2,
                icon: free_brands_svg_icons_1.faAppStore,
                link: "https://www.google.ro"
            },
        ],
        projectMoreDetails: {
            detailedDescription: "DADADA",
            languages: [
                { id: 1, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
                { id: 2, name: "React Native", icon: free_brands_svg_icons_1.faReact, link: "pyla" },
            ]
        }
    },
];
// education
exports.educationData = [
    {
        id: 1,
        name: "Studying E-Business (master degree)",
        descriptions: [
            {
                id: 1,
                name: "Faculty of Automation, Computers and Electronics — Craiova"
            },
        ],
        date: "Oct 2020 — Current"
    },
    {
        id: 2,
        name: "Bachelor degree in robotics",
        descriptions: [
            {
                id: 1,
                name: "Faculty of Automation, Computers and Electronics — Craiova"
            },
        ],
        date: "Oct 2016 — July 2020"
    },
    {
        id: 3,
        name: "Mathematical informatics",
        descriptions: [{ id: 1, name: "'Tudor Arghezi' High School — Craiova" }],
        date: "Sep 2012 — Jun 2016"
    },
];
exports.experienceData = [
    {
        id: 1,
        name: "E-TWOW",
        descriptions: [
            { id: 1, name: "E-TWOW Connect - Mobile Front-End" },
            { id: 2, name: "E-TWOW EasyRental - Mobile Front-End" },
        ],
        date: "Jan 2020 — Current",
        technologies: [{ id: 1, name: "React Native" }]
    },
    {
        id: 2,
        name: "OSF Global Services Academy (Back-End)",
        descriptions: [
            {
                id: 1,
                name: "Backend for a shopping cart (Express.js)"
            },
        ],
        date: "Oct 2019 — Nov 2019",
        technologies: [
            { id: 1, name: "Node.js" },
            { id: 2, name: "Express.js" },
        ]
    },
    {
        id: 3,
        name: "iQuest University",
        descriptions: [
            {
                id: 1,
                name: "Intro to Web-Dev: I created an e-commerce single page application to order food (like foodpanda)"
            },
            {
                id: 2,
                name: "Advanced Frameworks: Same concept as the first application (React"
            },
        ],
        date: "Feb 2019 — Aug 2019",
        technologies: [
            { id: 1, name: "React.js" },
            { id: 2, name: "Vanilla JS" },
            { id: 3, name: "SCSS" },
        ]
    },
    {
        id: 4,
        name: "Roweb summer practive",
        descriptions: [
            {
                id: 1,
                name: "Creating a CR,D(createV readV updateVdelete) in LaravelV then transforming it into Lumen(removing the ,I part) and then combining Lumen(back-end) with React(front-end). "
            },
        ],
        date: "Jun 2019 — Aug 2019",
        technologies: [
            { id: 1, name: "Laravel" },
            { id: 2, name: "Lumen" },
            { id: 3, name: "React.js" },
        ]
    },
    {
        id: 5,
        name: "Robomaniacs",
        descriptions: [
            {
                id: 1,
                name: "I participated in the line follower competition"
            },
        ],
        date: "Mar 2019",
        technologies: [
            { id: 1, name: "Microcontrollers" },
            { id: 2, name: "Arduino" },
        ]
    },
    {
        id: 6,
        name: "Robotics Championship",
        descriptions: [
            {
                id: 1,
                name: "I participated in the Sumo robot competition"
            },
        ],
        date: "Apr 2019",
        technologies: [
            { id: 1, name: "Microcontrollers" },
            { id: 2, name: "Arduino" },
        ]
    },
    {
        id: 7,
        name: "OSF Global Services Academy (Front-End)",
        descriptions: [
            {
                id: 1,
                name: "I created an e-commerce single page application to sell shoes"
            },
        ],
        date: "Oct 2018 — Nov 2018",
        technologies: [
            { id: 1, name: "SASS" },
            { id: 2, name: "jQuery" },
            { id: 3, name: "JS Vanilla" },
        ]
    },
    {
        id: 8,
        name: "Incesa Internship",
        descriptions: [
            {
                id: 1,
                name: "An application made in JA3A that  used MariaDBV we could update, delete or insert data into JTable  or JTree and export into GML."
            },
        ],
        date: "Apr 2018 — Sep 2018",
        technologies: [
            { id: 1, name: "JAVA" },
            { id: 2, name: "MariaDB" },
            { id: 3, name: "XML" },
        ]
    },
];
