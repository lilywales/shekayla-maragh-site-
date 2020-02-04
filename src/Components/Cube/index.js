import React, { Component } from 'react';
import './cube.scss'

class Cube extends Component {
    render(){
  return (
      <div id='cube' className="cube">
        <div className="cubeTextBoxContainer">
          <div className="cubeTextBox">
            <h3>CUBE</h3>
            <p>CUBE was formed from a need to provide support and develop the artistic interests and ambitions of music creatives, particularly those located in the Midlands.
            <br/><br/>
            CUBE is an enabler, it invigorates opportunities for creators, practices meaningful creative development and activates space for thinkers and doers through mentoring, consultancy and practical music courses and education. CUBE supports creative freedom and discovery for those in pursuit of building a sustainable career within music. That is at the heart of who we are.
            <br/><br/>
            Being conscious of the talent I get to work with daily is an evergreen inspiration, however, having lived and worked in the Midlands for some time you come to terms with the challenges and frustration that come with an infrastructure that is not yet fully built. It requires the collective work of those who have the passion, genuinity, skills and networks to construct a healthy music ecology that can hold its weight, and have clear pathways to real opportunities with approved and favoured music cities.
            <br/><br/>
            More from CUBE soon, stay locked.
<           br/><br/>
            Interested in supporting the build? email us: hello@wearecube.space
            </p>
          </div>
        </div>
      </div>
  );
}
}

export default Cube;
