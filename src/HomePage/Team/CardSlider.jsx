import React, { useEffect, useRef } from "react";
import "./CardSlider.css";

const teamMembers = [
  {
    name: "Onoja Joseph",
    role: "Front End Developer & IT Consultant",
    image: "./src/assets/joseph.jpg",
  },
  {
    name: "Joe Ameh",
    role: "Computer engineering, web development, videography, IT Specialist",
    image: "./src/assets/oche.jpg",
  },
  {
    name: "Davou Pius Gyang",
    role: "Graphics Designer, Phography & UI/UX",
    image: "./src/assets/pius.jpg",
  },
  {
    name: "Albert Katmi",
    role: "Project Manager & Data Analysis",
    image: "./src/assets/katmit.png",
  },
  {
    name: "Abdul Muqueet",
    role: "Mobile App & Web developer",
    image: "./src/assets/abdul.jpg",
  },
];

function CardSlider() {
  const containerRef = useRef(null);

  const scrollByAmount = 300; // how much to scroll per click

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (!container) return;

      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 30);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Meet Our Team</h2>
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="team-container" ref={containerRef}>
          {[...teamMembers, ...teamMembers].map((member, index) => (
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

        <button className="carousel-btn next-btn" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default CardSlider;
