"use client";
import { useEffect, useRef, useState } from "react";
import MovieCardBig from "./movieCardBig";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useMovieStore from "../store/moviesZustand";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
function MovieRow(props) {
    const addToHistory = useMovieStore(state => state.addHistory)

    // carousel states
    const parentContainer = useRef(null)
    const movieCard = useRef(null)
    const [containerWidth, setContainerWidth] = useState(null)
    const cardWidth = 203
    const [totalCards, setTotalCards] = useState(0)
    const [distance, setDistance] = useState(0)
    const [viewed, setViewed] = useState(0)
    // carousel states

    useEffect(() => {
        const width = parentContainer.current.offsetWidth
        setContainerWidth(width)
    }, [])
    useEffect(() => {
        const totalCards = Math.floor(containerWidth / cardWidth)
        setTotalCards(totalCards)
        console.log(totalCards)
    }, [containerWidth])

    function handleRight() {
        const newViewed = viewed + totalCards
        setViewed(newViewed)
        console.log(newViewed)
        const distance = newViewed * cardWidth
        setDistance(distance)
    }
    function handleLeft() {
        const newViewed = viewed - totalCards
        setViewed(newViewed)
        const distance = newViewed * cardWidth
        setDistance(distance)
    }
    const fetchData = ({ pageParam }) => {
        let baseUrl = `https://api.themoviedb.org/3${props.forGenre}movie${props.typeOfMovies}?api_key=bdfbe253a0002085df2d4abcadaf1f17${props.endpoints}&page=${pageParam}`
        return fetch(baseUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                return data.results
            })
    }
    
    const { data , fetchNextPage } = useInfiniteQuery({
        queryKey: ["movies", props.movieType],
        queryFn: (pageParam) => fetchData(pageParam),
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages) => {
            if (allPages.length < 200) {
                return allPages.length + 1
            } else {
                return undefined
            }
        },
        staleTime: 1000 * 60 * 60, 
        cacheTime: 1000 * 60 * 60 * 24, 
    })
    const { ref , inView } = useInView()
    useEffect(()=>{
        if(inView){
            fetchNextPage()
        }
    },[inView,fetchNextPage])
    console.log(data)
    return (
        <div className="movieRowBox" ref={parentContainer}>
            <h3>{props.movieType}</h3>
            <div className="pages">
                <button className="paginationButton left" onClick={handleLeft} style={{ display: viewed === 0 ? 'none' : 'block' }}>{`<`}</button>
                <div className="movieRow" style={{ transform: `translateX(-${distance}px)` }}>
                    {data && data.pages.map((ele) => {
                        return ele.map((movie,index) => {
                            let imageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
                            return (
                                <div onClick={() => addToHistory(movie)} key={index}>
                                    <Link scroll={true} href={`/movie/${movie.id}`}>
                                        <MovieCardBig image={imageUrl} ref={movieCard} />
                                    </Link>
                                </div>
                            );
                        })

                    })}
                    <div ref={ref}></div>
                </div>
                <button className="paginationButton right" onClick={handleRight} >{`>`}</button>
            </div>
        </div>
    )
}
export default MovieRow;