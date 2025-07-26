import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-left">
        <h2>Why Joe2Tech ?</h2>
        <p>
          Our goal is to deliver exceptional technology services with a focus on
          quality, affordability, and customer satisfaction.
        </p>
        <div className="image-wrapper">
          <img
            src="./src/assets/bac2.jpg"
            alt="Business meeting"
            className="why-image"
          />
        </div>
      </div>

      <div className="why-right">
        <div className="info-card">
          <span className="icon">👨‍💻</span>
          <div>
            <h3>Experienced ICT Professionals</h3>
            <p>
              Our team consists of highly skilled and seasoned ICT professionals
              who bring years of expertise to every project, ensuring innovative
              solutions and unmatched service quality
            </p>
          </div>
        </div>

        <div className="info-card">
          <span className="icon">💳</span>
          <div>
            <h3>Affordable, Transparent Pricing</h3>
            <p>
              We believe in offering premium ICT services at prices that are
              both fair and transparent, with no hidden fees—giving you full
              value for your investment.”
            </p>
          </div>
        </div>

        <div className="info-card">
          <span className="icon">⏱️</span>
          <div>
            <h3> Fast Turnaround Time</h3>
            <p>
              We understand the importance of time in the digital world, which
              is why we focus on delivering high-quality solutions quickly and
              efficiently without compromising on excellence.
            </p>
          </div>
        </div>

        <div className="info-card">
          <span className="icon">🤝</span>
          <div>
            <h3> 24/7 Support and Consultation</h3>
            <p>
              Our dedicated support team is available round-the-clock to assist
              you with technical issues, provide guidance, and ensure your
              systems run smoothly at all times
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
