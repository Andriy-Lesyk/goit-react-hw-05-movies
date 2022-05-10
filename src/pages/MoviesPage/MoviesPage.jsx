import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './MoviesPage.styles';

function MoviesPage() {
  const [search, setSearch] = useState('');
  const [respArray, setRespArray] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = event => {
    setSearch(event.currentTarget.value);
    setSearchParams({ query: event.currentTarget.value });
  };

  useEffect(() => {
    const query = searchParams.get('query') || '';
    if (!query) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US&page=1&include_adult=false&query=${query}`
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
        setRespArray(() => [...hits]);
      });

    setSearch(query);
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(() => ({ query: event.target.search.value }));
    if (search.trim() === '') {
      alert('Введіть запит!');
      return;
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search movies"
          value={search}
          onChange={handleChange}
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
      {respArray && (
        <ul>
          {respArray.map(({ title, name, id }) => (
            <li key={id}>
              <Link to={{ pathname: `${id}`, state: { location } }}>
                {title ? title : name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesPage;
