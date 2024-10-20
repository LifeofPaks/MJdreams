import React from "react";
import "../ServicesSection/Services.scss";

import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.png";
import g7 from "../../assets/g7.png";
import g8 from "../../assets/g8.png";

const Services = () => {
  return (
    <section className="services set-width">
      <h1 className="big-text yellow">SERVICES</h1>
      <div className="container">
        <div className="title-container">
          <div className="title-text-container">
            <p className="service-title">
              Every <span>Moment</span> is a Treasured <span>Memory</span>
            </p>
            <p className="text services-text">
              With a passion for creation unforgettable experience, we
              specialize in a comprehensive range of services tailored to meet
              your every need
            </p>
          </div>
        </div>

        <div className="image-gallery ">
          <div className="g1">
            <div className="img-wrapper">
              <div className="overlay"></div>
              <h3 className="location">Worldwide Ticket Reservation
              </h3>
              <img className="m1" src={g1} alt="services-img" />
            </div>

            <div className="img-wrapper">
              <div className="overlay"></div>
              <h3 className="location">Holiday Packages
              </h3>
              <img className="m2" src={g2} alt="services-img" />
            </div>
          </div>
          <div className="g2">
            <div className="g2-1">
              <div className="img-wrapper">
                <div className="overlay"></div>
                <h3 className="location">  ⁠⁠UAE Visa Service
                </h3>
                <img className="m3" src={g3} alt="services-img" />
              </div>
              <div className="g2-1-1">
                <div className="img-wrapper">
                  <div className="overlay"></div>
                  <h3 className="location">⁠⁠Limousine Service
                  </h3>
                  <img className="m4" src={g4} alt="services-img" />
                </div>

                <div className="img-wrapper">
                  <div className="overlay"></div>
                  <h3 className="location"> ⁠⁠Luxury Cruises
                  </h3>
                  <img className="m5" src={g5} alt="services-img" />
                </div>
              </div>
            </div>
            <div className="g2-2">
              <div className="img-wrapper">
                <div className="overlay"></div>
                <h3 className="location">Meet & Assst Service
                </h3>
                <img className="m6" src={g6} alt="services-img" />
              </div>
            </div>
          </div>
          <div className="g3">
            <div className="img-wrapper">
              <div className="overlay"></div>
              <h3 className="location">Airport Transfers 
              </h3>
              <img className="m7" src={g7} alt="services-img" />
            </div>

            <div className="img-wrapper">
              <div className="overlay"></div>
              <h3 className="location">Conferences Events & Conventions 
              </h3>
              <img className="m8" src={g8} alt="services-img" />
            </div>
          </div>
        </div>
        <div className="image-gallery-small">
          <div className="img-wrapper">
            <div className="overlay"></div>
            <h3 className="location">Worldwide Ticket Reservation</h3>
            <img className="m1" src={g1} alt="services-img" />
          </div>

          <div className="img-wrapper">
            <div className="overlay"></div>
            <h3 className="location">Holiday Packages
            </h3>
            <img className="m2" src={g2} alt="services-img" />
          </div>

          <div className="img-wrapper">
            <div className="overlay"></div>
            <h3 className="location">  ⁠⁠UAE Visa Service
            </h3>
            <img className="m3" src={g3} alt="services-img" />
          </div>

          <div className="img-wrapper">
            <div className="overlay"></div>
            <h3 className="location">Worldwide Hotel Reservation 
            </h3>
            <img className="m4" src={g4} alt="services-img" />
          </div>

          <div className="img-wrapper">
            <div className="overlay"></div>
            <h3 className="location">⁠⁠Limousine Service
            </h3>
            <img className="m5" src={g5} alt="services-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
