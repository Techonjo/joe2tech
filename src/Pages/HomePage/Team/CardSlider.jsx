import React, { useEffect, useRef, useState } from "react";
import "./CardSlider.css";
import joeImage from "../../../assets/joseph.jpg";
import amehImage from "../../../assets/oche.jpg";
import piuImage from "../../../assets/pius.jpg";
import katmiImage from "../../../assets/katmit.png";
import abdulImage from "../../../assets/abdul.jpg";

const teamMembers = [
  {
    name: "Onoja Joseph",
    role: "Front End Developer & IT Consultant",
    image: joeImage,
  },
  {
    name: "Joe Ameh",
    role: "Computer engineering, web development, videography, IT Specialist",
    image: amehImage,
  },
  {
    name: "Davou Pius Gyang",
    role: "Graphics Designer, Photography & UI/UX",
    image: piuImage,
  },
  {
    name: "Albert Katmi",
    role: "Project Manager & Data Analysis",
    image: katmiImage,
  },
  {
    name: "Abdul Muqueet",
    role: "Mobile App & Web developer",
    image: abdulImage,
  },
];

function CardSlider() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollByAmount = 300;

  const scrollLeftFunc = () => {
    setIsPaused(true);
    containerRef.current.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollRightFunc = () => {
    setIsPaused(true);
    containerRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  // Auto-scroll logic
  useEffect(() => {
    const container = containerRef.current;
    let scrollSpeed = 0.5; // pixels per frame
    let animationFrameId;

    const autoScroll = () => {
      if (!isPaused && container) {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0 });
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Swipe/Touch support
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // multiplier for faster scroll
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setStartX(0);
    setTimeout(() => setIsPaused(false), 1500); // resume auto-scroll after delay
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Meet Our Team</h2>
      <div
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="carousel-btn prev-btn" onClick={scrollLeftFunc}>
          &#10094;
        </button>

        <div
          className="team-container"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="overlay">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn next-btn" onClick={scrollRightFunc}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default CardSlider;
