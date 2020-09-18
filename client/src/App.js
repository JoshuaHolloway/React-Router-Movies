import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import axios from 'axios';

// Components
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // response.data is the array of movies
          const movies = response.data;
          // console.log('movies: ', movies);
          setMovieList(movies); // set state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <div>
      <Link to='/'>
        <div className="home-button">Home</div>
      </Link>

      <SavedList list={saved} />

      <Route exact path='/'>
        <MovieList movies={movieList}></MovieList>
      </Route>

      {/* How do I get the movie ID here? */}

      <Route path='/movies/:id' render={props => {}}>
        <Movie saved={saved} setSaved={setSaved}></Movie>
      </Route>
    </div>
  );
}
