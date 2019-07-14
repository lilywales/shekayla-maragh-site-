import React from 'react';
// import MediaQuery from 'react-responsive';
import './content.scss'

const Content = props => {
  const styles ={
    cDesktop: {
      position: 'absolute',
      color:    'white',
      fontSize: '1.2rem',
      fontFamily: 'Raleway',
      left: '5%',
      top: '20%',
      lineHeight: '1.5'

    },
    cIpad: {
      position: 'absolute'
    },
    cPhone: {
      position: 'absolute'
    }
  };
  return (
    <div>
      <p style={styles.cDesktop}>
      I am a <span className='boldText'> Creative Producer</span> and <span className='boldText'>Project <br/> Manager.</span><br/>
      I sometimes play key roles in <span className='boldText'>music<br/>  projects.</span><br/>
      I have also produced some cross art-<br/> form <span className='boldText'>festivals.</span><br/>
      <br/>
      Mainly music though.
      <br/> <br/>
      Based in the UK, but usualy wherever I<br/> need to be.
      </p>
    </div>
  );
};

export default Content;
