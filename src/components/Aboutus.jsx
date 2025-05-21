import React from 'react';
import '../styles/Aboutus.css';
import devAnimation from '../assets/Animation/Aboutus.png';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-heading">👋𝐇𝐞𝐥𝐥𝐨 𝐓𝐡𝐞𝐫𝐞, 𝐈'𝐦 𝐍𝐢𝐬𝐡𝐚𝐧𝐭 𝐆𝐚𝐮𝐭𝐚𝐦</h2>
            <p className="about-text">
              I'm a passionate <span className="highlight">Full-Stack Web Developer</span> from Mathura, UP, currently pursuing my <span className="highlight">BCA at GLA University</span>.
              I specialize in building beautiful, user-friendly, and performant websites and applications.
              <br /><br />
              My curiosity and commitment to learning allow me to adapt quickly to new tools and frameworks.
            </p>

            <div className="about-section-block">
              <h3 className="block-heading">🌟 𝐁𝐞𝐲𝐨𝐧𝐝 𝐭𝐡𝐞 𝐂𝐨𝐝𝐞</h3>
              <p className="interests-text">
                When I’m not coding, you’ll find me diving into open-source projects, reading about the latest tech trends,
                or enjoying a refreshing bike ride. I believe in continuous growth – both professionally and personally.
              </p>
            </div>

            <div className="contact-info">
              <h3 className="contact-heading">📬 𝐋𝐞𝐭’𝐬 𝐂𝐨𝐧𝐧𝐞𝐜𝐭</h3>
              <ul className="contact-list">
                <li>📱 Phone: <span className="contact-link">+91 9368070638</span></li>
                <li>📧 Email: <span className="contact-link"><a href="mailto:gautamnishant119@gmail.com">gautamnishant119@gmail.com</a></span></li>
                <li>🔗 LinkedIn: <span className="contact-link"><a href="https://www.linkedin.com/in/nishant-gautam-39b529329/" target="_blank" rel="noopener noreferrer">Nishant Gautam</a></span></li>
                <li>📸 Instagram: <span className="contact-link"><a href="https://www.instagram.com/_itsme_nishant_/" target="_blank" rel="noopener noreferrer">_itsme_nishant_</a></span></li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <img src={devAnimation} alt="Developer at work" className="dev-gif glowing-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
