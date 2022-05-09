import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Div, Links, Description, Btn, Arrow } from './MovieDetailsPage.styles';
import { useFetchMovieDetailsPage } from '../../hooks/useFetchMovieDetailsPage';

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const { title, vote_average, poster_path, overview, genres } =
    useFetchMovieDetailsPage();
 
  const onGoBack = () => {
    navigate('/movies');
  };

  return (
    <div>
      <Div>
        <div>
          <Btn type="button" onClick={onGoBack}>
            <Arrow /> Go back
          </Btn>
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            width="250px"
            alt={'Poster'}
          />
        </div>
        <Description>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
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
