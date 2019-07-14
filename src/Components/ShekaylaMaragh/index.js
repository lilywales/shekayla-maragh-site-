import React from 'react';
import MediaQuery from 'react-responsive';

const ShekaylaMaragh = props => {
  const styles ={
    smDesktop: {
      position: 'absolute',
      color:    'white',
      fontSize: '4rem',
      fontFamily: 'Roboto',
      right: '5%',
      bottom: '50%'

    },
    smIpad: {
      position: 'absolute'
    },
    smPhone: {
      position: 'absolute'
    }
  };
  return (
    <div>
      <h1 style={styles.smDesktop}>
        Shekayla Maragh
      </h1>
    </div>
  );
};

export default ShekaylaMaragh;
