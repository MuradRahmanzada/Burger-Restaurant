import React from "react";

import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subs-container">
        <div className="subs-txt">
          <h1>Don't miss Our Update</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>

        <div className="subs-email">
          <input type="text" placeholder="Your Email"/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
