import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "../style/Navbar.css";

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Projects`, path: `/product` },
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
      style={{ backgroundColor: scrollValue > 400 ? "white" : "transparent" }}
    >
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
    </nav>
  );
};

export default Header;
