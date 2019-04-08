import React, { Component } from "react";
import Axios from "axios";

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state ={
      futureProjects: []
    }
    this.handleNavBar = this.handleNavBar.bind(this);
  }



  handleNavBar(e) {
    this.props.handleClick(e.target.name);
  }

  render() {
    let { handleNavBar } = this;
    return (
      <nav>
        <button
          className="btn"
          name="currentProjects"
          onClick={handleNavBar}
        >
          Current Projects
        </button>
        <button
          className="btn"
          name="buildProject"
          onClick={handleNavBar}
        >
          Build Project
        </button>
        <button
          className="btn"
          name="futureProjects"
          onClick={handleNavBar}
        >
          Future Projects
        </button>
      </nav>
    );
  }
}

export default NavBar;
