import React, { Component} from 'react';
import './App.scss';
import NavBar from "../../Components/NavBar";
import Video from "../../Components/Video";
import Landing from "../../Components/Landing";
import Cube from "../../Components/Cube";
import TheSpiel from "../../Components/TheSpiel";
import Contact from "../../Components/Contact";


class App extends Component {

  render() {
    return (
      <div className="overlayBlock">
      <NavBar/>
        <Video/>
        <Landing/>
        <Cube/>
        <TheSpiel/>
        <Contact/>
      </div>
    );
  }
}
export default App;
