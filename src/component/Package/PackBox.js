import React from 'react'

import './PackBox.css';

function PackBox({packageNum, salary}) {
  return (
    <div className='packBox'>
        <h1>PACKAGE {packageNum}</h1>
        <img src="/assets/Package-Burger.png" alt="" />
        <h2>${salary}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Order Now</button>
    </div>
  )
}

export default PackBox