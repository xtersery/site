// Card.js
import React from 'react';
import './Card.css';

const Card = ({props}) => {

  return (
    <div className="card">
      <h3>{props.title}</h3>
      <div className="img_text">
          <img src={props.img} alt="" />
          <h4>{props.text}</h4>
      </div>
      <div className="cont_bx">
          <div className="price">
              <div className="info_price">
                  <a href="More Info"></a>
                  <h4>${props.price}</h4>
              </div>
          </div>
          <div className="days">{props.duration} <br/>{props.location}</div>
      </div>
  </div>
  );
};

export default Card;
