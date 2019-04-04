import React, { Component } from "react";
import axios from "axios";

export class BuildProject extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            futureProjects: []
        };
    }
    
    addProject() {
        let project = {
            jobSiteName: this.jobSiteName.value,
            jobSiteImage: this.jobSiteImage.value,
            jobSiteAddress: this.jobSiteAddress.value,
            budget: this.budget.value,
            gcNotes: this.gcNotes.value
        };

    axios.post('http://localhost:5050/api/futureProjects', project).then(response => {
        console.log('yes');
        this.setState({ futureProjects : response.data});
    }
    
    render() {
    return (
      <form>          
        <label>
          Project Name:
          <input type="text" name="name" />
        </label>

        <image styling={{maxWidth: "100px",
    maxHeight: "100px"}}>
        </image>

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
