import React from 'react'
import MovieRow from '../components/movieFlex'
import Preview from '../components/previewCarousel'
function Bollywood() {
    return (
        <div className='main'>
            <div className="displayMovie">
                <Preview movieId={1227128}/>
            </div>
            <MovieRow typeOfMovies="" movieType="Popular Movies" forGenre="/discover/" endpoints="&with_original_language=hi&sort_by=popularity.desc" />
            <MovieRow forGenre="/discover/" movieType="The Sci-Fi Sphere" typeOfMovies="" endpoints="&with_original_language=hi&with_genres=878" />
            <MovieRow forGenre="/discover/" movieType="Comedy" typeOfMovies="" endpoints="&with_original_language=hi&with_genres=35" />
            <MovieRow forGenre="/discover/" movieType="Animation" typeOfMovies="" endpoints="&with_original_language=hi&with_genres=16" />
            <MovieRow forGenre="/discover/" movieType="Family" typeOfMovies="" endpoints="&with_original_language=hi&with_genres=10751" />
            <MovieRow forGenre="/discover/" movieType="Action Packed" typeOfMovies="" endpoints="&with_original_language=hi&with_genres=28" />
        </div>
    )
}

export default Bollywood