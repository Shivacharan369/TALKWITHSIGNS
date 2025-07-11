import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>EMPOWERING COMMUNICATION</h1>
      <p>
        Our project helps bridge the communication gap for the deaf and
        hard-of-hearing by translating Indian Sign Language (ISL) into text and
        speech in real-time.
      </p>
      <Link to="/resources" className="explore-btn">Explore</Link>
    </section>
  );
};

export default HeroSection;
