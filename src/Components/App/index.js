import React, { Component} from 'react';

import './App.scss';
import NavBar from "../../Components/NavBar";

import Landing from "../../Components/Landing";
import Cube from "../../Components/Cube";
import Story from "../../Components/Story";
import Quote from "../../Components/Quote";
import Projects from "../../Components/Projects";
import Contact from "../../Components/Contact";
import Logos from "../../Components/Logos";



class App extends Component {

  render() {
    return (
      <div >
      <NavBar/>


        <Landing/>

        <Story/>
        <Quote/>
        <Cube/>
        <Projects/>
        <Contact/>
        <Logos/>
      </div>
    );
  }
}
export default App;
