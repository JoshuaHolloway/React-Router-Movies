import React from 'react';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie,_) => (
        <span key={_} className="saved-movie">{movie.title}</span>
      ))}
    </div>
  );
}
