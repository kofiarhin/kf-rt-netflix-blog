import React, { useState } from "react";
import movies from "./movies";
import "./App.css";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="app-container">
      <h1 className="app-title">Netflix Movies</h1>

      <div className="dropdown-container">
        <select
          className="genre-dropdown"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.title} className="movie-card">
            <h2 className="movie-title">Title: {movie.title}</h2>
            <p className="movie-genre">Genre: {movie.genre}</p>
            <p className="movie-description">
              Description: {movie.description}
            </p>
            <p className="movie-year">Year: {movie.year}</p>
            <p className="movie-characters">
              Main Characters: {movie.mainCharacters.join(", ")}
            </p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>Created by Kofi Arhin</p>
      </footer>
    </div>
  );
};

export default App;
