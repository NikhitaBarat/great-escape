import React from 'react'
import './profile.styles.css'
import profileicon from '../../assets/profile.png'

const Profile = () => {
  return (
    <div>
      <div className='profile-header'>
      </div>
      <div className='profile-image'>
        <img src={profileicon} alt="" />
      </div>
    </div>
  )
}

export default Profile