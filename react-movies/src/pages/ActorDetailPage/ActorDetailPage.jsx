import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../../data';
import './ActorDetailPage.css';

function ActorDetailPage() {
  const { actorName } = useParams();

  const actorMovies = movies.filter(movie => movie.cast.includes(actorName));

  return (
    <div className='actor-page'>
      <h2>{actorName}</h2>
      <h3>Movies</h3>
      <hr />
      <ul className="credit-list">
        {actorMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default ActorDetailPage;