import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    if (movies.length === 0) {
        return <p>No movies found.</p>; // Display a message if no movies match the filter
    }
    console.log(movies);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
