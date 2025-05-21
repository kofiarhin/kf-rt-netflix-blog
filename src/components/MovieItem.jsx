import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2 className="movie-title">Title: {movie.title}</h2>
      <p className="movie-genre">Genre: {movie.genre}</p>
      <p className="movie-description">Description: {movie.description}</p>
      <p className="movie-year">Year: {movie.year}</p>
      <p className="movie-characters">
        Main Characters: {movie.mainCharacters.join(", ")}
      </p>
    </div>
  );
};

export default MovieItem;
