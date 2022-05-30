import React from "react";
import StatBox from "./StatBox";

import "./Statistics.css";

function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics-txt">
        <h1>Statistics</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi- <br />{" "}
          vamus lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
      <div className="statistics-boxes">
          <StatBox
          title="7k"
          text="Customer"
          />
          <StatBox
          title="109"
          text="Outlets"
          />
          <StatBox
          title="35"
          text="Country"
          />
      </div>
    </div>
  );
}

export default Statistics;
