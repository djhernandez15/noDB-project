import React, { Component } from "react";

export class ProjectCard extends Component {
  render() {
    return (
      <article>
        <h2>Project Name: </h2>
        <img alt="jobsite pic" />
        <h3>Address: </h3>
        <h3>Budget: </h3>
        <h3>GC Notes: </h3>
        <button>Ready!</button>
      </article>
    );
  }
}

export default ProjectCard;
