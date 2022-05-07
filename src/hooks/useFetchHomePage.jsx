import { useState, useEffect } from 'react';

export const useFetchHomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=a4a29fffc470fecd93a30cf31010c680`
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
        const hits = response.results.map(({ title, id, name }) => ({
          title,
          id,
          name,
        }));
        setMovies(() => [...hits]);
      });
  }, []);

  return movies;
};
