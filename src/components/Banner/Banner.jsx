import React,{useEffect, useState} from 'react'
import {API_KEY} from '../../constants/constant'
import axios  from "../../axios"
import { imageUrl } from '../../constants/constant';

import "./Banner.css";
export default function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then ((response)=>{
    console.log(response.data)
    const results = response.data.results;
    const randomIndex = Math.floor(Math.random() * results.length); // Get a random index
    setMovie(results[randomIndex]);
   })
  
    },[])
  

  
  return (
    <div
    style={{backgroundImage:`url( ${movie ?imageUrl + movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
        <h1 className='title'>{movie ? movie.name : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}
