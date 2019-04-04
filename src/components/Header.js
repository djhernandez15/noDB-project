import React, { Component } from "react";
import logo from "../images/logo.png";

export class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" />
        <h1>Under Construction</h1>
      </header>
    );
  }
}

export default Header;
