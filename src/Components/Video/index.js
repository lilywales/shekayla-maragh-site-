import React from 'react';
import vid from './thsh.mov';
import one from './one.png';


const Video = props => {
	const styles = {
		video: {
			position: 'absolute',
			top: '30%',
			right: '12%',
			height: '14%',
			width: 'auto',

		},
		one: {
			position: 'absolute',
			top: '30%',
			right: '15%',
			height: '14%',
			width: 'auto',
			opacity: '0'

		}
	};
	return (
    <div >
      <video style={styles.video} autoPlay loop muted >
          <source src= {vid}
          type='video/mp4'/>
      </video>
			<img
				style={styles.one}
				src={one}
				alt="cube"
			/>
    </div>
  );
    };


  export default Video;
