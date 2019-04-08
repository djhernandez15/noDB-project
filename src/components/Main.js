import React, { Component } from "react";
import CurrentProjects from "./CurrentProjects";
import FutureProjects from "./FutureProjects";
import BuildProject from "./BuildProject";

export class Main extends Component {
  render() {
    console.log("props", this.props.name);
    return (
      <main>
        {this.props.name === "currentProjects" ? (
          <CurrentProjects />
        ) : this.props.name === "futureProjects" ? (
          <FutureProjects />
        ) : this.props.name === 'buildProject' ? (
        <BuildProject />
        ) : 'Start Building!'
      }
      </main>
    );
  }
}

export default Main;
