import React from 'react';
import './ActorCard.css';

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actorName }) {
  let num = getRandomNumber(250, 400);

  return (
    <div className="actor-card" style={{
      backgroundImage: `url(https://picsum.photos/${num})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <h3>{actorName}</h3>
    </div>
  );
}