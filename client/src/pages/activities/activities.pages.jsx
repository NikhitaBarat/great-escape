import React from "react";
import "./activities.styles.css";
import ActivityCard from "../../components/activityCard/activityCard.components";
import JetSki from "../../assets/jetski.png";
import Cruising from "../../assets/cruising.png";

function Activities() {
  return (
    <div className="activities">
      <div className="water">
        <div className="water1">
          <img className="waterimage" src={JetSki} alt="" />
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
