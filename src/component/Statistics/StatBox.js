import React from 'react';

import './StatBox.css';

function StatBox({ title, text }) {
  return (
    <div className='statBox'>
        <h1>{title}</h1>
        <h2>{text}</h2>
    </div>
  )
}

export default StatBox