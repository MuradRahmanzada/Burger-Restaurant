import React from 'react';

import './OurChefBox.css'


function OurChefBox({ imgSrc, name, jobTitle }) {
  return (
    <div className='ourChefBox'>
      <img src={`./assets/${imgSrc}`}alt=""  />
      <h1>{name}</h1>
      <p>{jobTitle}</p>
    </div>
  )
}

export default OurChefBox;