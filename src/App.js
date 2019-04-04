import React, { Component } from "react";
import "./App.css";
import CurrentProject from "./components/CurrentProject";
import Dashboard from './components/Dashboard'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "currentProject"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ CurrentProject });
  }

  render() {
    return (
      <body>
        <Dashboard />
      </body>
    );
  }
}

export default App;
