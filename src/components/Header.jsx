import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/images/screenshot.png"; // Adjust the path
import "../styles/Header.css";

const Header = () => {
  const themeToggleRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
      themeToggleRef.current.textContent = "☀️";
    } else {
      themeToggleRef.current.textContent = "🌙";
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    const body = document.body;
    const isLight = body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
    themeToggleRef.current.textContent = isLight ? "☀️" : "🌙";
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".sidebar") && !e.target.closest(".hamburger")) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
  let scrolledOnce = false;

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const heroSection = document.getElementById("hero");

    // If hero exists, prevent hiding while inside hero section
    if (heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      if (currentScroll < heroBottom) {
        setVisible(true);
        return;
      }
    }

    if (!scrolledOnce && currentScroll === 0) {
      return; // don't hide header before first scroll
    }

    scrolledOnce = true;

    if (currentScroll > lastScroll.current) {
      setVisible(false); // scrolling down
    } else {
      setVisible(true); // scrolling up
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }

    lastScroll.current = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <header className={`main-header ${visible ? "visible" : "hidden"}`}>
        <div className="header-container">
          <div className="header-left">
            <div className="logo">
              <img src={logo} alt="Logo" className="header-logo" />
              <span className="logo-text">𝕹𝖎𝖘𝖍𝖆𝖓𝖙 𝕲𝖆𝖚𝖙𝖆𝖒</span>
            </div>

            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
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
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              🌙
            </button>
          </div>
        </div>
      </header>

      <div
        className={`sidebar-overlay${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden={menuOpen ? "false" : "true"}
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
