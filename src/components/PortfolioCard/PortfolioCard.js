import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  <div className="card medium">
    <div className="card-image">
      <img src={props.image} />
      <span className="card-title">{props.name}</span>
      <a
        className="btn-floating halfway-fab waves-effect waves-light red"
        href={props.github}
      >
        <i className="material-icons">git</i>
      </a>
    </div>
    <div className="card-content">
      <p>{props.description}</p>
    </div>
    <div className="card-action">
      <a href={props.link}>See it working</a>
    </div>
  </div>
);
export default PortfolioCard;
