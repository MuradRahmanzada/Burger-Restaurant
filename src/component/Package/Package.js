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
          <PackBox
          packageNum="l"
          salary="10.00"
          />
          <PackBox
          packageNum="ll"
          salary="20.00"
          />
          <PackBox
          packageNum="lll"
          salary="30.00"
          />
        </div>
    </div>
  )
}

export default Package