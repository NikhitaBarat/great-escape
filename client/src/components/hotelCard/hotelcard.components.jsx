import React from 'react'
import './hotelcard.styles.css'


const Hotelcard = ({hotels}) => {

  return (
    <div>
      <ul class="cards">
        {hotels.map((hotel) => (
            <li>
            <div href="" className="card">
              <img src={hotel.imgurl} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <div className="card__header-text">
                    <h3 className="card__title">{hotel.hotel_name}</h3>
                    <span className="card__status">₹{hotel.new_price} per night</span>
                  </div>
                  <div className='card__right'>
                    <span>1,677 km away <br /> 14–19 Jun</span>
                  </div>
                </div>
                <p class="card__description">Adaaran Club Rannalhi is featured among the best hotels in Maldives and sits exclusively at the tip of the South Male atoll within the exotic collection of islands known as the Maldives.</p>
              </div>
            </div>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default Hotelcard