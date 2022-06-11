import React from "react";
import "./activities.styles.css";
import ActivityCard from "../../components/activity/activityCard.components";
import SearchIcon from "../../assets/ei_search.png";
import JetSki from "../../assets/jetski.png";
import Cruising from "../../assets/cruising.png";

function Activities() {
  return (
    <div className="activities">
      <div className="search">
        <div className="search-field">
          <input type="string" placeholder="Search" />
          <img src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="water">
        <div className="water1">
          <img src={JetSki} alt="" />
          <h2>JET SKI</h2>
        </div>
        <div className="water2">
          <img className="waterimage" src={Cruising} alt="" />
          <h2>CRUISING</h2>
        </div>
      </div>
      <ActivityCard />
    </div>
  );
}

export default Activities;
