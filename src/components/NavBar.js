import React, { Component } from 'react';
import logo from '../logo.svg';

const backgroundshade = {
  backgroundImage: 'linear-gradient(blue, #0080ff)'
}

class NavBar extends Component {
  render() {
    return (
      <nav className="jumbotron"  style={backgroundshade}>
        <h1 className="float-left text-white"><img src={logo} className="App-logo" alt="logo" />Play What?!</h1>  {/*using className float-left to move header to the left*/}
      </nav>
    )
  }
}
export default NavBar
