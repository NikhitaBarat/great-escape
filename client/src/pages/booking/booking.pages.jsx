import React from "react";
import "./booking.styles.css";

const Booking = ({data}) => {
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
          src={data.imgurl}
          alt=""
        />
        <div className="hotel-main-container">
          <div className="hotel-book-content">
            <h1>{data.hotel_name}</h1>
            <div className="hotel-rating-div">
              <p>{data.rating}⭐</p>
            </div>
          </div>
          <h3>
              {data.despscription}
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
