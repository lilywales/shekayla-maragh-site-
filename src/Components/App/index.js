import React, { Component} from 'react';

import './App.scss';
import NavBar from "../../Components/NavBar";

import Landing from "../../Components/Landing";
import Cube from "../../Components/Cube";
import Story from "../../Components/Story";
import Quote from "../../Components/Quote";
import Contact from "../../Components/Contact";



class App extends Component {

  render() {
    return (
      <div >
      <NavBar/>


        <Landing/>

        <Story/>
        <Quote/>
        <Cube/>
        <Contact/>
      </div>
    );
  }
}
export default App;
