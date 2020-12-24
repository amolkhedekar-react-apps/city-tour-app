import React, { useState } from "react";
import "./Tour.css";

function Tour(props) {
  const { id, city, img, name, info } = props.tour;
  const [infoToggle, setInfoToggle] = useState(false);
  const handleInfo = () => {
    setInfoToggle(!infoToggle);
  };
  return (
    <article className="tour">
      <div className="tour__image">
        <img src={img} alt={city} />
      </div>
      <div className="tour__info">
        <h2 className="city">{city}</h2>
        <h4 className="name">{name}</h4>
        <h5 className="info">
          Details{" "}
          <span onClick={handleInfo}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        {infoToggle && <p className="info">{info}</p>}
      </div>
    </article>
  );
}

export default Tour;
