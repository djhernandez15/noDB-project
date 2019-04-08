import React, { Component } from "react";
import "../ProjectCard.css";

export class ProjectCard extends Component {
  render() {
    let {
      jobSiteName,
      jobSiteImage,
      jobSiteAddress,
      budget,
      gcNotes,
      futureProjects,
      deleteProject,
      currentProjects,
      markComplete
    } = this.props;
    return (
      <article>
        <h3>Project Name: {jobSiteName}</h3>
        <img src={jobSiteImage} alt="job pic" />
        <h3>Address: {jobSiteAddress}</h3>
        <h3>Budget: {budget}</h3>
        <h3>Notes: {gcNotes}</h3>
        {futureProjects ? (
          <button onClick={deleteProject}>Bid Won!</button>
        ) : currentProjects ? (
          <button onClick={markComplete}>Get Paid!</button>
        ) : null}
      </article>
    );
  }
}

export default ProjectCard;
