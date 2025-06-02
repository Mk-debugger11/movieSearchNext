"use client"
import React from 'react'
import MovieRow from './components/movieFlex'
import Preview from './components/previewCarousel'
import useMovieStore from './store/moviesZustand'
import MovieCard from './components/watchListDisplay'
function Home() {
  const history = useMovieStore(state => state.history)
  return (
    <div className='main'>
      <div className="displayMovie">
        <Preview movieId={574475} />
      </div>
      {history.length !== 0 && <div className="history-page">
        <h1>You previously Watched</h1>
        <div className="history-flex">
          {history.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>}
      <MovieRow typeOfMovies="/popular" movieType="Popular Movies" forGenre="/" endpoints="" />
      <MovieRow typeOfMovies="/top_rated" movieType="Top Rated" forGenre="/" endpoints="" />
      <MovieRow forGenre="/discover/" movieType="The Sci-Fi Sphere" typeOfMovies="" endpoints="&with_genres=878" />
      <MovieRow forGenre="/discover/" movieType="War Zone" typeOfMovies="" endpoints="&with_genres=10752" />
      <MovieRow forGenre="/discover/" movieType="Horror Haven" typeOfMovies="" endpoints="&with_genres=27" />
      <MovieRow forGenre="/discover/" movieType="Animated Adventures" typeOfMovies="" endpoints="&with_genres=16" />
      <MovieRow forGenre="/discover/" movieType="Documentry" typeOfMovies="" endpoints="&with_genres=99" />
    </div>
  )
}

export default Home