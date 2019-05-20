import React from 'react';
import { animated, useSpring } from 'react-spring';

import './Curtain.css';

const Curtain = ({ isOpen }) => {
  const props = useSpring({ height: isOpen ? '200px' : '0px' });

  return (
    <animated.div
      className='Curtain'
      style={props}
    />
  );
};

export default Curtain;
