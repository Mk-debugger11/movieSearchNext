"use client";
import '../globals.css'
export default function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <div className="movie-card">
      <img
        src={posterUrl}
        className="rounded"
      />
    </div>
  );
}