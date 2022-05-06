import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Div, Links, Description } from './MovieDetailsPage.styles';
import { useFetchMovieDetailsPage } from '../../hooks/useFetchMovieDetailsPage';

function MovieDetailsPage() {
  const movie = useFetchMovieDetailsPage();

  return (
    <div>
      <Div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            width="250px"
            alt={'Poster'}
          />
        </div>
        <Description>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}</p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </Description>
      </Div>
      <h5>Additional information</h5>
      <Links>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Rewiews</Link>
      </Links>
      <Outlet />
    </div>
  );
}

MovieDetailsPage.propTypes = {
  movie: PropTypes.object,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};
export default MovieDetailsPage;
