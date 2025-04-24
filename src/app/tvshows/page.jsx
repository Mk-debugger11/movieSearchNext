import React from 'react'
import MovieRow from '../components/movieFlex'
function Tvshows() {
  return (
    <div className='main'>
            <div className="displayMovie"></div>
            <MovieRow typeOfMovies="/popular" movieType="Popular Shows" forGenre = "/" endpoints=""/>
            <MovieRow typeOfMovies="/top_rated" movieType="Top Rated" forGenre = "/" endpoints=""/>
            <MovieRow forGenre = "/discover/" movieType="The Sci-Fi Sphere"  typeOfMovies="" endpoints="&with_genres=10765"/>
            <MovieRow forGenre = "/discover/" movieType="War & Politics" typeOfMovies="" endpoints="&with_genres=10768"/>
            <MovieRow forGenre = "/discover/" movieType="Drama" typeOfMovies="" endpoints="&with_genres=18"/>
            <MovieRow forGenre = "/discover/" movieType="Animated Adventures" typeOfMovies="" endpoints="&with_genres=16"/>
            <MovieRow forGenre = "/discover/" movieType="Documentry" typeOfMovies="" endpoints="&with_genres=99"/>
        </div>
  )
}

export default Tvshows