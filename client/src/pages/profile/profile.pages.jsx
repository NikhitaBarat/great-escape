import React from "react";
import "./profile.styles.css";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0()
  return (
    <div>
      <div className="profile-header"></div>
      <img className="profile-image-icon" src={user.picture} alt="" />
      <div className="profile-card-content">
        <div className="pro-content">
          <h1>{user.name}</h1>
          <br />
          <h2>
            Welcome back, {user.name}! <br /> Let’s explore the world
          </h2>
        </div>
        <div className="pro-other-details">
          <h1>Your Details</h1>
          <div className="name-details">
          <div>
            <p>First Name</p>
            <input className="pro-input" type="text" value={user.given_name} disabled />
          </div>
          <div>
            <p>Last Name</p>       
            <input className="pro-input" type="text" value={user.family_name} disabled />
          </div>
          </div>
          <p>Your Register Email:</p>
          <input className="pro-input" type="text" value={user.email} disabled />
        </div>
      </div>
    </div>
  );
};

export default Profile;
