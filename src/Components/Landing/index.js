import React, { Component } from "react";
// import { ParallaxBanner, Parallax, Image } from 'react-scroll-parallax';
import "./landing.scss";
import collage1 from "./collage1.jpg";
import collage2 from "./collage2.jpg";
import collage3 from "./collage3.jpg";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="homeArtwok animated slideInUp">
          <img className="collage1" src={collage1} alt="" />
          <img className="collage2" src={collage2} alt="" />
          <img className="collage3" src={collage3} alt="" />
        </div>
        <div className="homeTitles">
          <h1 className="name animated slideInUp">Shekayla Maragh </h1>
          <h2 className="role animated slideInUp">
            Creative Producer / Project Manager <br /> Mainly Music{" "}
          </h2>
        </div>
      </div>
    );
  }
}

export default Landing;
