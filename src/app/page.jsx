import React from 'react'
import MovieRow from './components/movieFlex'
function Home() {
  return (
    <div className='main'>
        <div className="displayMovie"></div>
        <MovieRow typeOfMovies="/popular" movieType="Popular Movies" forGenre = "/" endpoints=""/>
        <MovieRow typeOfMovies="/top_rated" movieType="Top Rated" forGenre = "/" endpoints=""/>
        <MovieRow forGenre = "/discover/" movieType="The Sci-Fi Sphere"  typeOfMovies="" endpoints="&with_genres=878"/>
        <MovieRow forGenre = "/discover/" movieType="War Zone" typeOfMovies="" endpoints="&with_genres=10752"/>
        <MovieRow forGenre = "/discover/" movieType="Horror Haven" typeOfMovies="" endpoints="&with_genres=27"/>
        <MovieRow forGenre = "/discover/" movieType="Animated Adventures" typeOfMovies="" endpoints="&with_genres=16"/>
        <MovieRow forGenre = "/discover/" movieType="Documentry" typeOfMovies="" endpoints="&with_genres=99"/>
    </div>
  )
}

export default Home