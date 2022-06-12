import React, { useState } from "react";
import HotelCard from "../../components/hotelCard/hotelcard.components.jsx";
import SearchIcon from "../../assets/ei_search.png";
import { useQuery, gql } from "@apollo/client";
import "./hotels.styles.css";

const Hotels = () => {
  const [search, setSearch] = useState("");

  const { loading, error, data } = useQuery(gql`
    {
      hotels {
        hotel_name
        imgurl
        despscription
        rating
        new_price
      }
    }
  `);
  if (loading)
    return (
      <div className="filter-section">
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="filter-section">
        <p>Error :(</p>
      </div>
    );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredHotel = data.hotels.filter((hotel) =>
    hotel.hotel_name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="hotels">
      <div className="hotel-bg">
        <div className="hotel-image-for-search">
          <h1>Looking For Hotel</h1>
        </div>
      </div>
      <div className="search-area">
        <div className="hotel-search-field">
          <input type="string" onChange={handleSearch} placeholder="Search" />
          <img className="searchimage" src={SearchIcon} alt="" />
        </div>
      </div>
      <HotelCard hotels={filteredHotel} />
    </div>
  );
};

export default Hotels;
