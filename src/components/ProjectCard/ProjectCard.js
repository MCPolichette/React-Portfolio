import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
  <div className="card">
    <h5 className=" activator card-topper">{props.name}</h5>
    <div className="card-image waves-effect waves-block waves-light">

      <img className="activator" src={props.image} />

    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
        <span>
          <a href={props.link}><i class="fas fa-external-link-square-alt"></i></a>  {props.name} <a href={props.github}>  <i class="fab fa-github"></i> </a></span>

        <i className="fa fa-window-close closing-button" aria-hidden="true" /></span>


      <p>{props.description}</p>
    </div>
  </div>

);
export default ProjectCard;
