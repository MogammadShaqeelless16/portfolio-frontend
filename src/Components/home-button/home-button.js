import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import "../home-button/home-button.css"

const HomeButton = () => {
  const [githubFollowers, setGithubFollowers] = useState(0);
  const [tiktokFollowers, setTiktokFollowers] = useState(0); // Add TikTok followers state
  const linkedinUrl = 'https://www.linkedin.com/in/your-username/'; 
  const instagramUrl = 'https://www.instagram.com/your-username/'; 
  const tiktokUrl = 'https://www.tiktok.com/@mogammadless'; // Add TikTok URL

  useEffect(() => {
    fetch('https://api.github.com/users/MogammadShaqeelless16')
      .then(response => response.json())
      .then(data => setGithubFollowers(data.followers));
  }, []);

  useEffect(() => {
    // Add API call to fetch TikTok follower count
    fetch('https://api.tiktok.com/user/info?username=mogammadless') // Replace with actual API endpoint
      .then(response => response.json())
      .then(data => setTiktokFollowers(data.followers));
  }, []);

  return (
    <div className="social-buttons">
      <button className="github-button">
        <a href="/your-cv-url" download>
          <FaFileDownload /> Download CV
        </a>
      </button>
      <button className="github-button">
        <a href={`https://github.com/your-username`} target="_blank" rel="noreferrer">
          <FaGithub /> Follow me on GitHub ({githubFollowers})
        </a>
      </button>
      <button className="linkedin-button">
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <FaLinkedin /> Connect with me on LinkedIn
        </a>
      </button>
      <button className="instagram-button" rel="noreferrer">
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          <FaInstagram /> Follow me on Instagram
        </a>
      </button>
      <button className="tiktok-button" rel="noreferrer">
        <a href={tiktokUrl} target="_blank" rel="noreferrer">
          <FaTiktok /> Follow me on TikTok ({tiktokFollowers})
        </a>
      </button>
    </div>
  );
};

export default HomeButton;