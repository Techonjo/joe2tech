import Card from "./Card";
import "./card.css"; // External CSS

const services = [
  {
    image: "./src/assets/repairicon.png",
    title: "Computer Repairs & Maintenance",
    tagline:
      "From quick fixes to advanced repairs, we keep your devices running smoothly.",
  },
  {
    image: "./src/assets/webicon.png",
    title: "Website Design & Development",
    tagline:
      "We create responsive, modern, and user-friendly websites tailored to your goals.",
  },
  {
    image: "./src/assets/ictconsult.png",
    title: "ICT Consulting & Training",
    tagline: "Get expert advice on technology strategies that drive results.",
  },
  {
    image: "./src/assets/graphicicon.png",
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
