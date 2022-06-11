import React from 'react';
import './home.styles.css';
import { Homebg, Plane, Sky } from '../../assets';

const Home = () => {
  return (
    <div className='home-pages'>
    <div className="top-section">
      <div className="home-container">
        <img className='bg-image' src={Homebg} alt="" />
      </div>
      <div className="home-page-content">
        <h1>Great Escape</h1>
        <p>find personalized recommendations for activities, hotels and more</p>
      </div>
    </div>
    <div className="middle-section">
      <div className="home-container">
        <img className='bg-sky' src={Sky} alt="" />
      </div>
      <img src={Plane} className="plane" alt="" />
      <h1>Tickets and <br/> Accomodation</h1>
    </div>
    </div>
  )
}

export default Home