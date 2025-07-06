import React from 'react';
import '../styles/Aboutus.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-heading">👋 Hello, I'm Nishant Gautam</h2>

          <p className="about-description">
            I'm a passionate <span className="highlight">Full-Stack Web Developer</span> from Mathura, UP,
            currently pursuing my <span className="highlight">BCA at GLA University</span>. I specialize in
            developing user-friendly and high-performance web applications.
          </p>

          <p className="about-description">
            My curiosity and dedication to learning new technologies help me build clean, modern, and scalable
            solutions.
          </p>

          <div className="section-block">
            <h3 className="section-title">🚀 Quick Facts</h3>
            <ul className="facts-list">
              <li>🎓 Studying BCA at GLA University</li>
              <li>🌍 Based in Mathura, Uttar Pradesh</li>
              <li>🧠 Constant learner and problem solver</li>
              <li>🛠️ Contributor to Open Source Projects</li>
            </ul>
          </div>

          <div className="section-block">
            <h3 className="section-title">💻 Tech Stack</h3>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Git</span>
            </div>
          </div>

          <div className="section-block">
            <h3 className="section-title">📬 Let's Connect</h3>
            <ul className="contact-list">
              <li>
                <strong>📱 Phone:</strong>{' '}
                <span className="contact-link">+91 9368070638</span>
              </li>
              <li>
                <strong>📧 Email:</strong>{' '}
                <a href="mailto:gautamnishant119@gmail.com" className="contact-link">
                  gautamnishant119@gmail.com
                </a>
              </li>
              <li>
                <strong>🔗 LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/nishant-gautam-39b529329/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  Nishant Gautam
                </a>
              </li>
              <li>
                <strong>📸 Instagram:</strong>{' '}
                <a
                  href="https://www.instagram.com/_itsme_nishant_/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  _itsme_nishant_
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
