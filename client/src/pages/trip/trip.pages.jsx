import React from "react";
import Tripcard from "../../components/tripcard/tripcard.components";
import "./trip.styles.css";

const Trip = () => {
  const tripData = [
    {
      "title": "travel to Europe",
      "imgurl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunrise-in-trocadero-place-with-the-beautiful-royalty-free-image-1046406568-1552420013.jpg?crop=0.54356xw:1xh;center,top&resize=480:*"
    },
    {
      "title": "Travel to Asia",
      "imgurl": "https://media1.popsugar-assets.com/files/thumbor/NwHzpjSYeOQKDQlFpowjlO10q_Y/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/14/239/n/40126596/2da006e05cdb994e042fe8.45308274_/i/Best-Travel-Destinations-Southeast-Asia.jpg"
    }, 
    {
      "title": "Visit Bali",
      "imgurl": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFsaXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      "title": "Visit Hawaii",
      "imgurl": "https://images.news18.com/ibnlive/uploads/2021/10/hawaii.jpg",
    },
  ]

  return (
    <div className="trip">
      <img
        className="image"
        src={`https://images.hdqwalls.com/wallpapers/rocks-sea-coast-4k-j6.jpg`}
        alt=""
      />
      <div className="trip-section">
        <div className="box">
          <div className="box-right">
            <div className="header">
              <h1>Luxury and special occasions</h1>
              <br />
              <h3>
                Be adventurous and experience thrill and tranquility at the same
                time by availing exclusive packages.
              </h3>
            </div>
            <div className="price1">
              <h3>
                ₹15,979 - adult <br /> (inclusive of all taxes)
              </h3>
            </div>
          </div>

          <div className="box-left">
            <div className="header">
              <h1>cultural and theme tours</h1>
              <br />
              <h3>
                Skip the Line at three of the most significant remnants. Your
                expert historian tour guide will share anecdotes throughout the
                3-hour tour
              </h3>
            </div>
            <div className="price2">
              <h3>
                ₹15,979 - adult <br /> (inclusive of all taxes)
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="trip-packages">
        <div className="trip-list">
          {
            tripData.map((trip) =><Tripcard data={trip}/> )
          }
        </div>
      </div>
    </div>
  );
};

export default Trip;
