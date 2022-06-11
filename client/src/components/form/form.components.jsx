import React from "react";
import "./form.styles.css";

const Form = () => {
  return (
    <div className="form">
      <div className="row">
        <div className="form-info">
          <h6 className="heading">GET IN TOUCH</h6>
        </div>
        <div className="form-input">
          <h3 className="heading-form">SEND MESSAGE</h3>
          <hr />

          <input type="string" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <label>
            INTERESTED IN:
            <select>
              <option value="activities">Activities</option>
              <option value="hotels">Hotels</option>
              <option value="trips">Trips</option>
            </select>
          </label>
          <input type="number" placeholder="PHONE NUMBER" />
          <input type="string" placeholder="MESSAGE" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Form;
