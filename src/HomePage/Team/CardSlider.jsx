import React, { useEffect, useRef, useState } from "react";
import "./CardSlider.css";
import joeImage from "../../assets/joseph.jpg";
import amehImage from "../../assets/oche.jpg";
import piuImage from "../../assets/pius.jpg";
import katmiImage from "../../assets/katmit.png";
import abdulImage from "../../assets/abdul.jpg";

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
  const [activeCard, setActiveCard] = useState(null);

  const scrollByAmount = 300;

  const scrollLeft = () => {
    setIsPaused(true);
    containerRef.current.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    setIsPaused(true);
    containerRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  // Auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    let scrollSpeed = 0.5;
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

  const toggleRole = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Meet Our Team</h2>
      <div
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="carousel-btn prev-btn" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="team-container" ref={containerRef}>
          {teamMembers.map((member, index) => (
            <div
              className={`team-card ${activeCard === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleRole(index)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="name-bar">
                <h3>{member.name}</h3>
              </div>
              {activeCard === index && (
                <div className="role-box">
                  <p>{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="carousel-btn next-btn" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default CardSlider;
