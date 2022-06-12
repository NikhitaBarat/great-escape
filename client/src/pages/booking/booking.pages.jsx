import React from "react";
import "./booking.styles.css";

const Booking = () => {
  return (
    <div className="booking-page">
      <div className="book-bg-image">
        <div className="inner-bg">
          <div>
            <h1>BOOK A TRIP WITH US</h1>
            <button className="book-trip-btn">BOOK NOW</button>
          </div>
        </div>
      </div>
      <div className="booking-content">
        <img
          className="hotel-profile"
          src={`https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg`}
          alt=""
        />
        <div className="hotel-main-container">
          <div className="hotel-book-content">
            <h1>Great Hotel</h1>
            <div className="hotel-rating-div">
              <p>4.4⭐</p>
            </div>
          </div>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h3>

          <div className="booking-actions">
            <div className="date-pick-section">
              <div className="date-picker-container">
                <label htmlFor="">From Date</label>
                <input type="date" className="date-picker" name="from-date" />
              </div>

              <div className="date-picker-container">
                <label htmlFor="">To Date</label>
                <input type="date" className="date-picker" name="to-date" />
              </div>
            </div>

            <button className="book-now-btn">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
