import React from "react";

const Prices = () => {
  const [header] = React.useState({
    // mainHeader: "SKILL",
    subHeading: "Skill ",
    // text:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "C",
    },
    {
      id: 2,
      heading: "C++",
    },
    {
      id: 3,
      heading: "Java",
    },
    {
      id: 4,
      heading: "Javascript",
    },
    {
      id: 5,
      heading: "React",
    },
    {
      id: 6,
      heading: "Html",
    },
    {
      id: 7,
      heading: "Css",
    },
    {
      id: 8,
      heading: "Photoshop",
    },
    {
      id: 9,
      heading: "Corel",
    },
  ]);
  return (
    <div className="prices">
      <div className="container_normal">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row_normal">
          {state.map((prices) => (
            <div className="col-4_normal" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
