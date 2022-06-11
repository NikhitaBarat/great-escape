import React from 'react'
import HotelCard from '../../components/hotelCard/hotelcard.components.jsx'
import SearchIcon from '../../assets/ei_search.png'
import './hotels.styles.css'

const Hotels = () => {
  return (
    <div className='hotels'>
      <div className='search'>
        <div className="search-field">
          <input type="string" placeholder="Search" />
          <img src={SearchIcon} alt="" />
        </div>
      </div>
      < HotelCard />
    </div>
  )
}

export default Hotels