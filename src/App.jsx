import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'components/Layout/Layout';
import { NotFoundPage } from './pages/NotFoundPage';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "HomePage"*/)
);
const Reviews = lazy(() =>
  import('./pages/Reviews/Reviews' /* webpackChunkName: "Reviews"*/)
);
const Cast = lazy(() => import('./pages/Cast/Cast' /* webpackChunkName: "Cast"*/));
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/
  )
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      </Suspense>
    </div>
  );
};
