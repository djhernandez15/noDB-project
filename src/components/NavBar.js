import React, { Component } from "react";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e.target.name);
    // console.log("handleclick", e.target.name);
  }
  render() {
    return (
      <nav>
        <button
          className="btn"
          name="currentProjects"
          onClick={this.handleClick}
        >
          Current Projects
        </button>
        <button className="btn" name="buildProject" onClick={this.handleClick}>
          Build Project
        </button>
        <button
          className="btn"
          name="futureProjects"
          onClick={this.handleClick}
        >
          Future Projects
        </button>
      </nav>
    );
  }
}

export default NavBar;