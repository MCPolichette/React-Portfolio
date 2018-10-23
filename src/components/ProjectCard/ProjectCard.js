import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
  <div className="card">

    <div className="card-image waves-effect waves-block waves-light">
      <h4 className="card-overlay">{props.name}</h4>
      <img className="activator" src={props.image} />

    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{props.name}
        <i className="fa fa-window-close" aria-hidden="true" /></span>
      <p>{props.description}</p>
      <p> <a href={props.github}><i class="fab fa-github"></i> Github</a></p>
      <p><a href={props.link}><i class="fas fa-external-link-square-alt"></i> Check it out</a></p>

    </div>
  </div>

);
export default ProjectCard;
