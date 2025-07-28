import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

import joeImage from "../assets/joseph.jpg";
import amehImage from "../assets/oche.jpg";
import piuImage from "../assets/pius.jpg";
import katmiImage from "../assets/katmit.png";
import abdulImage from "../assets/abdul.jpg";
import bac1 from "../assets/bac1.jpg";

const teamMembers = [
  {
    name: "Onoja Joseph",
    role: "Front End Developer & IT Consultant",
    image: joeImage,
    facebook: "https://facebook.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Joe Ameh",
    role: "Computer Engineering & IT Specialist",
    image: amehImage,
    facebook: "https://facebook.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Davou Pius Gyang",
    role: "Graphics Designer & UI/UX",
    image: piuImage,
    facebook: "https://facebook.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Albert Katmi",
    role: "Project Manager & Data Analyst",
    image: katmiImage,
    facebook: "https://facebook.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Abdul Muqueet",
    role: "Mobile App & Web Developer",
    image: abdulImage,
    facebook: "https://facebook.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
];

function About() {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  // Counter animation
  useEffect(() => {
    let projectCount = 0;
    let clientCount = 0;

    const projectInterval = setInterval(() => {
      projectCount += 5;
      if (projectCount >= 300) {
        projectCount = 300;
        clearInterval(projectInterval);
      }
      setProjects(projectCount);
    }, 30);

    const clientInterval = setInterval(() => {
      clientCount += 3;
      if (clientCount >= 180) {
        clientCount = 180;
        clearInterval(clientInterval);
      }
      setClients(clientCount);
    }, 30);

    return () => {
      clearInterval(projectInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-content">
          <h1>
            Transforming businesses with innovative solutions and world-class IT
            expertise.
          </h1>
          <div className="stats">
            <div className="stat-item">
              <h2>{projects}+</h2>
              <p>Projects & Collaborations</p>
            </div>
            <div className="stat-item">
              <h2>{clients}+</h2>
              <p>Clients and Products Improved</p>
            </div>
          </div>
          <div className="about-image">
            <img src={bac1} alt="Team Work" />
          </div>
        </div>
      </section>

      {/* Joe2Tech Story as Two Cards */}
      <section className="joe2tech-section">
        <div className="joe2tech-card">
          <h2>About Joe2Tech</h2>
          <p>
            Joe2Tech is a forward-thinking IT company passionate about creating
            cutting-edge solutions for businesses and individuals. Our expertise
            spans web development, mobile applications, IT consultancy, and
            creative design.
          </p>
          <p>
            Since our inception, we have successfully completed over {projects}+
            projects and enhanced {clients}+ client products across industries.
          </p>
        </div>

        <div className="joe2tech-card">
          <h2>Our Mission & Vision</h2>
          <p>
            <strong>Mission:</strong> To deliver high-quality, innovative, and
            scalable IT solutions that empower businesses to thrive in a
            digital-first world.
          </p>
          <p>
            <strong>Vision:</strong> To be the go-to technology partner for
            businesses globally, driving innovation and excellence in all we do.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="team-title">Meet Our Amazing Team</h2>
        <p className="team-subtitle">
          Our talented professionals bring expertise, creativity, and dedication
          to every project we undertake.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="team-socials">
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Stay Connected with Joe2Tech</h2>
        <p>
          Subscribe to our newsletter for weekly updates, insights, and tips.
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>

        <div className="social-links">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
