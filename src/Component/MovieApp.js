import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

const MovieApp = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false); // Add a state to track filtering status

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDFhNzFlN2VmOTdjNjA4YWFkYjgzNDg1Njk3OTBlMyIsIm5iZiI6MTcyODM4NjgxNi45MzY0Mywic3ViIjoiNjcwNTE1NmM0YjBjNWI5ZDcxNjlkMzQzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wvgU1hQUWRV1fjm4rTs6DA-PIs8eedcgBYgl1KFJViQ'
            }
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results); // Store the fetched movies in state
                setFilteredMovies(data.results); // Initially, set filteredMovies to be the same as movies
            })
            .catch((err) => console.error('Error fetching movies: ' + err));
    }, []);

    const handleFilter = ({ title, rating }) => {
        setIsFiltering(true); // Set filtering status to true
        const filtered = movies.filter((movie) => {
            return (
                movie.title.toLowerCase().includes(title.toLowerCase()) &&
                movie.vote_average >= rating
            );
        });
        setFilteredMovies(filtered); // Update filteredMovies based on filter criteria
    };
    const add = (newMovie) => {
        setMovies([...movies, newMovie]);
    };
    return (
        <div>
            <h1>Popular Movies</h1>

            <Filter onFilter={handleFilter} />
            {/* Display filteredMovies only if filtering is active; otherwise, show the full movies list */}
            <MovieList movies={isFiltering ? filteredMovies : movies} />
            <AddMovie add={add} class="mx-auto" />
        </div>
    );
};





export default MovieApp;
