import React, { Component } from "react";
import axios from 'axios';

export class ProjectCard extends Component {
  constructor(props){
    super(props);
    
  }

  

  render() {
    return (
      <article>
        <h2>JobSite Name: </h2>
        <img alt="jobsite pic" />
        <h3>JobSite Address: </h3>
        <h3>Budget: </h3>
        <h3>GC Notes: </h3>
        <button onClick={}>Mark Complete!</button>
      </article>
    );
  }
}

export default ProjectCard;
