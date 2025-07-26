import Card from "./Card";
import "./card.css"; // External CSS
import cardImage1 from "../../assets/repairicon.png";
import cardImage2 from "./assets/webicon.png";
import cardImage3 from "../../assets/ictconsult.png";
import cardImage4 from "../../assets/graphicicon.png";

const services = [
  {
    image: cardImage1,
    title: "Computer Repairs & Maintenance",
    tagline:
      "From quick fixes to advanced repairs, we keep your devices running smoothly.",
  },
  {
    image: cardImage2,
    title: "Website Design & Development",
    tagline:
      "We create responsive, modern, and user-friendly websites tailored to your goals.",
  },
  {
    image: cardImage3,
    title: "ICT Consulting & Training",
    tagline: "Get expert advice on technology strategies that drive results.",
  },
  {
    image: cardImage4,
    title: "Graphic Design & Branding",
    tagline:
      "We design stunning graphics and branding solutions that make your business stand out.",
  },
];

function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="service-title">Our Core Services</h2>
      <p className="service-description">
        We provide end to end ICT solutions designed to meet your business and
        personal tech needs.
      </p>
      <div className="card-container">
        {services.map((service, index) => (
          <Card
            key={index}
            image={service.image}
            title={service.title}
            tagline={service.tagline}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
