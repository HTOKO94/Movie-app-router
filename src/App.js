import React from 'react'
import './App.css';
import MovieNav from './Components/MovieNav/MovieNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import moviesData from "./data/moviesData";
import MoviesList from './Components/MoviesList/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';
import Trailer from './Components/Trailers/TrailerPage';
import Home from './Components/Home/Home';
import { Route, Switch } from "react-router-dom";


function App() {
  const [titleSearch, setTitleSearch ] = useState("")
  const [rateSearch, setRateSearch ] = useState(0)
  const [moviesListData, setMovieListData] = useState(moviesData)

  const getTitleSearch = (input) => {
    setTitleSearch(input);
  }
  const getRateSearch = (input) => {
    setRateSearch(input);
  }

  const getMovieListData = (input) => {
    setMovieListData([ ...moviesListData, input]);
  }


  return (
  <Switch>

  <div>
    <MovieNav getTitleSearch = {getTitleSearch} 
                getSearchRate = {getRateSearch} />
                
<div className="addmovie">
            <AddMovie
             getMovieListData = {getMovieListData}/>
             

            <Route exact path="/" component={Home} />

            <Route
            exact
            path="/trailers"
            render={() => (
    <MoviesList moviesListData={moviesListData} 
                  titleSearch={titleSearch}
                  rateSearch={rateSearch} />
                  )}
                  />
                  <Route path="/trailers/:id" render={() => <Trailer />} />
              </div>
  </div> 
  

  </Switch>
  );
};

export default App;
