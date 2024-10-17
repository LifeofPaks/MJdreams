import React from "react";
import "./About.scss";
import Footer from "../../components/FooterSection/Footer";
import close from "../../assets/close.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <section className="about">
        <a href="/" className="back-button">
        <FontAwesomeIcon icon={faLeftLong} className="back-icon"/>
        GO BACK
        </a>
        <div className="about-container">
          <div className="about-image"></div>
          <div className="about-us">
            <p className="about-text">
              Welcome to MJ Dream Travel & Tourism LLC, where your travel
              aspirations become reality. With a passion for creating
              unforgettable experiences, we specialize in a comprehensive range
              of services tailored to meet your every need. From worldwide
              ticket reservations and luxury hotel bookings to bespoke holiday
              packages and visa assistance for the UAE, US, Canada, and Schengen
              countries, we ensure your journey is seamless from start to
              finish.
            </p>
            <p className="about-text">
              Our expertise extends to luxury cruises, exciting excursions for
              schools and communities, and specialized Hajj and Umrah services.
              We also offer exclusive meet & assist services and comprehensive
              travel insurance for peace of mind.
            </p>
            <p className="about-text">
              Explore the wonders of the UAE with our curated inbound and
              outbound tours, featuring iconic attractions like the Burj
              Khalifa, Dubai Frame, and Wild Wadi, alongside thrilling
              adventures such as desert safaris and helicopter tours. Whether
              you’re planning a family getaway, a corporate event, or a private
              group excursion, MJ Dream Travel & Tourism LLC is here to make
              your dream trip a reality.
            </p>
            <p>
              Let us take you on a journey where every moment is a treasured
              memory. Your adventure starts with us!
            </p>
          </div>

          <div className="close">
            <img src={close} alt="close-icon" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
