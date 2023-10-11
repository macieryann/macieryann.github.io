import React from 'react';
import './beach.css';
import { Typography } from '@mui/material';

function BeachComponent() {
  return (
    <div>
      <div className="sky"></div>
      <div className="sand"></div>
      <div className="wet-sand"></div>
      <div className="sea">
        <div className="seafoam"></div>
      </div>
      <div className="palm-tree">
        <div className="truck"></div>
        <div className="leaves">
          <div className="leaves-1"></div>
          <div className="leaves-2"></div>
          <div className="leaves-3"></div>
        </div>
      </div>
      <div className="sand-front"></div>
      <Typography>hello world</Typography>
    </div>
  );
}

export default BeachComponent ;