import React, { Component } from "react";
import "../ProjectCard.css";
import axios from "axios";

export class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <h3>Project Name: {this.props.jobSiteName}</h3>
        <img src={this.props.jobSiteImage} alt="job pic" />
        <h3>Address: {this.props.jobSiteAddress}</h3>
        <h3>Budget: {this.props.budget}</h3>
        <h3>Notes: {this.props.gcNotes}</h3>
        {this.props.futureProjects ? (
          <button onClick={this.props.deleteProject}>Bid Won!</button>
        ) : null}
      </article>
    );
  }
}

export default ProjectCard;
