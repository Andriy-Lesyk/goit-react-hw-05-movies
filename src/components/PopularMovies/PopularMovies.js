import moviesApi from '../../services/moviesApi';
import React from 'react';

function PopularMovies() {
  moviesApi.then(response => console.log(response));
  return <div></div>;
}

export default PopularMovies;
