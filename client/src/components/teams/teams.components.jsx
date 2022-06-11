import React, { useState } from "react";
import Pic from "../../assets/user-profile.png";
import Social from "../../assets/social-icons.png";
import "./teams.styles.css";

function Teams() {
  const [Name, setName] = useState("Your Name");
  return (
    <div className="our-team">
      <div className="row">
        <div className="upper-container">
          <div className="image-container">
            <img src={Pic} alt="" height="100px" />
          </div>
          <div className="lower-container">
            <h3>{Name}</h3>
            <img src={Social} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
