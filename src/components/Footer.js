import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container_normal">
        <div className="footerSection">
          <div className="row_normal justifyConter">
            <div className="col-6">
              <div className="footerSection-logo">
              <a href='/'> <h2>paw<span className='dot'>.</span>an</h2></a>
              </div>
             
              <ul className="footerCircles">
                <li>
                  <FaFacebookF className="footerIcon" />
                </li>
                <li>
                  <FaTwitter className="footerIcon" />
                </li>
                <li>
                  <FaPinterest className="footerIcon" />
                </li>
                <li>
                  <FaInstagram className="footerIcon" />
                </li>
              </ul>
              <p>
                copyright &copy; 2021 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
