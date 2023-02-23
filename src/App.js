// import './App.css';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';

import Layout from './views/Layout';
import Cast from './components/Details/Cast';
import Review from './components/Details/Review';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MoviesPage" */),
);
const PersonsPage = lazy(() =>
  import('./views/PersonsPage' /* webpackChunkName: "PersonsPage" */),
);
const PersonDetailsPage = lazy(() =>
  import('./views/PersonDetailsPage' /* webpackChunkName: "PersonsPage" */),
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies/:type/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>

            <Route path="movies" element={<MoviesPage />} />
            <Route path="persons/:personId" element={<PersonDetailsPage />} />
            <Route path="persons" element={<PersonsPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
