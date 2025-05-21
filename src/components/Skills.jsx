import React from "react";
import "../styles/Skills.css";

import htmlImg from "../assets/Languages/html.png";
import cssImg from "../assets/Languages/css.png";
import jsImg from "../assets/Languages/js.png";
import reactImg from "../assets/Languages/react.png";
import nodeImg from "../assets/Languages/nodejs.png";
import mongoImg from "../assets/Languages/mongodb.png";
import javaImg from "../assets/Languages/Java.png";
import gitImg from "../assets/Languages/git.png";
import pythonImg from "../assets/Languages/python.png";


const categories = {
  "𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝": [
    { name: "HTML", image: htmlImg },
    { name: "CSS", image: cssImg },
    { name: "JavaScript", image: jsImg },
    { name: "React", image: reactImg },
  ],
  "𝐓𝐨𝐨𝐥𝐬 & 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐂𝐨𝐧𝐭𝐫𝐨𝐥": [
    { name: "Git", image: gitImg }
  ],
  "𝐁𝐚𝐜𝐤𝐞𝐧𝐝": [
    { name: "Node.js", image: nodeImg },
    { name: "Python", image: pythonImg },
    { name: "Java", image: javaImg },
  ],
  "𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞": [
    { name: "MongoDB", image: mongoImg }
  ]
};


const Skills = () => {
  return (
    <section className="skills-section" id="Skills">
      <h2 className="skills-heading">⚙️ 𝐌𝐲 𝐒𝐤𝐢𝐥𝐥𝐬</h2>

      <div className="skills-grid">
        {Object.entries(categories).map(([category, skills]) => (
  <div className="skills-category" key={category}>
    <h3 className="category-title">{category}</h3>
    <div
      className={`category-skills ${skills.length <= 2 ? "center-skills" : ""}`}
    >
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-image-container">
            <img src={skill.image} alt={skill.name} />
          </div>
          <h4>{skill.name}</h4>
        </div>
      ))}
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default Skills;
