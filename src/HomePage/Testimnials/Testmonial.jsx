import { useRef } from "react";
import "./Testimonial.css"; // External CSS

const testimonies = [
  {
    id: 1,
    comment:
      "Joe2Tech is simply the best! They delivered a stunning website within days.",
    name: "Mr. Johnson, Entrepreneur",
    date: new Date("2024-02-15"),
  },
  {
    id: 2,
    comment:
      "Fast service and very professional. My laptop is running like a new one.",
    name: "Mrs. Angela",
    date: new Date("2024-03-22"),
  },
  {
    id: 3,
    comment:
      "They built a professional website that brought us more customers.",
    name: "Exotic Curtains",
    date: new Date("2024-05-10"),
  },
  {
    id: 4,
    comment:
      "Fast delivery and a clean design. Our online presence improved overnight.",
    name: "OchaTopUp",
    date: new Date("2024-07-08"),
  },
  {
    id: 5,
    comment: "Best web developer we’ve ever worked with!",
    name: "SmartTech Enterprises",
    date: new Date("2024-11-02"),
  },
];

function Testimonial() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="testimony-background">
      <div className="testimony-text">
        <h2 className="testimony-title">What Clients Say About Us</h2>
        <h2 className="testimony-subtitle">
          Our clients’ satisfaction drives our success. Here’s what they have to
          say about Joe2Tech.
        </h2>
      </div>

      {/* Scroll Buttons */}
      <div className="scroll-buttons">
        <button className="leftbtn" onClick={scrollLeft}>&#8592;</button>
        <button className="rightbtn" onClick={scrollRight}>&#8594;</button>
      </div>

      <div className="testimony-container" ref={containerRef}>
        {testimonies.map((item) => (
          <div className="testimony-card" key={item.id}>
            <div className="portfolio-content">
              <p>{item.comment}</p>
              <p>
                <strong>{item.name}</strong>
              </p>
              <p>
                {item.date.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
