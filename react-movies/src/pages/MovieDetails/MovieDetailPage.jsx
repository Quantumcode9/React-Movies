import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../../data';
import './MovieDetailPage.css';


export default function MovieDetailPage() {
    const { movieName } = useParams();
    const movie = movies.find((m) => m.title === movieName);
    
return (
    <div>
        {movie ? (
        <>
        <div className="movie-detail-container">
  <div className="poster-card">
  <div className="movie-poster">
    <img src={movie.posterPath} alt={movie.title} style={{ maxWidth: '600px' }} />
  </div>
    </div>
  <div className="detail-info">
    <h2>{movie.title}</h2>
    <p>Release Date: {movie.releaseDate}</p>
    </div>
    <ul className='cast-list'>
      {movie.cast.map((castMember, index) => (
        <li key={index}>{castMember}</li>
      ))}
    </ul>
  
</div>
    
        </>
        ) : (
        <p>Movie not found</p>
        )}
    </div>
    );
}
