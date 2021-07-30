import React from "react";

function Project(props) {

  return (
    <div>
        <h2>{props.title}</h2>
        <img src={props.image}
        alt={props.title}
         />
        <h3>{props.tech}</h3>
        <a href={props.github}>Github</a>
        <a href={props.liveapp}>Link to App!</a>
    </div>
  );
}

export default Project;