import React from 'react'
import './header.styles.css'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  return (
    <div className='navbar'>
      <div></div>
      <div className='nav_options'>
        <ul>
          <li><a href='/'>ABOUT US</a></li>
          <li><a href='/gallery'>GALLERY</a></li>
          <li><a href='/activities'>ACTIVITIES</a></li>
          <li><a href='/hotels'>HOTELS</a></li>
          <li><a href='/trip'>TRIPS</a></li>
        </ul>
        </div>
        <div className='signin_options'>
        <ul>
          <span className='gray'><li><a href='/'>sign up</a></li></span>
          <li onClick={() => loginWithRedirect()}><a href='/about'>log in</a></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Header