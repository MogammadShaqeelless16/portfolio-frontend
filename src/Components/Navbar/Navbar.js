import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.png";
const Navbar = ({ about, project, contact }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  const scrollToSection = (elem) => {
    window.scrollTo({
      top: elem.current.offsetTop,
      behavior: "smooth",
    });
  };
  const location = useLocation();
  const isBlogPage = location.pathname === "/media";
  return (
    <nav className={`${navIsOpen ? "active" : ""}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="bars">
        {navIsOpen ? (
          <RxCross1 onClick={toggleNav} />
        ) : (
          <GiHamburgerMenu onClick={toggleNav} />
        )}
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        {isBlogPage ? null : (
          <li className="nav-link" onClick={() => scrollToSection(about)}>
            <Link to="#about">About</Link>
          </li>
        )}
        {isBlogPage ? null : (
          <li className="nav-link" onClick={() => scrollToSection(project)}>
            <Link to="#project">Project</Link>
          </li>
        )}
        <li className="nav-link">
          <Link to="/media">Media</Link>
        </li>
        <li className="nav-link">
          <Link to="/tool">Tool</Link>
        </li>
        <li className="nav-link">
          <Link to="/map">Map</Link>
        </li>
        {isBlogPage ? null : (
          <li className="nav-link" onClick={() => scrollToSection(contact)}>
            <Link to="#contact">Contact</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
