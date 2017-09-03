import React, { Component } from 'react';
import logo from '../logo.svg';

const backgroundshade = {
}

class NavBar extends Component {
  render() {
    return (
      <nav className="jumbotron"  style={backgroundshade}>
        <h1 className="float-left text-red"><img src={logo} className="App-logo" alt="logo" />Play What?!</h1>
      </nav>
    )
  }
}
export default NavBar
