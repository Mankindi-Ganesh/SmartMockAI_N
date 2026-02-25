import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">CAREER GURU</h1>

          <h2 className="hero-heading">
            Find Your Dream Job Today
          </h2>

          <p className="hero-subtitle">
            Connecting Talent with Opportunities Across the Nation for Every Skill Level
          </p>

          <div className="hero-description">
            <p>
              Explore a vast array of job listings in diverse industries. Whether you're a seasoned
              professional or just starting out, find the perfect role to advance your career.
              Our platform makes job searching easy and efficient, bringing you closer to your next big opportunity.
            </p>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">Find Jobs</button>
            <button className="secondary-btn">Explore Companies</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;