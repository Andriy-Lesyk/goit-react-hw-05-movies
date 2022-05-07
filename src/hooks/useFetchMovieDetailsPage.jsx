import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`По Вашому запиту нічого не знайдено!`)
        );
      })
      .then(({ title, genres, vote_average, poster_path, overview }) => {
        setMovie(() => ({
          ...{ title, genres, vote_average, poster_path, overview },
        }));
      });
  }, [movieId]);
  return movie;
};
