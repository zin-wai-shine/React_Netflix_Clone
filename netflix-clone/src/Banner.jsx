import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Banner.css';

function Banner({fetchUrl}) {

    const [movie, movies] = useState([]);

    useEffect(()=>{
        let fetchData = async () => {
            let request = await axios.get(fetchUrl);
            movies(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    function turncate(str, n){
        return str?.length > n ? str.substr(0,n-1)+". . . ." : str;
    }

  return (
    <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}
    >
        <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>  

            <p className="banner__description">
                {turncate(movie?.overview,150)}
            </p>

        </div>
        <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
