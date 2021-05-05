import React from "react";
import Day from "./Day";

export default function Forecast() {
  return (
    <div className="Forecast">
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />

      <a href="https://www.google.com" className="btn btn-primary" id="tenDay">
        View 10 day forecast
      </a>
    </div>
  );
}
