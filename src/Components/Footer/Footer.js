import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return <div className="footer">Developed By Shaqeel less - <Link to={'/login'}>Login here</Link></div>;
};

export default Footer;
