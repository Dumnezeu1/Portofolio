import * as React from "react";

import { Link } from "react-router-dom";

import "../style/Navbar.css";

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Projects`, path: `/product` },
];

const Header: React.FC = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <Link to="/">
          <h2>Alex Dumitrescu</h2>
        </Link>
      </div>
      <div className="links_container">
        <ul>
          {navLinks.map((navLink, idx) => {
            const { title, path } = navLink;
            return (
              <li key={title}>
                <Link to={path}>
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
