import React, { Component } from "react";
import "./logos.scss";
import ace from "./ace.png";
import astonish from "./Astonish-logo.png";
import bside from "./B-Side-Fest.png";
import hippodrome from "./BrumHippodrome.png";
import cube from "./Cube-logo.png";
import cwg from "./CWG-2022.png";
import mp from "./MP.png";
import mu from "./MU.png";
import nae from "./nae.png";
import peggy from "./peggys-primary-logo.png";
import pmg from "./PMG.png";
import punch from "./punch-logo.png";
import selfridges from "./Selfridges.png";
import sorveiv from "./sorveiv.jpg";
import ted from "./TEDx-Youthbrum.png";
import tw from "./TW.png";
import keychange from "./keychange.png";
import backgroundCollage from "./backgroundCollage.jpg";

class Logos extends Component {
  render() {
    return (
      <div id="story" className="logos">
         <img className="backgroundCollageBlue" src={backgroundCollage} alt="" />
        <div className="logosTextBoxContainer">
          <div className="logosTextBox">
            <div className="logos-flex-container">
              <div>
                <img className="the-logos" src={cube} alt="" />
              </div>
              <div>
                <img className="the-logos" src={tw} alt="" />
              </div>
              <div>
                <img className="the-logos" src={astonish} alt="" />
              </div>
              <div>
                <img className="the-logos" src={bside} alt="" />
              </div>
              <div>
                <img className="the-logos" src={hippodrome} alt="" />
              </div>
              <div>
                <img className="the-logos" src={ace} alt="" />
              </div>
              <div>
                <img className="the-logos" src={cwg} alt="" />
              </div>
              <div>
                <img className="the-logos" src={nae} alt="" />
              </div>
              <div>
                <img className="the-logos" src={pmg} alt="" />
              </div>

              <div>
                <img className="the-logos" src={peggy} alt="" />
              </div>
              <div>
                <img className="the-logos" src={selfridges} alt="" />
              </div>
              <div>
                <img className="the-logos" src={sorveiv} alt="" />
              </div>
              <div>
                <img className="the-logos" src={punch} alt="" />
              </div>
              <div>
                <img className="the-logos" src={ted} alt="" />
              </div>
              <div>
                <img className="the-logos" src={mp} alt="" />
              </div>
              <div>
                <img className="the-logos" src={mu} alt="" />
              </div>
              <div>
                <img className="the-logos" src={keychange} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logos;
