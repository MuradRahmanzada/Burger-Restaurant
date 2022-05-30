import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Hero.css";

function Hero() {
  return (
    <div className="heroContainer">
      <Navbar />
      <div className="heroContent">
        <div className="heroItems">
          <h1>
            Get Cashback <br /> up to 50%
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Suspendisse consectetur <br /> justo eu nunc consequat.
          </p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
