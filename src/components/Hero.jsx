import React from 'react';
import "../styles/Hero.css";
import photo from '../assets/images/photo.png';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img src={photo} alt="Nishant Gautam" className="profile-img" />
        </div>

        <div className="hero-right">
          <h1 className="hero-name">Hi, I'm <span>Nishant Gautam</span></h1>

          <div className="hero-info-wrapper">
            <p className="hero-info">Age: 19</p>
            <p className="hero-info">Full Stack Developer</p>
            <p className="hero-info">
              I specialize in building fast, responsive, and visually appealing websites and web apps.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="#about" className="btn primary-btn">View Profile</a>
            <a 
              href="../assets/resume/NishantGautam.docx" 
              className="btn outline-btn"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
