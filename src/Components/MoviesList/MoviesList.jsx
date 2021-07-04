import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import "./MoviesList.css"

function MoviesList({ moviesListData, titleSearch, rateSearch }){
   return(
    <div className="MoviesListMain">
        {moviesListData
        .filter(movie=>movie.title.toLowerCase().includes(titleSearch.toLowerCase()) && movie.rate >= rateSearch )
        .map((movie, index)=> <MoviesCard key ={index} movie={movie}/>)}
    </div>

   )
}

export default MoviesList