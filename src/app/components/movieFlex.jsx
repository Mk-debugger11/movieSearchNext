"use client";
import { useEffect, useState } from "react";
import MovieCardBig from "./movieCardBig";
import { usePathname } from "next/navigation";
function MovieRow(props) {
    const pathname = usePathname()
    const [movies, setMovies] = useState([])
    useEffect(() => {
        let baseUrl = `https://api.themoviedb.org/3${props.forGenre}movie${props.typeOfMovies}?api_key=bdfbe253a0002085df2d4abcadaf1f17${props.endpoints}`
        if(pathname==='/tvshows'){
            baseUrl = `https://api.themoviedb.org/3${props.forGenre}tv${props.typeOfMovies}?api_key=bdfbe253a0002085df2d4abcadaf1f17${props.endpoints}`
        }
        fetch(baseUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setMovies(data.results)
            })
    }, [])
    const [currentPage, setPage] = useState(1)
    const moviesPerPage = 7;
    const totalPages = Math.ceil(movies.length / moviesPerPage)
    const startIndex = (currentPage - 1) * moviesPerPage
    const endIndex = startIndex + moviesPerPage
    const pagedMovies = movies.slice(startIndex, endIndex)
    console.log(currentPage)
    return (
        <div className="movieRowBox">
            <h3>{props.movieType}</h3>
            <div className="pages">
                <button className="paginationButton left" disabled={currentPage === 1} onClick={() => { setPage(previous => Math.max(previous - 1, 1)) }}>{`<`}</button>
                <div className="movieRow">
                    {pagedMovies.map((ele,index) => {
                        let imageUrl = `https://image.tmdb.org/t/p/original/${ele.poster_path}`
                        return <MovieCardBig key={index} image={imageUrl}/>
                    })}
                </div>
                <button className="paginationButton right" disabled={currentPage === totalPages} onClick={() => { setPage(previous => Math.min(previous + 1, totalPages)) }}>{`>`}</button>
            </div>
        </div>
    )
}
export default MovieRow;