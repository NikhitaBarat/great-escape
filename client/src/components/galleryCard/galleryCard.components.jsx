import React from "react";
import "./galleryCard.styles.css";
import Photo1 from "../../assets/image 19.png";
import Photo2 from "../../assets/image 21.png";
import Photo3 from "../../assets/image 22.png";
import Photo4 from "../../assets/image 23.png";

function GalleryCard() {
  return (
    <div className="gallery">
      <div className="gallery-row">
        <div className="gallery-info">
          <h3 className="heading">PHOTO GALLERY</h3>
        </div>
        <div className="photo">
          <img className="watersportsimage" src={Photo1} alt="" />
          <img className="watersportsimage" src={Photo2} alt="" />
          <img className="watersportsimage" src={Photo3} alt="" />
          <img className="watersportsimage" src={Photo4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
