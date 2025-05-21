import React from 'react';
import '../styles/Footer.css'; // Make sure the path matches your project

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Developer Credit */}
        <p className="footer-text">© {new Date().getFullYear()} Nishant Gautam. All rights reserved.</p>

        {/* Quick Links */}
        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#Certificate">Certificate</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social Media Icons */}
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/nishant-gautam" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:gautamnishant119@gmail.com">Email</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
