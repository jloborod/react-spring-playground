import React from 'react';
import { animated, useSpring } from 'react-spring';

import './Curtain.css';

const Curtain = ({ isOpen }) => {
  const props = useSpring({ height: isOpen ? '100%' : '0%' });

  return (
    <animated.div
      className='Curtain'
      style={props}
    />
  );
};

export default Curtain;
