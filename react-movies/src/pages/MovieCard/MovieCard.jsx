import React from 'react';
import './MovieCard.css';

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-image" style={{ backgroundImage: `url(${movie.posterPath})` }}></div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Release Date: {movie.releaseDate}</p>
        </div>
    </div>
  );
}