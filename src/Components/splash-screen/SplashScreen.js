import React from "react";
import "./SplashScreen.css";
import logo from "../../assets/logo.gif";
const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default SplashScreen;
