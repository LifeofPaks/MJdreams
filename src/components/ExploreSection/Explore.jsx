import React from "react";
import "../ExploreSection/Explore.scss";
import burj from "../../assets/burj.png";
import desert from "../../assets/desert.png";
import dubai from "../../assets/dubai.png";
import sheikh from "../../assets/sheikh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Explore = () => {
  const nextSlide = () => {
    const slider = document.getElementById('explore')
    slider.scrollLeft = slider.scrollLeft - 450
  };

  const prevSlide = () => {
    const slider = document.getElementById('explore')
    slider.scrollLeft = slider.scrollLeft + 450
  };

  return (
    <section className="explore">
      <div className="set-width">
        <h1 className="big-text yellow">EXPLORE</h1>
        <p className="explore-title">
          <span>Explore</span> the wonders of <span>UAE</span>
        </p>
        <p className="text explore-text sub-title">
          With our curated inbound and outbound tours, featuring iconic
          attractions
        </p>

        <div className="explore-here">
          <div className="explore-cards-container" id="explore">
            <div className="explore-cards">
              <img src={burj} alt="explore-img" />
              <p className="text-title">The Burj Khalifa</p>
              <p className="text explore-text">
                Serene lakeside retreat with crystal-clear waters and lush green
                hills.
              </p>
            </div>

            <div className="explore-cards">
              <img src={sheikh} alt="explore-img" />
              <p className="text-title">Sheikh Zayed Mosque</p>
              <p className="text explore-text">
                Majestic mountains surrounded by waterfalls.
              </p>
            </div>

            <div className="explore-cards">
              <img src={dubai} alt="explore-img" />
              <p className="text-title">Dubai Frame</p>
              <p className="text explore-text">
                Golden sandy beach with turquoise waves and a warm, gentle
                breeze.
              </p>
            </div>

            <div className="explore-cards">
              <img src={desert} alt="explore-img" className="desert"/>
              <p className="text-title">Desert Safari</p>
              <p className="text explore-text">
              Enchanted and bathed in soft sunlight.
              </p>
            </div>

            

            <div className="arrow right" onClick={prevSlide}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="arrow left" onClick={nextSlide}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
