import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ShowMovie = () => {
    const { id } = useParams(); // Get the movie ID from the URL
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`; // Use dynamic ID
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDFhNzFlN2VmOTdjNjA4YWFkYjgzNDg1Njk3OTBlMyIsIm5iZiI6MTcyODM4NjgxNi45MzY0Mywic3ViIjoiNjcwNTE1NmM0YjBjNWI5ZDcxNjlkMzQzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wvgU1hQUWRV1fjm4rTs6DA-PIs8eedcgBYgl1KFJViQ'
                    }
                };

                const response = await axios.get(url, options);
                setMovie(response.data);
            } catch (err) {
                setError('Error fetching movie data');
            }
        };

        fetchMovie();
    }, [id]); // Dependency array includes 'id'

    if (error) {
        return <div>{error}</div>;
    }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <button onClick={() => navigate('/')}>Back to Home</button>


            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
            />
            <p>{movie.overview}</p>
            <ul>
                <li>Release Date: {movie.release_date}</li>
                <li>Runtime: {movie.runtime} minutes</li>
                <li>Budget: ${movie.budget.toLocaleString()}</li>
                <li>Revenue: ${movie.revenue.toLocaleString()}</li>
                <li>Vote Average: {movie.vote_average}/10</li>
                <li>Vote Count: {movie.vote_count}</li>
                <li>Status: {movie.status}</li>
            </ul>
            <h3>Genres</h3>
            <ul>
                {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
            <h3>Production Companies</h3>
            <ul>
                {movie.production_companies.map((company) => (
                    <li key={company.id}>
                        {company.logo_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                                alt={company.name}
                                style={{ width: "50px", height: "auto", marginRight: "8px" }} // Adjust size and margin as needed
                            />
                        ) : (
                            <span></span> // Fallback if no logo is available
                        )}
                        {company.name}
                    </li>
                ))}
            </ul>
            <h3>Spoken Languages</h3>
            <ul>
                {movie.spoken_languages.map((language) => (
                    <li key={language.iso_639_1}>{language.english_name}</li>
                ))}
            </ul>


        </div>
    );
};

export default ShowMovie;
