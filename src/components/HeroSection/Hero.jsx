import React from "react";
import "../HeroSection/Hero.scss";
import { Logo1, LogoSmall } from "../SVGs/svgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="logo">
          <Logo1 />
        </div>
        <div className="small-logo">
          <LogoSmall />
        </div>
        <div className="contact">
          <a
            href="https://wa.me/971524478011"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-btn contact-button">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ width: "20px", height: "20px" }}
              />
              <p className="chat">Chat</p>
              <p className="phone"> +971524478011</p>
            </button>
          </a>
        </div>
      </nav>

      <div className="main-hero">
        <div className="hero-title">
          <h5 className="hero-small-title">Creating unforgettable experience</h5>
          <h2 className="hero-big-title">Turn Aspirations to Reality</h2>

          <div className="hero-links">
          <button className="about-link">
            <Link to="/about">About us</Link>
          </button>

          <button className="portal-link">
            <Link to="/portal">Visa portal</Link>
          </button>
          </div>

         
        </div>

        <div className="hero-navigation">
          <div className="pagination">
            <div className="dot yellow-dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <div className="navigate">
            <div className="arrow left">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="arrow right">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
