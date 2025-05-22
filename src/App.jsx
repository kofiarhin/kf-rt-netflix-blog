import React, { useState, useEffect } from "react";
// your other imports

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  // 👇 Add this effect to handle animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const cards = document.querySelectorAll(".movie-card");
    cards.forEach((card) => observer.observe(card));

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