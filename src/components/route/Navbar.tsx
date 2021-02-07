import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// @ts-ignore
import Logo from "../assets/logo.png";

import "../style/Navbar.css";

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
];

const Header: React.FC = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <nav
      className="navbar_container"
      style={{ backgroundColor: scrollValue > 500 ? "white" : "transparent" }}
    >
      <div className="navbar_logo">
        <Link to="/">
          <img src={Logo} alt="Logo" height="40" width="40" />
        </Link>
      </div>
      <div className="links_container">
        <ul>
          {navLinks.map((navLink, idx) => {
            const { title, path } = navLink;
            return (
              <li key={idx}>
                <Link to={path}>
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
