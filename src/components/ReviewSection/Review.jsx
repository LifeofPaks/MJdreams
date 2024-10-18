import React from "react";
import "../ReviewSection/Review.scss";
import reviewIcon from "../../assets/reviewIcon.png";
import pfp1 from "../../assets/pfp1.png";
import pfp2 from "../../assets/pfp2.png";
import pfp3 from "../../assets/pfp3.png";

const Review = () => {
  return (
    <section class="review">
      <div className="set-width for-review">
        <div class="top">
          <div className="rounded top-btns">Limousine services</div>
          <div className="rounded top-btns">Luxury cruises</div>
          <div className="rounded top-btns">Hotel reservations</div>
          <div className="rounded top-btns">Travel insurance</div>
          <div className="rounded top-btns">
            Conference events & conventions
          </div>
        </div>
        <div class="review-container ">
          <div class="review-header top-btns">
            <img src={reviewIcon} alt="reviewIcon" className="review-logo" />

            <div className="top-review">
              <div className="review-star">
                <p className="review-text">5.0</p>
                <div className="review-balls-cont">
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                </div>
              </div>
              <div className="review-info">
                <p className="review-text">893</p>
                <p className="text">Reviews</p>
              </div>
            </div>
          </div>
          <div class="review-cards">
            <div className="card">
              <div className="review-star">
                <p className="review-text">5.0</p>
                <div className="review-balls-cont">
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                </div>
              </div>
              <p className="text t1">
                "Incredible! I’m beyond impressed with both the product and the
                team behind it. Delivered on time, excellent quality, and great
                value for money."
              </p>
              <div className="profile">
                <img src={pfp1} alt="profile-img" />
                <div className="profile-info">
                  <p className="name review-text">Theo Stephens</p>
                  <p className="office">Reviewed 1st Oct</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="review-star">
                <p className="review-text">4.0</p>
                <div className="review-balls-cont">
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball gray"></div>
                </div>
              </div>
              <p className="text t1">
                "This product exceeded my expectations! The quality is
                outstanding, and the customer service was exceptional.Totally
                worth it!"
              </p>
              <div className="profile">
                <img src={pfp2} alt="profile-img" />
                <div className="profile-info">
                  <p className="name review-text">Janet Peters</p>
                  <p className="office">Reviewd 5th Oct</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="review-star">
                <p className="review-text">5.0</p>
                <div className="review-balls-cont">
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                  <div className="review-ball"></div>
                </div>
              </div>
              <p className="text t1">
                "Absolutely fantastic experience! The service was quick,
                professional, and friendly. I’ll definitely be returning for
                future purchases."
              </p>
              <div className="profile">
                <img src={pfp3} alt="profile-img" />
                <div className="profile-info">
                  <p className="name review-text">Sandra Evans</p>
                  <p className="office">Review 14th Oct</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" see-more">
            <button className="primary-btn imp-btn">See more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
