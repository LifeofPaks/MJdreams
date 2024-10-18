import React from "react";
import "../HeroSection/Hero.scss";
import { Logo1, LogoSmall } from "../SVGs/svgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section class="hero">
      <nav class="nav">
        <div class="logo">
          <Logo1 />
        </div>
        <div className="small-logo">
          <LogoSmall />
        </div>
        <div class="contact">
          <button class="primary-btn contact-button">
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ width: "20px", height: "20px" }}
            />
            <p className="chat">Chat</p>
            <p className="phone"> +971524478011</p>
          </button>
        </div>
      </nav>

      <div class="main-hero">
        <div class="hero-title">
          <h5 class="hero-small-title">Creating unforgettable experience</h5>
          <h2 class="hero-big-title">Turn Aspirations to Reality</h2>

          <button class="about-link">
          <Link to="/about">About us</Link>
          </button>
        </div>

        <div class="hero-navigation">
          <div class="pagination">
            <div class="dot yellow-dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>

          <div class="navigate">
            <div class="arrow left">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div class="arrow right">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
