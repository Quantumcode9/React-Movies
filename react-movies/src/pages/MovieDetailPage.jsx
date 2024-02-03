import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data';

export default function MovieDetailPage() {
    const { movieTitle } = useParams();
    const movie = movies.find((m) => m.title === movieTitle);
    
return (
    <div>
        {movie ? (
        <>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.releaseDate}</p>
            <img src={movie.posterPath} alt={movie.title} />
            <p>Cast: {movie.cast.join(', ')}</p>
        </>
        ) : (
        <p>Movie not found</p>
        )}
    </div>
    );
}
