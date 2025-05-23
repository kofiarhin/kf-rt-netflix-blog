import React, { useState, useEffect } from "react";
import movies from "./movies"; // Make sure this is an array of movie objects
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

  // Animate movie cards when they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const movieCards = document.querySelectorAll(".movie-card");
    movieCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredMovies]);

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