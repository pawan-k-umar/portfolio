import React from "react";
import Prices from './Prices';

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      `Hello, I'm a final year BCA student of Bhimrao Ambedkar University, Bihar. I'm also working with LIVENEWS24X7 along with my studies. I'm designing experience in corel draw, photoshop and learning experience in Java, NodeJs and ReactJS. 
      I like to watch and play cricket in my leisure.`,
  });
  const [state] = React.useState([
    { id: 1, title: "Name :", text: "pawan kumar" },
    { id: 2, title: "Email :", text: "itsmkr.info@gmail.com" },
    { id: 3, title: "Portfolio : ", text: "www.portfolio.com" },
    { id: 4, title: "Linkedin : ", text: "pawan_kr95" },
  ]);
  return (
    <div className="about">
      <div className="container_normal">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row_normal  h-650 alignCenter">
         
          <div className="col-6_normal">





          
            <div className="about__info">
              {/* <h1>Hi There</h1>
              <div className="about__info-p1">
                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui
                at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
                efficitur sagittis, urna est ultricies eros, ac porta sem turpis
              </div>
              <div className="about__info-p2">
                nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </div> */}
              <div className="info__contacts">
                <div className="row_normal">
                  {state.map((info) => (
                    <div>
                      <strong>{info.title}</strong>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-6_normal">
            <Prices/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
