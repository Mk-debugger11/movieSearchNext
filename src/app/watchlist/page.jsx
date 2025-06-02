"use client";
import '../globals.css'
import useMovieStore from '../store/moviesZustand';
import MovieCard from '../components/watchListDisplay';
export default function WatchlistPage() {
  const watchlist = useMovieStore(state => state.watchlist);

  return (
    <div className="watchlist-page">
      <h1>My Watchlist</h1>
      {watchlist && watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
