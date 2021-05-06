import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  return (
    <div className="container">
      <div className="row search-section">
        <form className="search-bar" id="search">
          <div className="search-title">Search</div>
          <div className="use-location">
            <a href="https://www.google.com" id="use-current">
              Use Current location
            </a>
          </div>
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              id="search-box"
              placeholder="Enter city..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
