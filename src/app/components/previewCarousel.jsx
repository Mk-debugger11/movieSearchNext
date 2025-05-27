"use client"
import React, { useEffect, useState } from 'react';
import '../globals.css';

function Preview({movieId}) {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bdfbe253a0002085df2d4abcadaf1f17`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, []);
    if (!movie) {
        return <p style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;
      }
    const backdropUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : 'https://via.placeholder.com/1280x720?text=No+Image';
    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';

    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

    return (
        <div className="preview-container" style={{ backgroundImage: `url(${backdropUrl})`, backgroundPosition: 'top'}}>
            <div className="preview-content">
                <h1 className="preview-title">{movie.title}</h1>
                <p className="preview-subtitle">
                    {releaseYear} • ★ {rating} / 10
                </p>
                <p className="preview-description">{movie.overview}</p>
            </div>
        </div>
    );
}

export default Preview;
