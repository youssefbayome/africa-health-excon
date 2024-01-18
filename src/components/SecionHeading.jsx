// src/HeadingWithBackground.tsx

import React from 'react';
import '../styles/heading.scss';

const HeadingWithBackground = ({ text, showHorizontalLines }) => {
  return (
    <div
      className={`heading-with-background ${
        showHorizontalLines ? 'with-lines' : ''
      }`}>
      {showHorizontalLines && <div className="line before"></div>}
      <h2 className="text">{text}</h2>
      {showHorizontalLines && <div className="line after"></div>}
      <div className="background-text">{text}</div>
    </div>
  );
};



export default HeadingWithBackground;
