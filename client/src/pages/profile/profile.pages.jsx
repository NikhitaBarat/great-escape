import React from 'react'
import './profile.styles.css'
import profileicon from '../../assets/profile.png'

const Profile = () => {
  return (
    <div>
      <div className='profile-header'>
      </div>
      <img className='profile-image-icon' src={profileicon} alt="" />
      <div className='profile-card'>
        <h1>JAKE PAUL</h1><br />
        <h2>Welcome back, jake! <br /> Let’s explore the world</h2>
      </div>
    </div>
  )
}

export default Profile