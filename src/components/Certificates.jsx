import React, { useState } from "react";
import cert1 from "../assets/certificates/Certificate1.jpg";
import cert2 from "../assets/certificates/Certificate2.jpg";
import cert3 from "../assets/certificates/Certificate3.jpg";
import cert4 from "../assets/certificates/Certificate4.jpg";
import cert5 from "../assets/certificates/Certificate5.jpg";
import cert6 from "../assets/certificates/Certificate6.jpg";
import cert7 from "../assets/certificates/Certificate7.jpg";
import cert8 from "../assets/certificates/Certificate8.png";
import "../styles/Certificates.css";

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [liked, setLiked] = useState(Array(6).fill(false));

  const certificates = [
    { src: cert1, title: "Hackerthon", issuer: "GLA University", issuedDate: "Nov 2024" },
    { src: cert2, title: "Java Programming Course", issuer: "Oracle", issuedDate: "September 2024" },
    { src: cert3, title: "Learning Advance Concept of HTML and CSS", issuer: "Learn HTML", issuedDate: "December 2023" },
    { src: cert4, title: "Hackermania 2025", issuer: "GLA UNiversity", issuedDate: "March 2025" },
    { src: cert5, title: "Pariksha Pe Charcha", issuer: "Minestry of EDUCATION", issuedDate: "November 2023" },
    { src: cert6, title: "MongoDB Indexes", issuer: "MongoDB", issuedDate: "July 2024" },
     { src: cert7, title: "MongoDB CRUD Operations", issuer: "MongoDB", issuedDate: "July 2024" },
      { src: cert8, title: "Coding Competition", issuer: "OnlineAlgoWars", issuedDate: "January 2025" },
  ];

  const handleLike = (index) => {
    if (!liked[index]) {
      const updatedLikes = [...liked];
      updatedLikes[index] = true;
      setLiked(updatedLikes);
    }
  };

  const visibleCerts = showAll ? certificates : certificates.slice(0, 4);

  return (
    <section className="certificates-section" id="Certificate">
      <h2 className="cert-heading">✨𝐌𝐲 𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬</h2>
      <div className="certificates-grid">
        {visibleCerts.map((cert, idx) => (
          <div className="certificate-card" key={idx}>
            <div className="certificate-img-container">
              <img
                src={cert.src}
                alt={cert.title}
                onClick={() => setFullscreenImage(cert.src)}
              />
              <div className="certificate-actions">
                <button
                  className={`action-button like ${liked[idx] ? "liked" : ""}`}
                  onClick={() => handleLike(idx)}
                  disabled={liked[idx]}
                  title="Celebrate"
                >
                  💖
                </button>
                <button
                  className="action-button fullscreen"
                  onClick={() => setFullscreenImage(cert.src)}
                  title="View Fullscreen"
                >
                  ⛶
                </button>
                <a
                  className="action-button download"
                  href={cert.src}
                  download
                  title="Download Certificate"
                >
                  ⬇
                </a>
              </div>
            </div>
            <div className="certificate-details">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.issuedDate}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="certificates-toggle">
        <button
          className="toggle-button"
          onClick={() => setShowAll(!showAll)}
          title={showAll ? "Show Less" : "Show More"}
        >
          {showAll ? "Hide Some ▲" : "Show More ▼"}
        </button>
      </div>

      {fullscreenImage && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="fullscreen-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setFullscreenImage(null)}>
              ×
            </button>
            <img src={fullscreenImage} alt="Fullscreen Certificate" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
