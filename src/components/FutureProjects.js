import React, { Component } from "react";
import Axios from "axios";
import ProjectCard from "./ProjectCard";

export class FutureProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      futureProjects: []
    };
  }

  componentDidMount() {
    Axios.get("/api/futureProjects").then(response => {
      this.setState({ futureProjects: response.data });
    });
  }

  deleteProject(id) {
    console.log(id);
    Axios.delete("/api/futureProjects/" + id).then(response =>
      this.setState({ futureProjects: response.data })
    );
  }

  render() {
    
    return (
      <article>
        {this.state.futureProjects.map(project => (
          <ProjectCard
            jobSiteName={project.jobSiteName}
            jobSiteImage={project.jobSiteImage}
            jobSiteAddress={project.jobSiteAddress}
            budget={project.budget}
            gcNotes={project.gcNotes}
            deleteProject={() => this.deleteProject(project.id)}
            key={project.id}
            futureProjects={true}
          />
        ))}
      </article>
    );
  }
}

export default FutureProjects;
