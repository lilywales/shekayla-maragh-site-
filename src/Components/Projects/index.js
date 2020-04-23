import React, { Component } from "react";

import ameriie from "./AmeriieTour.png";
import diaspora from "./DiasporaBritain.png";
import glasto from "./Glastonbury.png";
import ines from "./InesElsaDalalDiasporaBritain.png";
import jordan from "./JordanMackampaLiveandLoud.png";
import loudSide from "./LiveandLoudsideman.png";
import loudBhangra from "./LiveandLoudBhangra.png";
import tourAme from "./PunchtourAmeriie.png";

import "./projects.scss";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects"> 
        <div className="projectsTextBoxContainer">
          <div className="projectsTextBox">
            <h3> Projects </h3>{" "}
          <div className="projects-flex-container">
                <div class="container the-projects">
                <img className="projectImage image the-projects" src={ameriie} alt="" />
               <div class="overlay">
                 <div class="text"><p>Ameriie Tour</p></div>
               </div>
              </div>
              <div class="container the-projects">
                <img className="projectImage image the-projects" src={diaspora} alt="" />
                <div class="overlay">
                   <div class="text"><p>Diaspora Britain</p></div>
                </div>
              </div>
              <div class="container the-projects">
              <img className="projectImage image the-projects" src={glasto} alt="" />
                <div class="overlay">
                   <div class="text"><p>Glastonbury</p></div>
                </div>
              </div>
              <div class="container the-projects">
              <img className="projectImage image the-projects" src={jordan} alt="" />
                <div class="overlay">
                   <div class="text"><p>Jordan Mackampa</p></div>
                </div>
              </div>
              <div class="container the-projects">
              <img className="projectImage image the-projects" src={loudSide} alt="" />
                <div class="overlay">
                   <div class="text"><p>Live and Loud Sideman</p></div>
                </div>
              </div>
              <div class="container the-projects">
              <img className="projectImage image the-projects" src={loudBhangra} alt="" />
                <div class="overlay">
                   <div class="text"><p>Live and Loud Bhangra</p></div>
                </div>
              </div>
              <div class="container" the-projects>
              <img className="projectImage image the-projects" src={ines} alt="" />
                <div class="overlay">
                   <div class="text"><p>Diaspora Britain</p></div>
                </div>
              </div>
              <div class="container ">
              <img className="projectImage image the-projects" src={tourAme} alt="" />
                <div class="overlay">
                   <div class="text"><p>Punch tour Ameriie</p></div>
                </div>
              </div>
            
            <div>
              
            
            
            
            </div>{" "}
             
             
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Projects;
