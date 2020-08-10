import React from 'react';

function Movie({ movie }) {
  return (
    <div className="movie">
      <img width="200px" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <h2>{movie.original_title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
}

export default Movie;
