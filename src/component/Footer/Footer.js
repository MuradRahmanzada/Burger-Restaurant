import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Instagram } from "@material-ui/icons";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="title">
          <h3>Title Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alquam at sigissim nunc, id maximus ex. Etiam nec dignissim elit, at  dignissim enim.</p>
          <div className="icons">
              <InstagramIcon/>
              <FacebookIcon/>
              <TwitterIcon/>
              <WhatsAppIcon/>
          </div>
      </div>
      <ul>
          <li className="active">About</li>
          <li>History</li>
          <li>Our Team</li>
          <li>Brand Guidelines</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
      </ul>
      <ul>
          <li className="active">Services</li>
          <li>How to Order</li>
          <li>Our Product</li>
          <li>Order status</li>
          <li>Promo</li>
          <li>Payment Method</li>
      </ul>
      <ul className="ul-right"> 
          <li className="active">Other</li>
          <li>Contact Us</li>
          <li>Help</li>
          <li>Privacy</li>
      </ul>
    </div>
  );
}

export default Footer;