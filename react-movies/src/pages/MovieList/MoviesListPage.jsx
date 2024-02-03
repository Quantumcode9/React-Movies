import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import { movies } from '../../data';
import './MoviesListPage.css';

export default function MoviesListPage() {
  return (
    <div className="movie-card-container">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.title}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}