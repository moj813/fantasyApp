// MainComponent.js

import React from 'react';
import './MainComponent.css';
import Tournaments from './Tournaments';

const MainComponent = ({ tournaments }) => {
  return (
    <div className="main-component">
      <Tournaments tournaments={tournaments} />
    </div>
  );
}

export default MainComponent;
