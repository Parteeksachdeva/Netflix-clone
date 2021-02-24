import React from 'react'
import { useState,useEffect } from "react";
import axios from "../axios"
import "./Row.css"

const baseImgUrl = "https://image.tmdb.org/t/p/original";
function Row({title,fetchUrl,isLarger}) {
const [movies,setMovies] = useState([]);


    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
    // console.log(movies);



    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                    {movies.map(function (movie){
                       return <img key={movie.id} className={`row__image ${isLarger && "row__largeImg"}`} src={`${baseImgUrl}${isLarger ?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                    })}
            </div>
        </div>
    )
}

export default Row
