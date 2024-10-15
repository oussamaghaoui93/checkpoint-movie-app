import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieApp from './Component/MovieApp';
import ShowMovie from './Component/ShowMovie';

function App() {

  // const addMovie = (newMovie) => {
  //   setMovies([...movies, newMovie]);
  //   setFilteredMovies([...movies, newMovie]);
  // };

  return (
    <div className="app">

      <Routes>
        {/* Route for the movie list */}
        <Route path="/" element={<MovieApp />} />
        {/* Route for showing movie details by ID */}
        <Route path="/movie/:id" element={<ShowMovie />} />
      </Routes>
    </div>
  );
};

export default App;
