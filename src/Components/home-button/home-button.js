import React, { useState, useEffect } from 'react';
import "../home-button/home-button.css"

const HomeButton = () => {
  const [githubFollowers, setGithubFollowers] = useState(0);
  const [tiktokFollowers, setTiktokFollowers] = useState(0);
  const linkedinUrl = 'https://www.linkedin.com/in/shaqeel-less-11979a186/'; 
  const instagramUrl = 'https://www.instagram.com/shaqeelless/'; 
  const tiktokUrl = 'https://www.tiktok.com/@mogammadless'; 

  useEffect(() => {
    fetch('https://api.github.com/users/MogammadShaqeelless16')
      .then(response => response.json())
      .then(data => setGithubFollowers(data.followers));
  }, []);

  useEffect(() => {
    fetch('https://api.tiktok.com/user/info?username=mogammadless')
      .then(response => response.json())
      .then(data => setTiktokFollowers(data.followers));
  }, []);

  return (
    <div className="social-buttons">
      <button className="github-button">
        <a href="https://drive.google.com/file/d/11QweEAvgI4Vj7BRKmJkyQQ3wfKbeg1di/view?usp=sharing" download>
          Download CV
        </a>
      </button>
      <button className="github-button">
        <a href={`https://github.com/MogammadShaqeelless16`} target="_blank" rel="noreferrer">
          Follow me on GitHub ({githubFollowers})
        </a>
      </button>
      <button className="linkedin-button">
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          Connect with me on LinkedIn
        </a>
      </button>
      <button className="instagram-button" rel="noreferrer">
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          Follow me on Instagram
        </a>
      </button>
      <button className="tiktok-button" rel="noreferrer">
        <a href={tiktokUrl} target="_blank" rel="noreferrer">
          Follow me on TikTok ({tiktokFollowers})
        </a>
      </button>
    </div>
  );
};

export default HomeButton;
