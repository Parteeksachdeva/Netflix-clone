import React from 'react'
import { useState,useEffect } from "react";
import axios from "../axios"
import "./Row.css"

const baseImgUrl = "https://image.tmdb.org/t/p/original";
function Row({title,fetchUrl}) {
const [movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
    
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                    {movies.map(function (movie){
                       return <img src={`${baseImgUrl}${movie.poster_path}`} alt={movie.name} />
                    })}
            </div>

            {/* psters */}
        </div>
    )
}

export default Row
