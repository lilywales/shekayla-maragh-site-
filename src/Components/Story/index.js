import React, { Component } from "react";
import "./story.scss";
import email from "./email.png";
import insta from "./insta.png";
import backgroundCollage from "./backgroundCollage.jpg";

class Story extends Component {
  render() {
    return (
      <div id="story" className="story">
          <img className="backgroundCollageBlue" src={backgroundCollage} alt="" />
        <div className="storyTextBoxContainer">
       
          <div className="storyTextBox">
            <h3>Story so far</h3>
            <p>
              Hiya, I’m Shekayla,
              <br />
              <br />
              A Creative Producer and Project Manager. I work cross art-form
              with a heart for creative development and a specialism in live
              music touring and festival and event production. I'm also the
              founder and director of CUBE, a talent and development agency,
              formed to serve and support music creatives in the Midlands.
              <br />
              <br />
              I have worked nationally and internationally on interdisciplinary
              cultural projects and produced and delivered for a range of arts
              organisations and brands. I love working with bright teams and
              confident to work solo when duty calls. I'm drawn to the earliest
              stage of concept development and love being part of a build. I've
              led teams, managed stakeholder relationships and budgets, curated
              programmes and have a sharp eye for production and logistics -
              feel free to have a gander at my projects below. From time to time
              I’m asked to speak on panels and to guest lecture at universities
              such as Sørveiv music conference and Birmingham City University.
              <br />
              <br />
              No one has time to read large volumes of text these days, I once
              read that humans attention span is now less than that of a
              goldfish. If you're still reading and what to find out more about
              me or would like to connect, drop me a line. I'm always open to
              listening.
              <br />
              <br />
              <img
                className="email"
                src={email}
                alt="white enevolpe to signify email address"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
              <a href="mailto:shekayla.m@me.com?Subject=Hello" target="_top">
                shekayla.m@me.com
              </a>{" "}
              <img
                className="email"
                src={insta}
                alt="white enevolpe to signify email address"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              <a href="https://www.instagram.com/shekayla_maragh/">
                shekayla_maragh
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
