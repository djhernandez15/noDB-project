import React from 'react'

export default function Form() {
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
            JobSite Address:
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
  )
}
