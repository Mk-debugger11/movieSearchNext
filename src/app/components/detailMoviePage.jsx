"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";

function DetailedMoviePage({ movieId }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=bdfbe253a0002085df2d4abcadaf1f17`
        );
        if (!res.ok) throw new Error("Failed to fetch movie");
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movie) {
    return <div className="loading">Movie not found</div>;
  }

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "https://via.placeholder.com/1280x720?text=No+Image";

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Poster";

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <div className="movie-page" style={{ backgroundImage: `url(${backdropUrl})` }}>
    <div className="overlay"></div>
    <div className="content">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/250x375?text=No+Image"
        }
        alt={movie.title}
        className="poster"
      />
      <div className="text">
        <h1 className="title">{movie.title}</h1>
        <p className="subtitle">
          {releaseYear} • ★ {rating} / 10
        </p>
        <p className="tagline">{movie.tagline}</p>
        <p className="description">{movie.overview}</p>

        <div className="additional-info">
          <p>
            <strong>Runtime:</strong> {movie.runtime} mins
          </p>
          <p>
            <strong>Budget:</strong>{" "}
            {movie.budget ? `$${movie.budget.toLocaleString()}` : "Unknown"}
          </p>
          <p>
            <strong>Revenue:</strong>{" "}
            {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "Unknown"}
          </p>
        </div>

        <div className="genres">
          {movie.genres &&
            movie.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default DetailedMoviePage;
