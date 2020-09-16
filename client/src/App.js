import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import axios from 'axios';

// Components
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

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

  // Stretch:
  const addToSavedList = id => {
    /* This is stretch. Prevent the same movie from being "saved" more than once */
  };

  return (
    <div>
      <Link to='/'>Home</Link>

      <SavedList list={[ /* This is stretch */]} />

      <Route exact path='/'>
        {
          console.log('movieList: ', movieList)
        }
        <MovieList movies={movieList}></MovieList>
      </Route>

      <Route path='/movies/:id'>

      </Route>
    </div>
  );
}
