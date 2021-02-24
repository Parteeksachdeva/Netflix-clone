import React from 'react'
import "./Banner.css"
import {useEffect,useState} from 'react'
import axios from "../axios";
import Button from '@material-ui/core/Button';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';



function Banner({fetchUrl}) {
    const [movies,setMovies] = useState([]);
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
           setMovies(request.data.results[
               Math.floor(Math.random() * request.data.results.length)
           ]);
            return request;
        }
        fetchData();
    },[fetchUrl])
    console.log(movies);
    return (
        <header className="banner"
            style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url(
                        "${baseImgUrl}${movies?.backdrop_path}"
                    )`,
                    backgroundPosition: "center center",
                }
            }
        >
            <div className="banner__contents">
                <h1>{movies?.name || movies?.title || movies?.orignal_name}</h1>
                <div className="banner__btns">
                    <Button>Play</Button>
                    <Button>More Info</Button>
                </div>
                <p>{movies.overview}</p>
            </div>
            <div className="banner__fadeBottom">


            </div>
        </header>
    )
}

export default Banner
