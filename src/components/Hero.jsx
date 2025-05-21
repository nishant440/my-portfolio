import React from 'react';
import "../styles/Hero.css";
import photo from '../assets/images/photo.png';




const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img src={photo} alt="Nishant" className="profile-img" />
        </div>

        <div className="hero-right">
          <h1 className="hero-name">𝓗𝓲, 𝓘'𝓶 𝓝𝓲𝓼𝓱𝓪𝓷𝓽 𝓖𝓪𝓾𝓽𝓪𝓶</h1>

          <div className="hero-info-wrapper">
            <p className="hero-info">Age: 19</p>
            <p className="hero-info">Full Stack developer</p>
            <p className="hero-info">
              I love creating fast, responsive, and visually appealing websites.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="#about" className="btn hover-btn">𝐕𝐢𝐞𝐰 𝐌𝐲 𝐏𝐫𝐨𝐟𝐢𝐥𝐞</a>
            <a 
              href="my-portfolio/src/assets/resume/NishantGautam.docx" 
              className="btn hover-btn"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐑𝐞𝐬𝐮𝐦𝐞
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
