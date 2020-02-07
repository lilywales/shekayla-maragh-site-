import React, { Component } from 'react';
import square from "./square.jpg";
import j from "./j.jpg";
import m from "./m.jpg";
import q from "./q.jpg";
import './projects.scss'

class Projects extends Component {
    render(){
  return (

      <div id="projects" className="projects">
        <div className="projectsTextBoxContainer">
          <div className="projectsTextBox">
            <h3>Projects</h3>
            <div class="flex-container">
              <div>
                <img className="square" src={square} alt="" />
                <p>
              Punch
                <br/>  <br/>
                Role: Tours and Events Coordinator
                Year: 2014-17
                <br/>  <br/>
                <a>
                Lead and co-produced its live music programme and festival.
                Examples of live shows and tours produced:  Ameriie, Tarrus Riley, Angie Stone, Bridget Kelly, Channel One, Mad Professor, Lady Leshurr, Shakka, Ghetts, Roxxxan, Misha B, Miraa May, Homelands (Dominica).
                </a>
                <br/><br/>
                Location: UK wide x  International.
                </p>
              </div>
              <div>
                <img className="j" src={j} alt="" />
                <p>
                Live and Loud festival (Selfridges)
                <br/><br/>
                Role: Creative Producer
                <br/><br/>
                <a>
                Task: Produce and innovative music experience that celebrates Birmingham's music heritage across Bhangra and contemporary music.
                </a>
                <br/><br/>
                Location: Birmingham
                <br/><br/>
                Year: 2017/18
                </p>
              </div>
              <div>
                <img className="m" src={m} alt="" />
                <p>B-Side Hip Hop Festival
                <br/><br/>
                Role: Producer
                <br/><br/>
                <a>Task: Deliver the UKs largest hip hop festival dedicated to showcasing and celebrating local and international Hip Hop talent and culture.
                <br/><br/>
                </a>
                Location: Birmingham
                <br/><br/>
                Year: 2017/18
                </p>
              </div>
              <div>
                <img className="q" src={q} alt="" />
                <p>
                Commonwealth Games handover
                Role: Crew member of production team
                Year: 2018
                Location: Birmingham
                </p>
              </div>
              <div>
                <img className="j" src={j} alt="" />
                <p>
                Glastonbury
                Role: Stage management team (Gully Stage)
                Year: 2016
                </p>
              </div>
              <div>
                <img className="m" src={m} alt="" />
                <p>Diaspora Britain at Millennium Point
                Role: Creative Producer commissioned by Punch
                Year: 2015
                Location: Birmingham
                </p>
              </div>
              <div>
                <img className="m" src={m} alt="" />
                <p>TEDxYouth@Brum
                Role: Production Manager
                Year: 2018
                Location: Birmingham
                </p>
              </div>
              <div>
                <img className="square" src={square} alt="" />
                <p>
                Tomorrow's Warriors The Reggae Ticket
                Role: Project Manager
                Year: 2019/20
                Location: UK Wide
                </p>
              </div>
              <div>
                <img className="q" src={q} alt="" />
                <p>Sørveiv Music Conference
                Role: Speaker
                Year: 2017/18
                Location: Norway
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default Projects;
