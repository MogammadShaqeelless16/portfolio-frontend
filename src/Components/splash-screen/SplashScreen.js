import React from "react";
import "./SplashScreen.css";
import logo from "../../assets/logo.gif";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="logo" />
      <div className="welcome-message">
        👋 Welcome!
      </div>
    </div>
  );
};

export default SplashScreen;
