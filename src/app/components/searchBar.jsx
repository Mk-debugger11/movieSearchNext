"use client";
import '../globals.css'
import { useEffect, useState } from "react";
import MovieCard from "./movieCard.jsx";
import { usePathname } from 'next/navigation';
function InputBox(props) {
    let pathname = usePathname();
    const [movieArray, setMovie] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        let type = "search"
        let baseUrl = `https://api.themoviedb.org/3/${type}/movie?api_key=bdfbe253a0002085df2d4abcadaf1f17&query=${query}`;
        if(pathname === "/tvshows"){
            baseUrl = `https://api.themoviedb.org/3/${type}/tv?api_key=bdfbe253a0002085df2d4abcadaf1f17&query=${query}`;
        }
        fetch(baseUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const nullImageFilter = data.results.filter((ele)=>{
                    return ele.poster_path !== null
                })
                if(pathname === "/bollywood"){
                    const bollywood = nullImageFilter.filter((ele)=>{
                        return ele.original_language === "hi"
                    })
                    setMovie(bollywood)
                    console.log(bollywood)
                    return
                }
                setMovie(nullImageFilter)
                console.log(data)
            })
    }, [query])
    return (
        <div className="input-box">
            <input className="nav-input" type="text" placeholder="Enter Movie Name" onChange={(e) => { setQuery(e.target.value) }} />
            <ul className="searchList">
                {movieArray.map((ele) => {
                    let imageUrl = `https://image.tmdb.org/t/p/w500/${ele.poster_path}`
                    return <li key={ele.id} style={{ display: "flex", flexDirection: 'column', overflowY: 'scroll',overflowX:'hidden',width:'300px',borderBottom:'0.5px solid grey',margin:'0 5px',backgroundColor:'black' }}><MovieCard imagePath={imageUrl} userName={ pathname === "/tvshows" ? ele.name: ele.title}/></li>
                })}
            </ul>
        </div>
    )
}
export default InputBox;