import React, { Component } from 'react';
import './cube.scss'

class Cube extends Component {
    render(){
  return (
      <div id='cube' className="cube">
        <div className="cubeTextBoxContainer">
          <div className="cubeTextBox">
          </div>
        </div>
      </div>
  );
}
}

export default Cube;
