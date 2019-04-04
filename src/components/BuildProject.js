import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

export class BuildProject extends Component {
  render() {
    return (
      <form>          
        <label>
          Project Name:
          <input type="text" name="name" />
        </label>

        <label>
          JobSite Photo:
          <input type="image" name="name" />
        </label>

        <label>
          Client Phone #
          <input type="text" name="name" />
        </label>

        <label>
          JobSite Address:
          <input type="text" name="name" />
        </label>

        <label>
          Budget:
          <input type="text" name="name" />
        </label>

        <label>
          GC Notes:
          <input type="text" name="name" />
        </label>

        <label>
          Budget:
          <input type="text" name="name" />
        </label>

        <button className='stage-button'>Stage</button>
      </form>
    );
  }
}

export default BuildProject;
