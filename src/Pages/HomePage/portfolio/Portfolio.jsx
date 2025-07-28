import "./portfolio.css";
import image1 from "../../../assets/web.png";
import image2 from "../../../assets/darshboard.webp";
import image3 from "../../../assets/web.png";

const portfolioItems = [
  {
    id: 1,
    title: "SKYDASH",
    description: "Redesigning the dashboard of SkyDash to improve usability.",
    image: image1, 
    link: "https://josephonoja.netlify.app/",
  },
  {
    id: 2,
    title: "PROJECT B",
    description:
      "A modern responsive website redesign for better user experience.",
    image: image2,
    link: "/portfolio/project-b",
  },
  {
    id: 3,
    title: "PROJECT C",
    description: "Building a new e-commerce UI/UX experience.",
    image: image3,
    link: "https://josephonoja.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Our Work</h2>
      <p className="portfolio-subtitle">
        We take pride in every project we deliver. Here are some of our notable
        works and success stories.
      </p>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="portfolio-image"
            />
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="view-case">
                View Case
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-btn-container">
        <a href="/portfolio" className="view-all-btn">
          View Full Portfolio
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
