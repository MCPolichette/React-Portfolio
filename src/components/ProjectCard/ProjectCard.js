import React from "react";
import "./ProjectCard.css";


const ProjectCard = props => (
  <div className="card">
    <h5 className=" activator card-topper">{props.name}</h5>
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={window.location + `/img/${props.image}`} />
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
        <i className="fas fa-times-circle closing-button" aria-hidden="true" />
        <span>
          <a href={props.link}><i className="fas fa-external-link-square-alt"></i></a>  {props.name}
          {props.github ? <a href={props.github}><i className="fab fa-github"></i> </a> : <a href={props.link}><i className="fas fa-external-link-square-alt"></i></a>}
        </span>
      </span>


      <p>{props.description}</p>
    </div>
  </div>
  // 
);
export default ProjectCard;
