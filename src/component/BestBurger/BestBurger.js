import React from 'react';

import './BestBurger.css';

function BestBurger() {
  return (
    <div className='bestBurger'>

        <div className="bestBurger-lf">
            <img src="/assets/BestBurger.png" alt="" />
        </div>

        <div className="bestBurger-rg">
            <h1>Best Burger</h1>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Vivamus lacinia odio vitae <br /> vestibulum vestibulum.  </p>
            <button>Order Now</button>
        </div>

    </div>
  )
}

export default BestBurger