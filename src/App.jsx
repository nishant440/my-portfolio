import React, { useEffect, useRef } from "react";
import './styles/style.css'; // Adjust the path to your main styles
import Hero from "./components/Hero"; // Ensure this path is correct
import Aboutus from "./components/Aboutus"; // Ensure this path is correct
import Certificates from "./components/Certificates"; // Ensure this path is correct
import Projects from "./components/Projects"; // Ensure this path is correct
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";



function App() {
  
  return (
      
    <>
  

    <Header />

    <Hero />
      <Aboutus />
      <Skills />
      <Certificates />
      <Projects /> {/* Add Projects component here */}
      <Contact />

      <Footer />
    </>
  );
}

export default App;
