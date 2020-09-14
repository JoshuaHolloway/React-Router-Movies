import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList(props) {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (

    <Link to='/movies/1'>
      <div className="movie-card" onClick={ () => {
            console.log('clicked!');
            console.log('clicked!');
            console.log('clicked!');
        } }>

        


        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
