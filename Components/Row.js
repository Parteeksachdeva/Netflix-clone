import React from 'react'
import { useState,useEffect } from "react";
import axios from "../axios"
import "./Row.css"
import youtube from "../Youtube";

const baseImgUrl = "https://image.tmdb.org/t/p/original";
const API_YOUTUBE_KEY="AIzaSyDeKuzvpDIFwKUiZvBd4xDwC3VtYOFDHtk";
function Row({title,fetchUrl,isLarger}) {
const [movies,setMovies] = useState([]);
const [Frame,setFrame] = useState(false);
const [id,setId] = useState("");

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
                       return <img key={movie.id} className={`row__image ${isLarger && "row__largeImg"}`} src={`${baseImgUrl}${isLarger ?movie.poster_path:movie.backdrop_path}`} alt={movie.name} onClick={()=>{
                       if(Frame) {
                           setFrame(false);
                           setId("");
                       }
                        else {
                        setFrame(true);
                        async function fetchYoutubeData(){
                            const request = await youtube.get(`/search?key=${API_YOUTUBE_KEY}&part=snippet&q=${movie?.name}Netflixtrailer`);
                            setId(request?.data?.items[0]?.id?.videoId);
                            //console.log("aaa");
                            return request;
                        }
                        fetchYoutubeData();
                    }
                    }} />
                    })}
            </div>
            {Frame && <div className="row__frame"><iframe  allow="autoplay" width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>}
        </div>
    )
}

export default Row

