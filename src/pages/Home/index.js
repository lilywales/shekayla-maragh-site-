import React, { Component} from 'react';
import Background from "../../Components/Background";
import ShekaylaMaragh from "../../Components/ShekaylaMaragh";
import Content from "../../Components/Content";

class Home extends Component {
  render() {
    return (
      <div>
        <Background/>
        <Content/>
        <ShekaylaMaragh/>
      </div>
    );
  }
}
export default Home;
