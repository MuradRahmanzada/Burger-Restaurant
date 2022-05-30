import React from 'react'

import './Package.css';
import PackBox from './PackBox';

function Package() {
  return (
    <div className='package'>
        <div className="package-txt">
            <h1>Popular Package</h1>
        </div>
        <div className="package-boxes">
          <PackBox/>
          <PackBox/>
          <PackBox/>
        </div>
    </div>
  )
}

export default Package