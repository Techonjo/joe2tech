import React, { useState, useEffect } from "react";
import "./hero.css";

const images = [
  "./src/assets/bac1.jpg",
  "./src/assets/bac2.jpg",
  "./src/assets/bac3.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="dark-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Joe2tech - Your Trusted ICT Partner</h1>
        <p className="hero-subtitle">
          We specialize in computer repairs, modern website development, and ICT
          consulting to help you succeed in the digital world.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">
            Contact Us Now
          </a>
          <a href="#contact" className="btn btn-secondary">
            See Our Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
