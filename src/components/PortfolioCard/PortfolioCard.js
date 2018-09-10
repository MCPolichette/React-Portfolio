import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  <div className="Portfolio">
    <h1>Name {props.name}</h1>
    <h3>Image {props.image}</h3>
    <a href={props.link}>Link {props.link}</a>
    <a href={props.github}>Github - {props.github}</a>
    <h3>TECH - {props.tech}</h3>
    <h3>description : {props.description}</h3>
  </div>
);
export default PortfolioCard;
