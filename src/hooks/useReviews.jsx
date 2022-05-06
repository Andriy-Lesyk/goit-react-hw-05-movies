import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useReviews = () => {
  const [reviews, setRevievs] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US&page=1`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`По Вашому запиту нічого не знайдено!`)
        );
      })
      .then(response => {
        setRevievs(() => [...response.results]);
      });
  }, [movieId]);

  return reviews;
};
