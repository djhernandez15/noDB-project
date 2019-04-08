import React, { Component } from "react";
import Axios from "axios";
import ProjectCard from "./ProjectCard";

export class CurrentProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProjects: []
    };
  }

  componentDidMount() {
    Axios.get("/api/currentProjects").then(response => {
      console.log(response);
      this.setState({ currentProjects: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.currentProjects.map(project => (
          <ProjectCard
            jobSiteName={project.jobSiteName}
            jobSiteImage={project.jobSiteImage}
            jobSiteAddress={project.jobSiteAddress}
            budget={project.budget}
            gcNotes={project.gcNotes}
            key={project.id}
          />
        ))}
      </div>
    );
  }
}

export default CurrentProjects;
