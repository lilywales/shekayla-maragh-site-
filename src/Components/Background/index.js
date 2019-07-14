import React, {Component} from 'react';
import MediaQuery from "react-responsive";
import "./background.scss"
import vid from "./vid.mp4";


class Background extends Component {
render() {
  return (
    <div >
    <MediaQuery minWidth={900}>
      <div className="container">
       <video className='videoTag' autoPlay loop muted >  >
          <source src={vid} type='video/mp4'  />
       </video>
      </div>
       <div className='colourBloc'/>

    </MediaQuery>










    <MediaQuery minWidth={601} maxWidth={899}>
    <div className="container">
     <video className='videoTag' autoPlay loop muted >  >
        <source src={vid} type='video/mp4'  />
     </video>
    </div>
     <div className='colourBloc'/>

    </MediaQuery>








    <MediaQuery maxWidth={600}>
    <div className="container">
     <video className='videoTag' autoPlay loop muted >  >
        <source src={vid} type='video/mp4'  />
     </video>
    </div>
     <div className='colourBloc'/>

    </MediaQuery>
    </div>
  );
}
}

export default Background;
