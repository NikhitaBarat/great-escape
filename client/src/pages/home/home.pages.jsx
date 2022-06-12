import React from "react";
import "./home.styles.css";
import { Homebg, Plane, Sky } from "../../assets";

const Home = () => {
  return (
    <div className="home-pages">
      <div className="top-section">
        <div className="home-container">
          <img className="bg-image" src={Homebg} alt="" />
        </div>
        <div className="home-page-content">
          <h1>Great Escape</h1>
          <p>
            find personalized recommendations for activities, hotels and more
          </p>
        </div>
      </div>

      <div className="participants">
        
      </div>

      <div className="middle-section">
        <h1>
          Tickets and <br /> Accomodation
        </h1>
        <div className="home-container">
          <img className="bg-sky" src={Sky} alt="" />
        </div>
        <img src={Plane} className="plane" alt="" />
      </div>

      <div className="road-trip">
        <div className="road-trip-content">
          <div>
            <p>1. Great overview and orientation of the city</p>
            <p>2. Led by a local guide</p>
            <p>3. Choice of morning or afternoon departure</p>
            <p>4. Small group ensures personal service</p>
          </div>
        </div>

        <div className="road-trip-top">
          <div className="road-trip-overlay">
            <div>
              <p>
                Imagine the thrill of feeling the wind in your hair, while
                looking at the changing scenes from a window-seat.
              </p>
              <p>make your journey easier, confirmed and penalty free.</p>
            </div>
          </div>

          <div className="road-trip-side-bg">
            <h1>ROAD TRIP</h1>
            <button className="book-now">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
