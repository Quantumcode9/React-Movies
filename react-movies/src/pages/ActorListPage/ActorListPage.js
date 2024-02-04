import React from 'react';
import { Link } from 'react-router-dom';
import ActorCard from '../ActorCard/ActorCard.jsx';
import { movies } from '../../data';



function ActorsListPage() {

  const allActors = new Set(movies.flatMap(movie => movie.cast));
  const uniqueActors = Array.from(allActors);

  return (
    <div className="movie-card-container">
      {uniqueActors.map(actorName => (
         <Link to={`/actors/${actorName}`} key={actorName}>
         <ActorCard actorName={actorName} />
       </Link>
     ))}

    </div>
  );
}

export default ActorsListPage;

