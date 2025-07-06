import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/images/screenshot.png";
import "../styles/Header.css";

const Header = () => {
  const themeToggleRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    themeToggleRef.current.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    const isLight = body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
    themeToggleRef.current.textContent = isLight ? "☀️" : "🌙";
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".sidebar") && !e.target.closest(".hamburger")) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  

  return (
    <>
      <header className={`main-header ${visible ? "visible" : "hidden"}`}>
        <div className="header-container">
          <div className="header-left">
            <div className="logo">
              <img src={logo} alt="Logo" className="header-logo" />
              <span className="logo-text">𝓝𝓲𝓼𝓱𝓪𝓷𝓽 𝓖𝓪𝓾𝓽𝓪𝓶</span>
            </div>

            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className="navbar">
            <ul className="nav-menu">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#Certificate">Certificate</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="header-right">
            <button
              className="theme-toggle"
              ref={themeToggleRef}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              🌙
            </button>
          </div>
        </div>
      </header>

      <div
        className={`sidebar-overlay${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside className={`sidebar${menuOpen ? " open" : ""}`} role="navigation">
        <nav>
          <ul>
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#Certificate" onClick={closeMenu}>Certificate</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>

        <div className="sidebar-theme-toggle">
          <button
            className="theme-toggle"
            ref={themeToggleRef}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            🌙
          </button>
        </div>
      </aside>
    </>
  );
};

export default Header;