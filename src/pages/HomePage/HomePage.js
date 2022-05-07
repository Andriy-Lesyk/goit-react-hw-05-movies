import React from 'react';
import { Link } from 'react-router-dom';
import {useFetchHomePage } from '../../hooks/useFetchHomePage'


function HomePage() {
  const movies = useFetchHomePage();

  return (
    <>
      <h2>Trending today</h2>

      {movies && (
        <ul>
          {movies.map(({id, title, name}) => (
            <li key={id}>
              <Link to={`movies/${id}'`}>
                {title ? title : name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default HomePage;
