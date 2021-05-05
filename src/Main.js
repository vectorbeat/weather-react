import React from "react";
import Currently from "./Currently";
import Forecast from "./Forecast";

export default function Main() {
  return (
    <div className="container">
      <div className="Main">
        <div className="main shadow-lg p-3 mb-5 bg-body rounded">
          <Currently />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
