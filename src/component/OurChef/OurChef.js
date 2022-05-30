import React from "react";
import OurChefBox from './OurChefBox';

import "./OurChef.css";


function OurChef() {
  return (
    <div className="ourChef">
      <div className="ourChef-txt">
        <h1>Our Chef</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi- <br/> vamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
      <div className="ourChef-boxes">
        <OurChefBox 
        imgSrc="Aiden-Hunter.png"
        name="Ethel Hunter"
        jobTitle="Founder"
        />
        <OurChefBox 
        imgSrc="Ethel-Ramsey.png"
        name="Ethel Ramsey"
        jobTitle="Co-Founder"
        />
        <OurChefBox 
        imgSrc="Fannie-Stewart.png"
        name="Fannie Stewart"
        jobTitle="Co-Founder"
        />
      </div>
    </div>
  );
}

export default OurChef;
