import React from 'react';
import "./App.css"; // Import your global CSS file
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useRef } from "react";
import SocialIcons from "./Components/Social-icons/SocialIcons";
import SplashScreen from "./Components/splash-screen/SplashScreen";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Dashboard from "./Admin/Pages/Dashboard/Dashboard";
import store from "./Redux/store";
import { loadUser } from "./Redux/User/userAction";
import { useSelector } from "react-redux";
import Tool from "./Pages/Tool/tool";
import MapPage from "./Pages/Map/Map";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation"; // Import your BackgroundAnimation component

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const { isAuthentication } = useSelector((state) => state.user);
  const [showSplash, setShowSplash] = useState(true);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {showSplash ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <>
          {!isAuthentication ? (
            <>
              <BackgroundAnimation /> {/* Add your BackgroundAnimation component here */}
              <div className="content-container"> {/* Container for application content */}
                <Navbar about={about} project={project} contact={contact} />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home about={about} project={project} contact={contact} />
                    }
                  />
                </Routes>
                <Routes>
                  <Route path="/media" element={<Blog />} />
                </Routes>
                <Routes>
                  <Route path="/tool" element={<Tool />} />
                </Routes>
                <Routes>
                  <Route path="/map" element={<MapPage />} />
                </Routes>
                <Routes>
                  <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                  <Route
                    path="/admin/dashboard"
                    element={isAuthentication ? <Dashboard /> : <Login />}
                  />
                </Routes>
                <SocialIcons />
                <Footer />
                <ToastContainer />
              </div>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}

export default App;
