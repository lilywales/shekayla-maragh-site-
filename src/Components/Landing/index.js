import React, { Component } from 'react';
// import { ParallaxBanner, Parallax, Image } from 'react-scroll-parallax';
import './landing.scss';
import square from "./square.png";
import r from "./r.png";


class Landing extends Component {
  render() {
    return (
      <div className = 'container' >
        <div className='homeArtwok'>
          <img className="square" src={square} alt="" />
          <img className="r" src={r} alt="" />
        
        </div>
        <div className = 'homeTitles'>
          <h1 className = 'name' >Shekayla Maragh </h1>
          <h2 className = 'role' >Creative Producer / Project Manager <br / >  Mainly Music </h2>
        </div>
      < /div >
    );
  }
}

export default Landing;
