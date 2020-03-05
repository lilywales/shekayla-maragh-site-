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
            <div className="flex-container">
              <div>
                <img className="j" src={ameriie} alt="" />
              </div>{" "}
              <div>
                <img className="j" src={diaspora} alt="" />
              </div>{" "}
              <div>
                <img className="j" src={glasto} alt="" />
              </div>{" "}
              <div>
                <img className="m" src={jordan} alt="" />
              </div>
              <div>
                <img className="q" src={loudSide} alt="" />
              </div>{" "}
              <div>
                <img className="j" src={loudBhangra} alt="" />
              </div>
              <div>
                <img className="j" src={ines} alt="" />
              </div>{" "}
              <div>
                <img className="j" src={tourAme} alt="" />
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Projects;
