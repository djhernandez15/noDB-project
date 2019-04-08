import React, { Component } from "react";
import CurrentProjects from "./CurrentProjects";
import FutureProjects from "./FutureProjects";
import BuildProject from "./BuildProject";

export class Main extends Component {
  render() {
    return (
      <main>
        {this.props.name === "currentProjects" ? (
          <CurrentProjects />
        ) : this.props.name === "futureProjects" ? (
          <FutureProjects />
        ) : this.props.name === "buildProject" ? (
          <BuildProject />
        ) : (
          <h2 style={{textAlign: "center"}}>Start Building!</h2>
        )}
      </main>
    );
  }
}

export default Main;
