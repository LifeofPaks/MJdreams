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
      <div className="container">

        <div className="title-container">

          <div className="title-text-container">
          <p class="service-title">
        Every <span>Moment</span> is a Treasured <span>Memory</span>
      </p>
      <p class="text services-text">
        With a passion for creation unforgettable experience, we specialize in a
        comprehensive range of services tailored to meet your every need
      </p>
          </div>
      

      <h1 class="big-text yellow">SERVICES</h1>
        </div>
    

      <div class="image-gallery ">
        <div class="g1">
          <img className="m1" src={g1} alt="services-img" />
          <img className="m2" src={g2} alt="services-img" />
        </div>
        <div class="g2">
          <div className="g2-1">
            <img className="m3" src={g3} alt="services-img" />
            <div className="g2-1-1">
              <img className="m4" src={g4} alt="services-img" />
              <img className="m5" src={g5} alt="services-img" />
            </div>
          </div>
          <div className="g2-2">
            <img className="m6" src={g6} alt="services-img" />
          </div>
        </div>
        <div class="g3">
          <img className="m7" src={g7} alt="services-img" />
          <img className="m8" src={g8} alt="services-img" />
        </div>
      </div>
      <div className="image-gallery-small">
        <img className="m1" src={g1} alt="services-img" />
        <img className="m2" src={g2} alt="services-img" />
        <img className="m3" src={g3} alt="services-img" />
        <img className="m4" src={g4} alt="services-img" />
        <img className="m5" src={g5} alt="services-img" />
      </div>
      </div>
    </section>
  );
};

export default Services;
