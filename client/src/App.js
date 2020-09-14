import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

// Components
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

// import SavedList from './Movies/SavedList';
// <SavedList list={[ /* This is stretch */]} />

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state


          // response.data is the array of movies
          const movies = response.data;
          setMovieList(movies); // set state

     
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>

      <Link to='/'>Home</Link>
      <Link to='/movies/1'>Link-1</Link>

      



      

     {/* <div>Replace this Div with your Routes</div> */}
      <Route exact path='/'>
        <MovieList movies={movieList} title={''} director={''} metascore={''}/>
      </Route>

      <Route path='/movies/:id' render={props => {
        const { id } = props.match.params;
        console.log('id: ', id);
      }}>
        <Movie id={1}></Movie>
      </Route>

    </div>
  );
}
