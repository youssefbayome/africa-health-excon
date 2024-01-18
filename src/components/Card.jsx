// Card.js
import React from 'react';
import '../styles/card.scss';
const Card = ({ item ,isEven}) => {
  return (
    <div className={`card ${isEven ? 'even' : 'odd'}`}>
      <img src={item.Media} alt={item.Title} className='card-media'/>
      <div className="card-content">
        <p>{item.Title}</p>
        {/* Add additional content here if needed */}
      </div>
    </div>
  );
};

export default Card;
