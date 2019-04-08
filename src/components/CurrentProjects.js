import React, { Component } from "react";
import Axios from "axios";
import ProjectCard from "./ProjectCard";

export class CurrentProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProjects: []
    };
    this.markComplete = this.markComplete.bind(this);
  }

  componentDidMount() {
    Axios.get("/api/currentProjects", {
      params: {
        jobSiteName: "Butler Brothers Bldg"
      }
    })
      .then(response => {
        console.log(response);
        this.setState({ currentProjects: response.data });
      })
      .catch(error => {
        console.log(error);
        alert("Sorry unexpected problem occured. Try again!");
      });
  }

  markComplete(id) {
    Axios.delete("/api/currentProjects/" + id).then(response => {
      this.setState({ currentProjects: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.currentProjects.map(project => (
          <div>
            <ProjectCard
              jobSiteName={project.jobSiteName}
              jobSiteImage={project.jobSiteImage}
              jobSiteAddress={project.jobSiteAddress}
              budget={project.budget}
              gcNotes={project.gcNotes}
              key={project.id}
              markComplete={() => this.markComplete(project.id)}
              currentProjects={true}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default CurrentProjects;
