import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <h1>
      404 Страница не найдена :(, перейдите на{' '}
      <Link to="/">домашнюю страницу</Link>
    </h1>
  );
};