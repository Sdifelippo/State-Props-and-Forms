import React, { Component } from 'react';

const divStyle = {
  backgroundColor: '#70BBEB'
}

const styleWhite = {
  color: 'white',
  textShadow: '2px 2px #808080'
}

let cardblock = {
  height: '13rem'

}
class PlayListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let songs = this.props.state.songs.map( e => {
      return(
        <div key={e._id} className="card" style={divStyle} >
          <div className="card-block" >
            <h5 className="card-text text-left"><span style={styleWhite}>User:</span> {e.userName}</h5>
            <h5 className="card-text text-left"><span style={styleWhite}>Artist/Band:</span> {e.songArtist}</h5>
            <h5 className="card-text text-left"><span style={styleWhite}>Title:</span> {e.songTitle}</h5>
            <h5 className="card-text text-left"><span style={styleWhite}>Notes:</span> {e.songNotes}</h5>
          </div>
        </div>
      );
    });
    return(
      <div>
        <button type="button" className="btn btn-success float-left" onClick={this.props.onClick}>Update List</button>
        <br/><br/>
        <div id="scroll-area" >
          {songs}
        </div>
      </div>
    )
  }
}
export default PlayListItem
