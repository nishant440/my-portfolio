import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [likedProjects, setLikedProjects] = useState([]);
  const [ratings, setRatings] = useState({});

  const projectList = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive and elegant portfolio built with React.",
      github: "https://github.com/username/portfolio",
      image: "https://source.unsplash.com/400x250/?portfolio,website",
    },
    {
      id: 2,
      title: "Chat App",
      description: "Real-time chat application using WebSockets.",
      github: "https://github.com/username/chat-app",
      image: "https://source.unsplash.com/400x250/?chat,app",
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "A full-stack blog platform with user authentication.",
      github: "https://github.com/username/blog-platform",
      image: "https://source.unsplash.com/400x250/?blog,platform",
    },
    {
      id: 4,
      title: "Task Manager",
      description: "Manage and organize your daily tasks efficiently.",
      github: "https://github.com/username/task-manager",
      image: "https://source.unsplash.com/400x250/?tasks,productivity",
    },
    {
      id: 5,
      title: "E-commerce Site",
      description: "An e-commerce site with shopping cart and payments.",
      github: "https://github.com/username/e-commerce",
      image: "https://source.unsplash.com/400x250/?ecommerce,shopping",
    },
  ];

  const toggleLike = (id) => {
    setLikedProjects((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleRating = (projectId, value) => {
    setRatings((prev) => ({ ...prev, [projectId]: value }));
  };

  const visibleProjects = showAll ? projectList : projectList.slice(0, 3);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">🚀 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬</h2>

      <div className="projects-grid">
        {visibleProjects.map(({ id, title, description, github, image }) => (
          <div key={id} className="project-card">
            <div className="project-img-container">
              <img src={image} alt={title} className="project-img" />
            </div>

            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View GitHub Repo
              </a>

              <div className="rating-like-box">
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      className={`star ${
                        ratings[id] >= value ? "rated" : ""
                      }`}
                      onClick={() => handleRating(id, value)}
                    >
                      {ratings[id] >= value ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <button
                  className={`heart-btn ${
                    likedProjects.includes(id) ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(id)}
                  aria-label="Like"
                >
                  ❤️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-toggle">
        <button
          className="toggle-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
