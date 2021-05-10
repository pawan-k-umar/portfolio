import React from "react";
import {
  FaFolder,
  FaGamepad,
  FaBolt,
  FaHamburger,
  FaKeyboard,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "POJECT",
    subHeading: "My Project",
    text:
      "This is my all project. Created with the help of html, css, bootstrap, react and photoshop ",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaBolt className="commonIcons" />,
      heading: "Weather App",
      links:'https://pawan-k-umar.github.io/weather_app/',
      text:
        "In this Project i am using react js. This app take user location and provide their weather. It also take cityname by search bar",
        language : 'HTML , CSS , JAVASCRIPT, REACT',
    },
    {
      id: 2,
      icon: <FaHamburger className="commonIcons" />,
      heading: "Food Finder",
      links:'',
      text:
        "It is Food finder web app which is take food name using search box and provide their data",
        language : 'HTML , CSS , JAVASCRIPT',
    },
    {
      id: 3,
      icon: <FaKeyboard className="commonIcons" />,
      heading: "Typing Speed",
      links:'',
      text:
        "It is another interesting project. When user typed given words correctly then increase the time according their level",
        language : 'HTML , CSS , JAVASCRIPT',
    },
    {
      id: 4,
      icon: <FaGamepad className="commonIcons" />,
      heading: "Tic Tac Toe Game",
      links:'https://pawan-k-umar.github.io/tic-tac-toe/',
      text:
        "This project is make using basics function of javascript",
        language : 'HTML , CSS , BOOTSTRAP, JAVASCRIPT',
    },
    {
      id: 5,
      icon: <FaFolder className="commonIcons" />,
      heading: "First Portfolio",
      links:'https://pawan-k-umar.github.io/pawan-s-portfolio.github.io/',
      text:
        "This is my first project. which is maked using only HTMl and CSS.",
      language : 'HTML , CSS',
    },
    {
      id: 6,
      icon: <FaFolder className="commonIcons" />,
      heading: "Second Portfolio",
      links:'https://pawan-k-umar.github.io/pawan-s-portfolio-2.github.io/',
      text:
        "When i am learned bootstrap then again make another portfolio.",
        language : 'HTML , CSS , BOOTSTRAP',
    },
  ]);
  return (
    <>
    <div className="services">
      <div className="container_normal">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row_normal bgMain">
            {state.map((info) => (
              <div className="col-4_normal bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <p className='project__languge' >{info.language} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
