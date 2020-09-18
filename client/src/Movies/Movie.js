import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Movie({saved, setSaved}) {
  const [movie, setMovie] = useState();


  // let id = movie.id;
  const { id } = useParams(); // grab dynamic part of route
  console.log('id: ', id);

  useEffect(() => {
      axios
        .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [id] /* This effect should run every time time the `id` changes */
  );

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div
        className="save-button"
        onClick={(event) => {
          console.log('Movie.js - save-button - movie: ', movie);

          // Custom logic to ensure no duplicates :)
          let duplicate = false;
          for (let i = 0; i < saved.length; ++i) {
              if (movie === saved[i]) {
                duplicate = true;
                break;
              }
          }
          if (!duplicate)
            setSaved([...saved, movie]);
        }}
      >Save</div>
    </div>
  );
}
