import React, { useState } from 'react';

import Curtain from '../Curtain/Curtain';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Toggle Curtains</button>
      <Curtain isOpen={isOpen} />
    </div>
  );
}

export default App;
