import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useFetchHomePage } from '../../hooks/useFetchHomePage'


function HomePage() {
  const movies = useFetchHomePage();

  return (
    <>
      <h2>Trending today</h2>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}'`}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default HomePage;
