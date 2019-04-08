import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import NavBar from "./NavBar";


export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState({
      name
    });
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar handleClick={this.handleClick} name={this.state.name} />
        <Main name={this.state.name} />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
