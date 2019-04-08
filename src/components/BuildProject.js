import React, { Component } from "react";
import axios from "axios";

export class BuildProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobSiteName: "",
      jobSiteImage: "",
      jobSiteAddress: "",
      budget: "",
      gcNotes: ""
    };

    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/futureProjects", {
        jobSiteName: this.state.jobSiteName,
        jobSiteImage: this.state.jobSiteImage,
        jobSiteAddress: this.state.jobSiteAddress,
        budget: this.state.budget,
        gcNotes: this.state.gcNotes
      })
      .then(response =>
        this.setState({
          jobSiteName: "",
          jobSiteImage: "",
          jobSiteAddress: "",
          budget: "",
          gcNotes: ""
        })
      );
  }

  render() {
    let { change } = this;
    let { onSubmit } = this;
    return (
      <div>
        <form>
          <label>
            Project Name:
            <input
              onChange={change}
              placeholder="Jobsite Name"
              type="text"
              name="jobSiteName"
              value={this.state.jobSiteName}
            />
          </label>

          <label>
            Image:
            <input
              onChange={change}
              placeholder="Jobsite Image"
              type="url"
              name="jobSiteImage"
              value={this.state.jobSiteImage}
            />
          </label>

          <label>
            Project Address:
            <input
              onChange={change}
              placeholder="Jobsite Address"
              type="text"
              name="jobSiteAddress"
              value={this.state.jobSiteAddress}
            />
          </label>

          <label>
            Budget:
            <input
              onChange={change}
              placeholder="Budget"
              type="number"
              name="budget"
              value={this.state.budget}
            />
          </label>

          <label>
            GC Notes:
            <input
              onChange={change}
              placeholder="Notes"
              type="text"
              name="gcNotes"
              value={this.state.gcNotes}
            />
          </label>

          <button onClick={onSubmit} className="stage-button">
            Stage
          </button>
        </form>
      </div>
    );
  }
}

export default BuildProject;
