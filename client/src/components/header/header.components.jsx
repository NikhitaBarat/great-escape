import React from 'react'
import './header.styles.css'
const Header = () => {
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
          <span ><li><a className='gray' href='/'>sign up</a></li></span>|
          <li><a href='/about'>log in</a></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Header