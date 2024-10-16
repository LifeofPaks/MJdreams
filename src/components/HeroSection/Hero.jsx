import React from "react";
import "../HeroSection/Hero.scss";

const Hero = () => {
  return (
    <section class="hero">
      <nav class="nav">
        <div class="logo"></div>
        <div class="contact">
          <a href="#about-us.html" class="about-us-link">
            About us
          </a>

          <button class="primary-btn">+971524478011</button>
        </div>
      </nav>

      <div class="main-hero">
        <div class="hero-title">
          <h5 class="hero-small-title">Creating unforgettable experience</h5>
          <h2 class="hero-big-title">Turn Aspirations to Reality</h2>

          <button class="primary-btn"></button>
        </div>

        <div class="hero-navigation">
          <div class="pagination">
            <div class="dot yellow-dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>

          <div class="navigate">
            <div class="left"></div>
            <div class="right"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
