import React, { useState } from "react";
import movies from "./movies";
import "./App.css";
import MovieItem from "./components/MovieItem";
import Footer from "./components/Footer";

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
          <MovieItem key={movie.title} movie={movie} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default App;
