import React from "react";

export default function Currently() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <p className="currently-temp">75°F</p>
          <p className="currently-city" id="currentlyCity">
            Los Angeles
          </p>
          <p className="currently-country">US</p>
        </div>
        <div className="col-5">
          <i className="fas fa-sun weather-icon"></i>

          <div className="current-desc">Current Description</div>

          <div className="wind">Wind</div>
          <div className="humidity">Humidity</div>
        </div>

        <hr />
      </div>
    </div>
  );
}
