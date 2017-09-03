import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <PlayListForm userName={this.state.userName}
                        songArtist={this.state.songArtist}
                        songTitle={this.state.songTitle}
                        songNotes={this.state.songNotes}  />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
