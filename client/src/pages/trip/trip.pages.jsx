import React from 'react'
import './trip.styles.css'
import Price from '../../assets/price.png'

const Trip = () => {
  return (
    <div className='trip'>
      <img className='image' src={`https://images.hdqwalls.com/wallpapers/rocks-sea-coast-4k-j6.jpg`} alt="" />
      <div className='box'>
      <div className='box-right'>
        <div className="header">
        <h1>Luxury and special occasions</h1>
        <br />
        <h3>Be adventurous and experience thrill and tranquility at the same time by availing exclusive packages.</h3>
        </div>
        <div className='price1'><h3>
        ₹15,979 - adult <br /> (inclusive of all taxes)</h3>
        </div>
      </div>
      <div className="box-left">
      <div className="header">
        <h1>cultural and theme tours</h1>
        <br />
        <h3>Skip the Line at three of the most significant remnants. Your expert historian tour guide will share anecdotes  throughout the 3-hour tour</h3>
        </div>
        <div className='price2'><h3>
        ₹15,979 - adult <br /> (inclusive of all taxes)</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Trip