// CardList.js
import React from 'react';
import Card from './Card';

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items?.map((item, i) => (
        <Card key={item.Id} item={item} isEven={i % 2 === 0} />
      ))}
    </div>
  );
};

export default CardList;
