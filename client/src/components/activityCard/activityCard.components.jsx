import React from "react";
import "./activityCard.styles.css";
import { block1, block2, block3, block4, block5, block6 } from "../../assets";

const ActivityCard = () => {
  return (
    <div>
      <ul class="cards">
        <li>
          <div href="" className="card">
            <img src={block1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">JET SKING</h3>
                  <span className="card__status">$450 per person</span>
                </div>
                {/* <div className="card__right">
                  <span>
                    1,677 km away <br /> 14–19 Jun
                  </span>
                </div> */}
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur dolore veniam accusamus omnis voluptatibus
                repellendus unde, quibusdam soluta incidunt libero ipsa
                doloremque quos quis nostrum laudantium, ullam placeat, laborum
                deserunt.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div href="" className="card">
            <img src={block2} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">BOOK A NIGHT IN CRUISE</h3>
                  <span className="card__status">$145 per night</span>
                </div>
                {/* <div className="card__right">
                  <span>
                    7,557 km away <br /> 1-6 Nov
                  </span>
                </div> */}
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus labore iusto nulla. Possimus, totam. Sequi nemo
                eligendi suscipit, provident illum excepturi laudantium! Culpa
                ad deserunt fugit odio pariatur quaerat repudiandae!
              </p>
            </div>
          </div>
        </li>
        <li>
          <div href="" className="card">
            <img src={block3} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">BOOK A SPOT ON BEACH</h3>
                  <span className="card__status">$250 per night</span>
                </div>
                {/* <div className="card__right">
                  <span>
                    2,477 km away <br />
                    1-6 Feb
                  </span>
                </div> */}
              </div>
              <p class="card__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam obcaecati odio nemo, optio fuga impedit veritatis
                suscipit incidunt culpa repellendus perferendis vel eius
                voluptatibus consequuntur minima. Laudantium illum voluptatibus
                in.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div href="" className="card">
            <img src={block4} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">CLUBBING</h3>
                  <span className="card__status">$1000 per night</span>
                </div>
                {/* <div className="card__right">
                  <span>
                    5,670 km away <br /> 25 - 30 Jun
                  </span>
                </div> */}
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quo incidunt vitae cumque. Velit quaerat vitae
                similique ipsum voluptatibus soluta hic ut laudantium. Ex
                consectetur at quae illum dolores nobis.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div href="" class="card">
            <img src={block5} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <div class="card__header-text">
                  <h3 class="card__title">CLUBBING</h3>
                  <span class="card__status">$400 per night</span>
                </div>
                {/* <div className="card__right">
                  <span>
                    1,677 km away <br /> 14–19 Jun
                  </span>
                </div> */}
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </div>
        </li>
        <li>
          <div href="" class="card">
            <img src={block6} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <div class="card__header-text">
                  <h3 class="card__title">BOOK A TABLE</h3>
                  <span class="card__status">$400 per night</span>
                </div>
                {/* <div className="card__right">
                  <span>
                    1,677 km away <br /> 14–19 Jun
                  </span>
                </div> */}
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ActivityCard;
