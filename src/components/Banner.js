import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";

import Services from "./Services";
import About from "./About";
import Prices from "./Prices";
import Footer from "./Footer";

import {NavLink} from 'react-router-dom';
import Contact from "./Contact";
// import '../../public/images/man-01.png'


const Banner = () => {
  const [state] = React.useState({
    title: "I am Pawan Kumar",
        text:
          "I'm Pawan, web developer. I'm fresher",
        image: "/images/man-01.png",
  });
  return (
    <>
    <header className="header">
      <div className="container_normal">
        <div className="row_normal">
          <div className="col-6_normal">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <NavLink to="./contact" className="btn_normal btn-outline">
                    Hire Me
                  </NavLink>
                  {/* &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6_normal">
            <div className=" banner__img">
              <img src={state.image} alt="man" />
              <h2>Imag</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Services/>
    <About/>
    <Contact/>

    </>
  );
};

export default Banner;
