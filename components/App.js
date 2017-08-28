import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';

class App extends Component {
  constructor(props){
    super(props){
      this.state = {
        userName: "",
        songArtist: "",
        songTitle: "",
        songNotes: ""
      }
    }
    render(){
      return(
      <div ClassName="App">{
        <NavBar/>
        <div ClassName="row">
          <PlayListForm userName=
                        songArtist=
                        songTitle=
                        songNotes=   />
        </div>
      </div>
            );
    }
  }

export default App;
