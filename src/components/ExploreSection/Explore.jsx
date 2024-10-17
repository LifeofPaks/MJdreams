import React from "react";
import "../ExploreSection/Explore.scss";
import burj from "../../assets/burj.png";
import desert from "../../assets/desert.png";
import dubai from "../../assets/dubai.png";
import sheikh from "../../assets/sheikh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Explore = () => {
  return (
    <section class="explore">
      <h1 class="big-text yellow">EXPLORE</h1>
      <p class="explore-title">
        <span>Explore</span> the wonders of <span>UAE</span>
      </p>
      <p class="text explore-text sub-title">
        With our curated inbound and outbound tours, featuring iconic
        attractions
      </p>
      <div class="explore-cards-container">
        <div class="explore-cards">
          <img src={burj} alt="explore-img" />
          <p class="text-title">The Burj Khalifa</p>
          <p class="text explore-text">
            Serene lakeside retreat with crystal-clear waters and lush green
            hills.
          </p>
        </div>

        <div class="explore-cards">
          <img src={sheikh} alt="explore-img" />
          <p class="text-title">Sheikh Zayed Mosque</p>
          <p class="text explore-text">
            Majestic mountains surrounded by 
            waterfalls.
          </p>
        </div>

        <div class="explore-cards">
          <img src={dubai} alt="explore-img" />
          <p class="text-title">Dubai Frame</p>
          <p class="text explore-text">
            Golden sandy beach with turquoise waves and a warm, gentle breeze.
          </p>
        </div>

        <div class="explore-cards last-card">
          <img src={desert} alt="explore-img" />
          <p class="text-title">Dese</p>
          <p class="text explore-text">
            Encha <br /> forem
          </p>
        </div>

        <div class="arrow right"><FontAwesomeIcon icon={faArrowRight} /></div>
      </div>
    </section>
  );
};

export default Explore;
