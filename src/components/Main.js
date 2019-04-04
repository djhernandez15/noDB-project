import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <main>
        <button
            className="btn"
            onClick={() => this.handleClick()}
          >
            Current Projects
          </button>
          <button className="btn">Build Project</button>
          <button className="btn">Future Projects</button>
      </main>
    )
  }
}

export default Main
