import React from "react";

import "./BigBurger.css";

function BigBurger() {
  return (
    <div className="bigBurger">
      <div className="bigBurger-lf">
        <h1>Big Burger</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          Vivamus lacinia odio vitae <br /> vestibulum vestibulum.{" "}
        </p>
        <button>Order Now</button>
      </div>

      <div className="bigBurger-rg">
        <img src="/assets/BestBurger.png" alt="" />
      </div>
    </div>
  );
}

export default BigBurger;
