import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';

import './Curtain.css';

const Curtain = ({ isOpen, from }) => {
  const props = useSpring({ height: isOpen ? '100%' : '0%' });

  return (
    <animated.div
      className='Curtain'
      style={props}
    />
  );
};

Curtain.propTypes = {
  isOpen: PropTypes.bool,
};

Curtain.defaultProps = {
  isOpen: false,
};

export default Curtain;
