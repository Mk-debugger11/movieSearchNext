"use client";
import { useEffect, useRef, useState } from "react";
import MovieCardBig from "./movieCardBig";
import { usePathname } from "next/navigation";
function MovieRow(props) {
    const pathname = usePathname()
    const [movies, setMovies] = useState([])
    const parentContainer = useRef(null)
    const movieCard = useRef(null)
    const [containerWidth,setContainerWidth] = useState(null)
    const cardWidth = 203
    const [totalCards,setTotalCards] = useState(0)
    const [distance,setDistance] = useState(0)
    const [viewed,setViewed] = useState(0)
    // for implementing pagination to the movies list for unlimited scrolling
    const [currentPage,setPage] = useState(1)
    const [movieArrayLength,setMovieArrayLength] = useState(0)

    useEffect(()=>{
        const width = parentContainer.current.offsetWidth
        setContainerWidth(width)
    },[])
    useEffect(()=>{
        const totalCards = Math.floor(containerWidth/cardWidth)
        setTotalCards(totalCards)
        console.log(totalCards)
    },[containerWidth])
    function handleRight(){
        const newViewed = viewed + totalCards
        setViewed(newViewed)
        console.log(newViewed)
        const distance = newViewed * cardWidth
        setDistance(distance)
        if((newViewed + totalCards) > movieArrayLength){
            setPage(prev => prev+1)
        }
    }
    function handleLeft(){
        const newViewed = viewed - totalCards
        setViewed(newViewed)
        const distance = newViewed * cardWidth
        setDistance(distance)
    }
    function handleButtonOpacity(){
        const button = document.querySelector('.paginationButton');
        button.style.opacity = 0.8;
    }
    function handleButtonOpacity1(){
        const button = document.querySelector('.paginationButton');
        button.style.opacity = 0.3;
    }
    useEffect(() => {
        const page = 2;
        let baseUrl = `https://api.themoviedb.org/3${props.forGenre}movie${props.typeOfMovies}?api_key=bdfbe253a0002085df2d4abcadaf1f17${props.endpoints}&page=${currentPage}`
        if(pathname==='/tvshows'){
            baseUrl = `https://api.themoviedb.org/3${props.forGenre}tv${props.typeOfMovies}?api_key=bdfbe253a0002085df2d4abcadaf1f17${props.endpoints}&page=${currentPage}`
        }
        fetch(baseUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setMovies((prev) => [...prev,...data.results])
                setMovieArrayLength(prev => prev + data.results.length)
            })
    },[currentPage])
    return (
        <div className="movieRowBox" ref={parentContainer}>
            <h3>{props.movieType}</h3>
            <div className="pages">
                <button className="paginationButton left" onClick={handleLeft} style = {{display: viewed === 0 ? 'none' : 'block'}}>{`<`}</button>
                <div className="movieRow" style={{transform:`translateX(-${distance}px)`}}>
                    {movies && movies.map((ele,index) => {
                        let imageUrl = `https://image.tmdb.org/t/p/original/${ele.poster_path}`;
                        return <MovieCardBig key={index} image={imageUrl} ref={movieCard}/>
                    })}
                </div>
                <button className="paginationButton right" onClick={handleRight} >{`>`}</button>
            </div>
        </div>
    )
}
export default MovieRow;