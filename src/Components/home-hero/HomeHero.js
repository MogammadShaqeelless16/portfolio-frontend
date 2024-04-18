import React, { useEffect } from "react";
import "./HomeHero.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllAbout } from "../../Redux/About/aboutAction";
import { Typewriter } from "react-simple-typewriter";
const HomeHero = () => {
  const dispatch = useDispatch();
  const { about } = useSelector((state) => state.about);
  useEffect(() => {
    dispatch(getAllAbout());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="home-hero__content">
        <h2 className="heading-primary" data-aos="fade-up">
        Hey there! I'm Shaqeel Less, and I'm passionate about <br />
          <span>
            <Typewriter
              words={["Ethical Hacker", "Web Dev", "Software Dev", "Innovation"]}
              loop
              typeSpeed={150}
              deleteSpeed={100}
              cursor
              cursorStyle="_"
            />
          </span>
        </h2>
        <div className="home-hero__info">
          {about && about[0] && (
            <p className="text-primary" data-aos="fade-up">
              {about[0].summary}
            </p>
          )}
        </div>
      </div>
      <div className="home__border">
        <hr />
      </div>
      <div className="mouse__scroll">
        <div className="mouse"></div>
      </div>
    </div>
  );
};

export default HomeHero;
